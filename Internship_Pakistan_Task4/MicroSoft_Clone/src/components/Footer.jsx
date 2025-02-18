// Footer.jsx
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-600 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* What's new */}
          <div>
            <h3 className="font-semibold mb-4">Whats new</h3>
            <ul className="space-y-3 text-sm">
              {["Surface Book 3", "Surface Pro", "Microsoft Copilot", "Microsoft 365", "Explore Microsoft products", "Windows 11 apps"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Microsoft Store */}
          <div>
            <h3 className="font-semibold mb-4">Microsoft Store</h3>
            <ul className="space-y-3 text-sm">
              {["Account profile", "Download Center", "Returns", "Order tracking"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-semibold mb-4">Education</h3>
            <ul className="space-y-3 text-sm">
              {["Microsoft in education", "Devices for education", "Microsoft Teams for Education", "Microsoft 365 Education", "Office Education", "Educator training and development", "Deals for students and parents", "Azure for students"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-semibold mb-4">Business</h3>
            <ul className="space-y-3 text-sm">
              {["Microsoft Cloud", "Microsoft Security", "Azure", "Dynamics 365", "Microsoft 365", "Microsoft Advertising", "Microsoft 365 Copilot", "Microsoft Teams"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer & IT */}
          <div>
            <h3 className="font-semibold mb-4">Developer & IT</h3>
            <ul className="space-y-3 text-sm">
              {["Microsoft Developer", "Documentation", "Microsoft Learn", "Microsoft Tech Community", "Azure Marketplace", "AppSource", "Microsoft Power Platform", "Visual Studio"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {["Careers", "About Microsoft", "Company news", "Privacy at Microsoft", "Investors", "Sustainability"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2">
                <span className="sr-only">Choose language</span>
                <FaGlobe size={16} />
                English (Pakistan)
              </button>
              <button className="hover:underline">Your Privacy Choices</button>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {["Contact Microsoft", "Privacy", "Terms of use", "Trademarks", "About our ads"].map((item, index) => (
                <a key={index} href="#" className="hover:underline">
                  {item}
                </a>
              ))}
              <span>© Microsoft {new Date().getFullYear()}</span>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
