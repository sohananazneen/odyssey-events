"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import eventsData from "@/data/eventsData";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const categories = useMemo(
    () => [
      "all",
      ...new Set(eventsData.map((event) => event.additional_info.category)),
    ],
    [],
  );

  const locations = useMemo(
    () => [
      "all",
      ...new Set(eventsData.map((event) => event.additional_info.location)),
    ],
    [],
  );

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const searchLower = searchQuery.toLowerCase().trim();

      const matchesSearch =
        searchLower === "" ||
        event.title.toLowerCase().includes(searchLower) ||
        event.short_description.toLowerCase().includes(searchLower) ||
        event.full_description.toLowerCase().includes(searchLower);

      const matchesCategory =
        categoryFilter === "all" ||
        event.additional_info.category === categoryFilter;

      const matchesLocation =
        locationFilter === "all" ||
        event.additional_info.location === locationFilter;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, categoryFilter, locationFilter]);

  const handleReset = () => {
    setSearchQuery("");
    setCategoryFilter("all");
    setLocationFilter("all");
  };

  return (
    <div className="min-h-screen bg-base-200 pb-20">
      {/* --- HERO SECTION --- */}
      <div className="bg-primary text-primary-content pt-20 pb-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Odyssey <span className="text-secondary-content">Events</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover extraordinary experiences across Bangladesh—from
            high-profile summits to vibrant music festivals.
          </p>
        </div>
      </div>

      {/* --- SEARCH & FILTER CARD --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="card bg-base-100 shadow-2xl p-6 md:p-8 border border-base-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {/* Search Bar */}
            <div className="form-control md:col-span-2">
              <label className="label pt-0">
                <span className="label-text font-bold text-primary uppercase tracking-wider text-xs">
                  Search Events
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ex: Tech Expo, Music Fiesta..."
                  className="input input-bordered w-full pl-10 focus:input-primary bg-base-200/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute left-3 top-3.5 opacity-40">🔍</span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text font-bold text-primary uppercase tracking-wider text-xs">
                  Category
                </span>
              </label>
              <select
                className="select select-bordered w-full focus:select-primary bg-base-200/50 capitalize"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text font-bold text-primary uppercase tracking-wider text-xs">
                  Location
                </span>
              </label>
              <select
                className="select select-bordered w-full focus:select-primary bg-base-200/50 capitalize"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === "all" ? "All Bangladesh" : loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* --- RESULTS SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex justify-between items-center mb-8 border-b border-base-300 pb-4">
          <div>
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <p className="text-sm opacity-60">
              Showing {filteredEvents.length} results found
            </p>
          </div>
          {/* Reset button logic */}
          {(searchQuery !== "" ||
            categoryFilter !== "all" ||
            locationFilter !== "all") && (
            <button
              onClick={handleReset}
              className="btn btn-ghost btn-sm text-error"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 overflow-hidden"
              >
                {/* Image Wrap */}
                <figure className="h-56 relative overflow-hidden">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="badge badge-primary font-bold py-3 shadow-lg uppercase text-[10px]">
                      {event.additional_info.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-black/60 backdrop-blur-md text-white px-4 py-2 text-sm">
                    📍 {event.additional_info.location}
                  </div>
                </figure>

                {/* Card Body */}
                <div className="card-body p-6">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h2 className="card-title text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {event.title}
                    </h2>
                  </div>

                  <p className="text-sm opacity-70 line-clamp-2 mb-4">
                    {event.short_description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm font-medium opacity-80">
                      <span>📅</span>{" "}
                      {new Date(event.additional_info.date).toLocaleDateString(
                        "en-GB",
                        { day: "numeric", month: "long", year: "numeric" },
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-primary">
                      <span>💰</span>{" "}
                      {event.additional_info.price === 0
                        ? "Free Entry"
                        : `$${event.additional_info.price}`}
                    </div>
                  </div>

                  <div className="card-actions pt-4 border-t border-base-200">
                    <Link href={`/events/${event.id}`} className="w-full">
                      <button className="btn btn-primary btn-block group-hover:shadow-lg">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-base-100 rounded-3xl shadow-inner">
            <div className="text-6xl mb-4">🏜️</div>
            <h3 className="text-2xl font-bold opacity-80">
              No events match your criteria
            </h3>
            <p className="opacity-60 mt-2">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
