const page = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero bg-base-200 py-6">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">About Odyssey Events</h1>
            <p className="text-lg text-gray-600">
              Your premier destination for discovering and hosting extraordinary
              events across Bangladesh
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Odyssey Events, we believe in creating memorable experiences that
            bring people together. Whether you&apos;re looking to attend
            corporate summits, music festivals, cultural gatherings, or private
            celebrations, we&apos;re here to help you discover and book your
            next unforgettable experience.
          </p>
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Curated event listings across Bangladesh</li>
            <li>Easy booking and ticket management</li>
            <li>Event hosting solutions for organizers</li>
            <li>Real-time event updates and notifications</li>
          </ul>
        </div>

        <div className="card bg-base-100 shadow-xl max-w-3xl mx-auto">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200"
              alt="Event venue"
              className="rounded-xl w-full h-64 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">Join Our Community</h2>
            <p className="text-gray-600 max-w-2xl">
              Be part of Bangladesh&apos;s growing event community. Connect with
              organizers, discover new experiences, and create lasting memories.
            </p>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
