import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We'd love to hear from you! Feel free to reach out.</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8 space-y-12">
        {/* Contact Form */}
        <section className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800">Get in Touch</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-lg font-medium mb-2 text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2 text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Enter the subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2 text-gray-700">Message</label>
            <textarea
              placeholder="Write your message here"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-3 rounded-lg transition duration-300"
            onClick={() => alert("Your message was sent successfully!")}
          >
            Send Message
          </button>
        </form>

        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Contact Information</h2>
          <p className="text-lg">
            <strong>Email:</strong> <a href="mailto:info@internshippakistan.com" className="text-blue-500">info@internshippakistan.com</a>
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> +92-300-1234567
          </p>
          <p className="text-lg">
            <strong>Address:</strong> Lahore, Pakistan
          </p>
        </section>

        {/* Location Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-4 text-blue-800">Our Location</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.356416817671!2d74.3587473!3d31.5203694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c3b48b7e3f%3A0x55f2935de8e70cd6!2sLahore!5e0!3m2!1sen!2s!4v1614335201568!5m2!1sen!2s"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4">
        <p className="text-sm">&copy; 2025 Internship Pakistan. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
