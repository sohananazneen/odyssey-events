export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Event Planning Tips for 2026",
      excerpt:
        "Discover the latest trends and strategies for creating unforgettable events that leave lasting impressions on your guests.",
      date: "April 15, 2026",
      author: "Sarah Johnson",
      category: "Planning",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Venue",
      excerpt:
        "A comprehensive guide to selecting the ideal location for your event, considering capacity, ambiance, and logistics.",
      date: "April 10, 2026",
      author: "Michael Chen",
      category: "Venues",
    },
    {
      id: 3,
      title: "Sustainable Events: Going Green",
      excerpt:
        "Learn how to organize eco-friendly events that reduce environmental impact while maintaining quality and guest experience.",
      date: "April 5, 2026",
      author: "Emily Davis",
      category: "Sustainability",
    },
    {
      id: 4,
      title: "Corporate Event Trends to Watch",
      excerpt:
        "Stay ahead of the curve with these emerging trends in corporate event planning and execution.",
      date: "March 28, 2026",
      author: "David Wilson",
      category: "Corporate",
    },
    {
      id: 5,
      title: "Budget-Friendly Event Ideas",
      excerpt:
        "Creative ways to host amazing events without breaking the bank. Tips and tricks for cost-effective planning.",
      date: "March 20, 2026",
      author: "Lisa Anderson",
      category: "Budget",
    },
    {
      id: 6,
      title: "The Future of Virtual Events",
      excerpt:
        "Exploring how hybrid and virtual events are reshaping the industry and what it means for event planners.",
      date: "March 15, 2026",
      author: "James Brown",
      category: "Technology",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="bg-primary text-primary-content py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl opacity-90">
            Insights, tips, and stories from the world of event planning
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-primary">{post.category}</span>
                  <span className="text-sm opacity-60">{post.date}</span>
                </div>
                <h2 className="card-title text-2xl mb-3">{post.title}</h2>
                <p className="opacity-70 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm opacity-60">By {post.author}</span>
                  <button className="btn btn-sm btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
