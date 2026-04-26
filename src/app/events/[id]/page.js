import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import eventsData from "../../../data/eventsData";

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id.toString(),
  }));
}

export default async function EventDetails({ params }) {
  const { id } = await params;
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) {
    notFound();
  }

  const relatedEvents = event.related_items
    ? eventsData.filter((e) => event.related_items.includes(e.id))
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Events
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative h-96">
            <img
              src={event.image_url}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="badge badge-primary badge-lg">
                {event.additional_info.category}
              </span>
            </div>
          </div>

          <div className="p-8">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

            {/* Additional Info Bar */}
            <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  {new Date(event.additional_info.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  {event.additional_info.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  {event.additional_info.price === 0
                    ? "Free"
                    : `৳${event.additional_info.price}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="text-gray-700 font-medium">
                  {event.additional_info.organizer}
                </span>
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">About This Event</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {event.full_description}
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(event.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <h3 className="font-semibold text-gray-800 capitalize mb-2">
                      {key.replace(/_/g, " ")}
                    </h3>
                    <p className="text-gray-600">
                      {Array.isArray(value) ? value.join(", ") : value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Related Events</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedEvents.map((relatedEvent) => (
                    <Link
                      key={relatedEvent.id}
                      href={`/events/${relatedEvent.id}`}
                      className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    >
                      <figure>
                        <img
                          src={relatedEvent.image_url}
                          alt={relatedEvent.title}
                          className="w-full h-40 object-cover"
                        />
                      </figure>
                      <div className="card-body p-4">
                        <h3 className="card-title text-lg">
                          {relatedEvent.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedEvent.short_description}
                        </p>
                        <div className="card-actions justify-between items-center mt-2">
                          <span className="badge badge-secondary badge-sm">
                            {relatedEvent.additional_info.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {relatedEvent.additional_info.price === 0
                              ? "Free"
                              : `৳${relatedEvent.additional_info.price}`}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
