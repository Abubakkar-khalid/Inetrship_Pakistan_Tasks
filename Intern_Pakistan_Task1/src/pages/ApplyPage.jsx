import React from 'react';

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Apply for Internship</h1>
        <p className="mt-2 text-lg">Fill out the form below to apply for an internship opportunity.</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8 space-y-12">
        {/* Application Form */}
        <section className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800">Application Form</h2>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Your application was submitted successfully!");
            }}
          >
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Internship Title</label>
              <input
                type="text"
                placeholder="Enter the internship title you are applying for"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Upload Resume</label>
              <input
                type="file"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Additional Message (Optional)</label>
              <textarea
                placeholder="Write your message here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-3 rounded-lg transition duration-300"
            >
              Submit Application
            </button>
          </form>

        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4">
        <p className="text-sm">&copy; 2025 Internship Pakistan. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ApplyPage;
