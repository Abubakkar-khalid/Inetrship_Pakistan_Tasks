import { useState, useRef, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown and search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between p-4 border-b relative bg-white">
      {/* Left Side - Logo & Nav */}
      <div className="flex items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft Logo"
          className="h-6"
        />
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Microsoft 365</a>
          <a href="#" className="hover:underline">Office</a>
          <a href="#" className="hover:underline">Copilot</a>
          <a href="#" className="hover:underline">Windows</a>
          <a href="#" className="hover:underline">Support</a>
        </nav>
      </div>

      {/* Right Side - Icons & Dropdown */}
      <div className="flex items-center space-x-4 relative">
        {/* Dropdown Button */}
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
          className="hidden md:block text-sm hover:underline"
        >
          All Microsoft ▾
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div ref={dropdownRef} className="absolute top-12 right-0 w-[900px] bg-white shadow-lg border p-6 rounded-md grid grid-cols-6 gap-4 z-20">
            {/* Column 1 - Software */}
            <div>
              <h4 className="font-semibold mb-2">Software</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">Windows Apps</a></li>
                <li><a href="#" className="hover:underline">AI</a></li>
                <li><a href="#" className="hover:underline">OneDrive</a></li>
                <li><a href="#" className="hover:underline">Outlook</a></li>
                <li><a href="#" className="hover:underline">Skype</a></li>
                <li><a href="#" className="hover:underline">OneNote</a></li>
                <li><a href="#" className="hover:underline">Microsoft Teams</a></li>
              </ul>
            </div>

            {/* Column 2 - PCs & Devices */}
            <div>
              <h4 className="font-semibold mb-2">PCs & Devices</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">Shop Xbox</a></li>
                <li><a href="#" className="hover:underline">Accessories</a></li>
              </ul>
            </div>

            {/* Column 3 - Entertainment */}
            <div>
              <h4 className="font-semibold mb-2">Entertainment</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">Xbox Games</a></li>
                <li><a href="#" className="hover:underline">PC Games</a></li>
                <li><a href="#" className="hover:underline">Windows Digital Games</a></li>
              </ul>
            </div>

            {/* Column 4 - Business */}
            <div>
              <h4 className="font-semibold mb-2">Business</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">Microsoft Cloud</a></li>
                <li><a href="#" className="hover:underline">Microsoft Security</a></li>
                <li><a href="#" className="hover:underline">Azure</a></li>
                <li><a href="#" className="hover:underline">Dynamics 365</a></li>
                <li><a href="#" className="hover:underline">Microsoft 365 for Business</a></li>
                <li><a href="#" className="hover:underline">Windows 365</a></li>
              </ul>
            </div>

            {/* Column 5 - Developer & IT */}
            <div>
              <h4 className="font-semibold mb-2">Developer & IT</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">Microsoft Developer</a></li>
                <li><a href="#" className="hover:underline">Documentation</a></li>
                <li><a href="#" className="hover:underline">Microsoft Learn</a></li>
                <li><a href="#" className="hover:underline">Microsoft Tech Community</a></li>
                <li><a href="#" className="hover:underline">Azure Marketplace</a></li>
                <li><a href="#" className="hover:underline">AppSource</a></li>
                <li><a href="#" className="hover:underline">Visual Studio</a></li>
              </ul>
            </div>

            {/* Column 6 - Other */}
            <div>
              <h4 className="font-semibold mb-2">Other</h4>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">Free Downloads & Security</a></li>
                <li><a href="#" className="hover:underline">Education</a></li>
                <li><a href="#" className="hover:underline">Gift Cards</a></li>
              </ul>
            </div>

            {/* View Sitemap */}
            <div className="col-span-6 text-center mt-4">
              <a href="#" className="text-blue-600 hover:underline font-semibold text-sm">VIEW SITEMAP ▸</a>
            </div>
          </div>
        )}

        {/* Search Icon */}
        <FaSearch className="cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)} />

        {/* Search Bar - Opens when clicked */}
        {isSearchOpen && (
          <div ref={searchRef} className="absolute top-12 right-0 bg-white border shadow-md p-2 rounded-md w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
        )}

        <FaShoppingCart className="cursor-pointer" />
        <FaUserCircle className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
