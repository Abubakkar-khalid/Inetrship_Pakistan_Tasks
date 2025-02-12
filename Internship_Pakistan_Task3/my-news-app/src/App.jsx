import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import  img1 from "./assets/ai_breakthrough.jpeg"
import  img2 from "./assets/climat.jpeg"
import  img3 from "./assets/economy.jpeg"
import  img4 from "./assets/green.jpeg"
import  img5 from "./assets/hollywood.jpeg"
import  img6 from "./assets/spacex.jpeg"
import  img7 from "./assets/sports.jpeg"
import  img8 from "./assets/tech_gadgets.jpeg"
import  img9 from "./assets/tech.jpeg"

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">NewsHub</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600">General</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Technology</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Politics</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Sports</a>
      </nav>
      <div className="flex space-x-4 items-center">
        <div className="relative">
          <input type="text" placeholder="Search..." className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700">
          <FaUser />
          <span>Login</span>
        </button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 p-12 text-center text-white relative overflow-hidden">
      {/* Floating Accent Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>

      <h1 className="text-5xl font-extrabold tracking-tight">🚀 Featured News</h1>
      <p className="text-lg mt-3 opacity-90">
        Stay ahead with the latest breaking stories and in-depth analysis.
      </p>

      <div className="mt-8 bg-white/20 backdrop-blur-lg shadow-xl p-6 rounded-2xl max-w-3xl mx-auto text-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" 
          alt="AI Revolution" 
          className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
        />
        <h2 className="text-3xl font-bold text-gray-100 mt-5">
          AI Revolution: How Artificial Intelligence is Changing the World
        </h2>
        <p className="text-gray-200 mt-3 leading-relaxed">
          AI is transforming industries, from healthcare to finance, enhancing automation and efficiency.
          Experts predict groundbreaking advancements in the next decade.
        </p>
        <a 
          href="#" 
          className="inline-block mt-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Read More →
        </a>
      </div>
    </section>
  );
};

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "🚀 Tech Giants Invest Billions in AI Research",
      description: "Leading tech firms are ramping up AI investments, promising breakthroughs in automation and machine learning.",
      image: img1,
      link: "#",
    },
    {
      id: 2,
      title: "📉 Global Markets React to Economic Changes",
      description: "Stock markets experience fluctuations as global policies shift. Experts weigh in on economic trends.",
      image: img3,
      link: "#",
    },
    {
      id: 3,
      title: "🌍 Climate Change: Urgent Actions Needed",
      description: "Scientists emphasize the need for immediate action to combat climate change and protect our planet.",
      image: img2,
      link: "#",
    },
  ];
  

  return (
    <section className="p-10 bg-gradient-to-b from-gray-50 to-gray-200">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">📰 Latest News</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white shadow-xl rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">{article.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{article.description}</p>
              <a 
                href={article.link} 
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TrendingNews = () => {
  const trendingArticles = [
    {
      id: 1,
      title: "🚀 AI Breakthroughs in 2025: What’s Next?",
      description: "Experts predict AI will revolutionize industries like healthcare, finance, and automation.",
      image: img1,
      link: "#",
    },
    {
      id: 2,
      title: "📱 New Tech Gadgets Released This Year",
      description: "From smart glasses to foldable phones, check out the latest innovations in consumer technology.",
      image: img8,
      link: "#",
    },
    {
      id: 3,
      title: "🌍 Global Economy Faces New Challenges",
      description: "Economists warn about inflation, supply chain issues, and shifting market dynamics.",
      image: img3,
      link: "#",
    },
    {
      id: 4,
      title: "⚽ Sports Highlights: Major Wins & Upsets",
      description: "A recap of the most thrilling moments from the world of sports this season.",
      image: img7,
      link: "#",
    },
    {
      id: 5,
      title: "🎬 Hollywood’s Biggest Blockbusters of 2025",
      description: "A look at the biggest movies set to release this year and their potential box office impact.",
      image: img5,
      link: "#",
    },
    {
      id: 6,
      title: "💡 Green Energy Innovations in 2025",
      description: "Sustainable energy sources are evolving fast—what’s the next big breakthrough?",
      image: img4,
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 p-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">🔥 Trending News</h2>
      
      <div className="flex space-x-6 overflow-x-auto p-4 scrollbar-hide">
        {trendingArticles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white shadow-lg rounded-xl overflow-hidden w-80 flex-shrink-0 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <img src={article.image} alt={article.title} className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
              <p className="text-gray-600 mt-3">{article.description}</p>
              <a 
                href={article.link} 
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SidebarWidgets = () => {
  return (
    <main className="flex p-6 gap-6">
      {/* Sidebar Widgets */}
      <aside className="w-1/4 bg-gradient-to-br from-blue-50 to-gray-100 p-6 shadow-lg rounded-2xl">
        {/* Weather Widget */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800">🌤️ Weather Update</h2>
          <p className="text-gray-600 text-sm mt-1">🌍 New York, 15°C, Sunny</p>
        </div>

        {/* Stock Market Widget */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800">📈 Stock Market</h2>
          <ul className="text-gray-600 text-sm mt-1 space-y-1">
            <li className="hover:text-green-500 transition">🔼 Apple (AAPL): $172.50 (+2.3%)</li>
            <li className="hover:text-red-500 transition">🔽 Tesla (TSLA): $675.20 (-1.5%)</li>
            <li className="hover:text-green-500 transition">🔼 Amazon (AMZN): $3,285.40 (+0.8%)</li>
          </ul>
        </div>

        {/* Crypto Prices */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800">💰 Crypto Prices</h2>
          <ul className="text-gray-600 text-sm mt-1 space-y-1">
            <li className="hover:text-green-500 transition">🔼 Bitcoin (BTC): $47,250 (+1.8%)</li>
            <li className="hover:text-red-500 transition">🔽 Ethereum (ETH): $3,280 (-0.5%)</li>
            <li className="hover:text-green-500 transition">🔼 Dogecoin (DOGE): $0.12 (+2.1%)</li>
          </ul>
        </div>

        {/* Trending Topics */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800">🔥 Trending Topics</h2>
          <ul className="mt-2 space-y-2 text-blue-600 font-semibold text-sm">
            <li><a href="#" className="hover:bg-blue-200 px-2 py-1 rounded-md transition">#AI Revolution</a></li>
            <li><a href="#" className="hover:bg-blue-200 px-2 py-1 rounded-md transition">#CryptoMarket</a></li>
            <li><a href="#" className="hover:bg-blue-200 px-2 py-1 rounded-md transition">#SpaceX Launch</a></li>
            <li><a href="#" className="hover:bg-blue-200 px-2 py-1 rounded-md transition">#Olympics2025</a></li>
          </ul>
        </div>
      </aside>

      {/* Main News Content */}
      <section className="w-3/4">
        {/* Featured News */}
        <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={img6}
            alt="Breaking News"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              🚀 "SpaceX Successfully Launches New Mission to Mars!"
            </h2>
            <p className="text-gray-600 mt-2">
              SpaceX has launched another groundbreaking mission, setting new records in space exploration. Scientists say this mission could revolutionize deep space travel.
            </p>
            <a href="#" className="text-blue-600 hover:underline mt-2 block">
              Read More
            </a>
          </div>
        </div>

        {/* Latest News Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📰 Latest News</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Article 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src={img1} className="w-full h-40 object-cover rounded-md" alt="AI Revolution" />
              <h3 className="text-lg font-bold mt-3">🤖 AI Changing the Future of Jobs</h3>
              <p className="text-gray-600 text-sm mt-1">Experts predict AI will automate 50% of jobs by 2035.</p>
              <a href="#" className="text-blue-600 hover:underline mt-2 block">Read More</a>
            </div>

            {/* Article 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src={img3} className="w-full h-40 object-cover rounded-md" alt="Stock Market" />
              <h3 className="text-lg font-bold mt-3">📉 Markets React to Global Economic Trends</h3>
              <p className="text-gray-600 text-sm mt-1">Stock markets see fluctuations amid economic uncertainties.</p>
              <a href="#" className="text-blue-600 hover:underline mt-2 block">Read More</a>
            </div>

            {/* Article 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src={img2} className="w-full h-40 object-cover rounded-md" alt="Climate Change" />
              <h3 className="text-lg font-bold mt-3">🌍 Climate Change: A Call for Immediate Action</h3>
              <p className="text-gray-600 text-sm mt-1">Global leaders push for urgent policies on climate change.</p>
              <a href="#" className="text-blue-600 hover:underline mt-2 block">Read More</a>
            </div>

            {/* Article 4 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src={img7} className="w-full h-40 object-cover rounded-md" alt="Sports News" />
              <h3 className="text-lg font-bold mt-3">⚽ Champions League Finals: Who Will Win?</h3>
              <p className="text-gray-600 text-sm mt-1">Exciting matchups ahead in this year's Champions League.</p>
              <a href="#" className="text-blue-600 hover:underline mt-2 block">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo & Tagline */}
        <h2 className="text-4xl font-extrabold text-blue-400">NewsHub</h2>
        <p className="text-gray-400 mt-2 text-lg">
          Your trusted source for the latest news.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap space-x-6 mt-6 text-sm md:text-base">
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-all">About Us</a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-all">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-all">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-all">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-all text-2xl p-3 rounded-full bg-gray-800 hover:bg-blue-500"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-4/5 mx-auto border-t border-gray-700 my-6"></div>

        {/* Copyright Notice */}
        <p className="text-gray-500 text-sm">&copy; 2025 NewsHub. All rights reserved.</p>
      </div>
    </footer>
  );
};



const NewsWebsite = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <LatestNews />
      <TrendingNews />
      <SidebarWidgets />
      <Footer />
    </div>
  );
};

export default NewsWebsite;
