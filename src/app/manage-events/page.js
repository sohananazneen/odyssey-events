"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../lib/AuthContext";
import eventsData from "../../data/eventsData";

export default function ManageEventsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [Events, setEvents] = useState(eventsData);
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleView = (Event) => {
    setSelectedEvent(Event);
  };

  const getPriorityBadge = (priority) => {
    const colors = {
      low: "badge-success",
      medium: "badge-warning",
      high: "badge-error",
    };
    return colors[priority] || "badge-neutral";
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-base-content">
              Manage Events
            </h1>
            <p className="mt-2 text-base-content/70">
              View and manage your Events
            </p>
          </div>
          <Link href="/add-Event" className="btn btn-primary">
            Add New Event
          </Link>
        </div>

        {Events.length === 0 ? (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-lg font-semibold">No Events yet</h3>
              <p className="text-base-content/70">
                Create your first Event to get started
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto bg-base-100 shadow-xl rounded-lg">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Events.map((Event) => (
                  <tr key={Event.id}>
                    <td>
                      <div className="avatar">
                        <div className="w-12 h-12 rounded">
                          <img
                            src={
                              Event.image_url ||
                              "https://via.placeholder.com/48"
                            }
                            alt={Event.title}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-semibold">{Event.title}</div>
                      <div className="text-xs text-base-content/60">
                        {Event.short_description}
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost">
                        {Event.additional_info?.category || "N/A"}
                      </span>
                    </td>
                    <td className="font-bold">
                      {Event.additional_info?.price !== undefined
                        ? `$${Event.additional_info.price.toFixed(2)}`
                        : "N/A"}
                    </td>
                    <td>{Event.additional_info?.date || "N/A"}</td>
                    <td>{Event.additional_info?.location || "N/A"}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          className="btn btn-sm btn-info"
                          onClick={() => handleView(Event)}
                        >
                          View
                        </button>
                        <button className="btn btn-sm btn-error">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* View Modal */}
        {selectedEvent && (
          <dialog className="modal modal-open">
            <div className="modal-box max-w-2xl">
              <h3 className="font-bold text-lg mb-4">{selectedEvent.title}</h3>
              <div className="space-y-4">
                {selectedEvent.image_url && (
                  <img
                    src={selectedEvent.image_url}
                    alt={selectedEvent.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}
                <div>
                  <span className="font-semibold">Short Description:</span>
                  <p className="text-sm">{selectedEvent.short_description}</p>
                </div>
                <div>
                  <span className="font-semibold">Full Description:</span>
                  <p className="text-sm">{selectedEvent.full_description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">Price:</span>
                    <p className="text-lg font-bold">
                      {selectedEvent.additional_info?.price !== undefined
                        ? `$${selectedEvent.additional_info.price.toFixed(2)}`
                        : "N/A"}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold">Date:</span>
                    <p>{selectedEvent.additional_info?.date || "N/A"}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Category:</span>
                    <p>{selectedEvent.additional_info?.category || "N/A"}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Location:</span>
                    <p>{selectedEvent.additional_info?.location || "N/A"}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Organizer:</span>
                    <p>{selectedEvent.additional_info?.organizer || "N/A"}</p>
                  </div>
                </div>
              </div>
              <div className="modal-action">
                <button className="btn" onClick={() => setSelectedEvent(null)}>
                  Close
                </button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setSelectedEvent(null)}>close</button>
            </form>
          </dialog>
        )}
      </div>
    </div>
  );
}
