import React from "react";
import Link from "next/link";
import eventsData from "../../data/eventsData";

const FeaturedEvents = () => {
  const featuredEvents = eventsData.slice(0, 3);

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Featured Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t miss out on these upcoming exciting events
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{event.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {event.short_description}
                  </p>
                  <div className="card-actions justify-between items-center mt-4">
                    <span className="badge badge-primary">
                      {event.additional_info.category}
                    </span>
                    <Link
                      href={`/events/${event.id}`}
                      className="btn btn-sm btn-outline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedEvents;
