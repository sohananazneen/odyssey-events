import React from "react";

const FeaturedEvents = () => {
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
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://plus.unsplash.com/premium_photo-1661394880478-532dfbeaa421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg0fHx8ZW58MHx8fHx8"
                  alt="Tech Conference"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Tech Summit 2025</h3>
                <p className="text-gray-600 text-sm">
                  Join industry leaders for Bangladesh&apos;s biggest tech
                  conference
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="badge badge-primary">Upcoming</span>
                  <button className="btn btn-sm btn-outline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1701253162648-802f396aa692?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Music Festival"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Summer Fest</h3>
                <p className="text-gray-600 text-sm">
                  Three days of live music featuring local and international
                  artists
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="badge badge-secondary">Hot</span>
                  <button className="btn btn-sm btn-outline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400"
                  alt="Business Expo"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Business Expo 2025</h3>
                <p className="text-gray-600 text-sm">
                  Network with entrepreneurs and explore business opportunities
                </p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="badge badge-accent">Limited</span>
                  <button className="btn btn-sm btn-outline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedEvents;
