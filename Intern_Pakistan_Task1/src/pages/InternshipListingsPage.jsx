import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InternshipListingsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');

  const navigate = useNavigate();

  const internships = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      location: 'Lahore',
      duration: '3 months',
      description: 'Work on exciting frontend projects using React.js and Tailwind CSS.',
    },
    {
      title: 'Backend Developer Intern',
      company: 'Innovatech Co.',
      location: 'Karachi',
      duration: '6 months',
      description: 'Develop robust APIs and manage server-side infrastructure.',
    },
    {
      title: 'UI/UX Designer Intern',
      company: 'Creative Minds Studio',
      location: 'Islamabad',
      duration: '4 months',
      description: 'Design user-friendly interfaces and create engaging prototypes.',
    },
    {
      title: 'Data Analyst Intern',
      company: 'Insight Analytics',
      location: 'Lahore',
      duration: '2 months',
      description: 'Analyze datasets to uncover insights and support decision-making.',
    },
    {
      title: 'Digital Marketing Intern',
      company: 'Growth Hackers',
      location: 'Karachi',
      duration: '5 months',
      description: 'Work on SEO strategies, social media campaigns, and analytics.',
    },
  ];

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      internship.location.toLowerCase().includes(location.toLowerCase()) &&
      internship.duration.toLowerCase().includes(duration.toLowerCase())
  );

  const handleApplyNow = (internship) => {
    navigate('/internship-details', { state: { internship } });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Internship Listings</h1>
        <p className="mt-2 text-lg">Find the perfect internship opportunity to kickstart your career.</p>
      </header>

      {/* Filters */}
      <div className="max-w-4xl mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by title"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by location"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by duration"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      {/* Internship Cards */}
      <div className="max-w-6xl mx-auto mt-8 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInternships.map((internship, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">{internship.title}</h2>
            <p className="text-blue-600 font-medium mb-1">{internship.company}</p>
            <p className="text-gray-600 mb-1">Location: {internship.location}</p>
            <p className="text-gray-600 mb-1">Duration: {internship.duration}</p>
            <p className="text-gray-700 mt-3">{internship.description}</p>
            <button
              onClick={() => handleApplyNow(internship)}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredInternships.length === 0 && (
        <p className="mt-8 text-center text-gray-600">No internships match your criteria.</p>
      )}

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        <p>&copy; 2025 Internship Pakistan. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default InternshipListingsPage;
