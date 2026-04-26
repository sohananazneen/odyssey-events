import React from "react";

const CTABanner = () => {
  return (
    <>
      <section className="py-12 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of event-goers and organizers. Create your account
            today and discover extraordinary experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-secondary btn-lg">Sign Up Free</button>
            <button className="btn btn-outline btn-lg">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTABanner;
