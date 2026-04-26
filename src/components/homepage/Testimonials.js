import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our community of event-goers and organizers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Ahmed</h4>
                    <p className="text-sm text-gray-500">Event Attendee</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;Odyssey Events made it so easy to find and book tickets
                  for conferences. The platform is intuitive and the support
                  team is amazing!&quot;
                </p>
                <div className="rating rating-sm mt-4">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Rahman Khan</h4>
                    <p className="text-sm text-gray-500">Event Organizer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;As an organizer, this platform has transformed how I
                  manage events. The dashboard is powerful and the reach is
                  incredible.&quot;
                </p>
                <div className="rating rating-sm mt-4">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="User"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Fatima Begum</h4>
                    <p className="text-sm text-gray-500">Music Lover</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;I&apos;ve discovered so many amazing concerts through
                  Odyssey Events. The recommendations are spot-on!&quot;
                </p>
                <div className="rating rating-sm mt-4">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
