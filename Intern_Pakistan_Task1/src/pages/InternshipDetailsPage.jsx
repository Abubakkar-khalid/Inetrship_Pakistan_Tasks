import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InternshipDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { internship } = location.state || {};

  if (!internship) {
    return <p className="text-center text-gray-600 mt-10">No internship selected.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-8 sm:py-10">
        <h1 className="text-2xl sm:text-4xl font-bold">{internship.title}</h1>
        <p className="mt-2 text-sm sm:text-lg font-medium">{internship.company}</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-6 sm:mt-10 px-4 py-6 sm:p-8 bg-white rounded-lg shadow-lg">
        {/* Internship Details */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Internship Details</h2>
          <p className="text-sm sm:text-base"><strong>Location:</strong> {internship.location}</p>
          <p className="text-sm sm:text-base"><strong>Duration:</strong> {internship.duration}</p>
          <p className="text-sm sm:text-base mt-4">{internship.description}</p>
        </section>

        {/* Required Skills */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Required Skills</h2>
          <ul className="list-disc pl-5 text-sm sm:text-base">
            <li>Proficiency in relevant technologies (e.g., React.js, Tailwind CSS for frontend).</li>
            <li>Strong problem-solving and analytical skills.</li>
            <li>Excellent communication and teamwork abilities.</li>
            <li>Passion for learning and adapting to new challenges.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Benefits of this Internship</h2>
          <ul className="list-disc pl-5 text-sm sm:text-base">
            <li>Gain hands-on experience in a professional environment.</li>
            <li>Work under the guidance of industry experts.</li>
            <li>Build a strong portfolio to showcase your skills.</li>
            <li>Networking opportunities with professionals in your field.</li>
            <li>Flexible working hours and remote work options (if applicable).</li>
          </ul>
        </section>

        {/* Application Process */}
        <section className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Application Process</h2>
          <p className="text-sm sm:text-base">To apply for this internship, please follow the steps below:</p>
          <ol className="list-decimal pl-5 mt-2 text-sm sm:text-base">
            <li>Click the "Apply Now" button below.</li>
            <li>Fill out the application form with your personal and professional details.</li>
            <li>Upload your updated resume and cover letter.</li>
            <li>Submit your application and wait for confirmation.</li>
          </ol>
        </section>

        {/* Apply Now Button */}
        <button
          onClick={() => navigate('/apply')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition"
        >
          Apply Now
        </button>

        {/* Back to Listings Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition"
        >
          Back to Listings
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-8 sm:mt-10">
        <p className="text-sm sm:text-base">&copy; 2025 Internship Pakistan. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default InternshipDetailsPage;
