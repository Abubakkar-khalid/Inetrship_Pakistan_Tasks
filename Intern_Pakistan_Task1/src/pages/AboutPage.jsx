import React from 'react';
import picture1 from '../assets/Hammad Khalil.jpg';
import picture2 from '../assets/Zubair Khalil.jpg';
import picture3 from '../assets/Reinhard.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
      </header>
      
      {/* Main Content */}
      <main className="p-8 space-y-12">
        {/* Who We Are */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Internship Pakistan is dedicated to empowering students by connecting them with valuable opportunities in the professional world. 
            We aim to provide a platform where aspiring professionals can develop their skills and grow in a competitive environment.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to bridge the gap between students and employers by offering high-quality, virtual internship programs. 
            We believe in fostering a culture of learning, growth, and innovation.
          </p>
        </section>

        {/* Journey */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Founded in 2020 to address the lack of practical learning opportunities.</li>
            <li>Collaborated with industry leaders to design impactful programs.</li>
            <li>Helped over 10,000 students kickstart their careers.</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Us?</h2>
          <p className="text-lg text-center">
            Internship Pakistan offers the perfect blend of mentorship, practical experience, and a flexible virtual environment.
            Join us to unlock your potential and take your first step towards a successful career.
          </p>
        </section>

        {/* Meet Our Team */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <img
                src={picture1}
                alt="Team Member 1"
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Ali Khan</h3>
              <p className="text-blue-600">Founder & CEO</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <img
                src={picture2}
                alt="Team Member 2"
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Hammad Ahmed</h3>
              <p className="text-blue-600">Operations Manager</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <img
                src={picture3}
                alt="Team Member 3"
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Zain Malik</h3>
              <p className="text-blue-600">Technical Lead</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What Our Interns Say</h2>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-700">
                "Internship Pakistan provided me with a life-changing opportunity to gain hands-on experience and mentorship. I highly recommend it!"
              </p>
              <p className="mt-2 font-semibold text-blue-600">- Ayesha Khan, Former Intern</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="italic text-gray-700">
                "The virtual internship program was flexible and helped me build my skills while managing my studies. An amazing experience!"
              </p>
              <p className="mt-2 font-semibold text-blue-600">- Ahmed Raza, Former Intern</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white p-6 mt-12 text-center">
        <p className="text-sm">&copy; 2025 Internship Pakistan. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
