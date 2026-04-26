const HeroSection = () => {
  return (
    <div
      className="hero min-h-[70vh] lg:min-h-[85vh] relative bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1651667765580-f393a9b70af1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc5fHxldmVudCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D")`,
      }}
    >
      <div className="hero-overlay bg-gradient-to-b from-black/20 to-black/10"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl px-4">
          <h1 className="mb-6 text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Odyssey <span className="text-primary">Events</span>
          </h1>
          <p className="mb-8 text-lg md:text-2xl text-gray-100 font-light max-w-lg mx-auto">
            Discover extraordinary events across Bangladesh. From corporate
            summits to vibrant music festivals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg px-8 shadow-lg hover:scale-105 transition-transform">
              Explore Events
            </button>
            <button className="btn btn-outline btn-lg text-white border-white/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all">
              Host Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
