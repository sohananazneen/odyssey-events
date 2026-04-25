import Image from "next/image";

const page = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
          alt="About Odyssey Events"
          width={400}
          height={300}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Odyssey Events</h1>
          <p className="py-6">
            Your premier destination for discovering and hosting extraordinary
            events across Bangladesh. From corporate summits to music festivals,
            find and book your next unforgettable experience with us.
          </p>
          <p className="mb-8">
            Discover. Experience. Host. Odyssey Events is Bangladesh's leading
            marketplace for world-class experiences. Whether you are looking to
            network at a tech conference, lose yourself in a concert, or
            organize your own large-scale festival, we provide the tools and the
            stage. Explore curated events across the nation and transform your
            weekends into a series of unforgettable memories.
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
