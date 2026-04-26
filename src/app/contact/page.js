export default function Contact() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="bg-primary text-primary-content py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">Email</h3>
              <p className="opacity-70">info@odysseyevents.com</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">Phone</h3>
              <p className="opacity-70">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">Location</h3>
              <p className="opacity-70">123 Event Street, City, ST 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
