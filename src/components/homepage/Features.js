import React from "react";

const Features = () => {
  return (
    <>
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Odyssey Events?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the features that make us Bangladesh&apos;s leading event
              platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="card-title">Curated Events</h3>
                <p className="text-gray-600">
                  Hand-picked events from trusted organizers across the country
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="card-title">Secure Booking</h3>
                <p className="text-gray-600">
                  Safe and secure ticket purchasing with instant confirmation
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="card-title">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock customer support for all your event needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
