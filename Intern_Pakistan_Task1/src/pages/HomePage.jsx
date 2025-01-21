import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      {/* Hero Section */}
      <main className="px-8 py-16 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">Welcome to Internship Pakistan</h1>
        <p className="text-xl text-gray-700 mb-8">Your journey to a brighter future starts here. Explore opportunities, gain experience, and build your career with us.</p>
        <Link to="/internships" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">Explore Internships</Link>
      </main>

      {/* Featured Internships Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Featured Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow rounded text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Web Development Internship</h3>
              <p className="text-gray-600">Learn full-stack web development with industry experts.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition">Learn More</button>
            </div>
            <div className="bg-white p-6 shadow rounded text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Digital Marketing Internship</h3>
              <p className="text-gray-600">Gain hands-on experience in online marketing and analytics.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition">Learn More</button>
            </div>
            <div className="bg-white p-6 shadow rounded text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Graphic Design Internship</h3>
              <p className="text-gray-600">Build your portfolio with real-world design projects.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">What Our Interns Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 shadow rounded">
              <p className="text-gray-600 italic">"This internship provided me with the skills and confidence to start my career!"</p>
              <h4 className="text-blue-600 font-bold mt-4">- Sarah Ali</h4>
            </div>
            <div className="bg-gray-100 p-6 shadow rounded">
              <p className="text-gray-600 italic">"A truly transformative experience with amazing mentors and projects."</p>
              <h4 className="text-blue-600 font-bold mt-4">- Ahmed Khan</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
          <p className="text-sm">&copy; 2025 Internship Pakistan. All rights reserved.</p>
          <div className="space-x-4">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
