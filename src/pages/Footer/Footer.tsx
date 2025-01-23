import { FaGithub, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Left Section */}
          <div className="lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Vuexy</h2>
            <p className="text-gray-400 text-sm mb-6">
              Most developer friendly & highly customizable Admin Dashboard
              Template.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white placeholder-gray-400 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full lg:w-auto"
              />
              <button className="bg-indigo-500 text-white px-2 py-2 hover:bg-indigo-600 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-4">Pages</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">Pricing</li>
                <li className="flex items-center">
                  Payment{" "}
                  <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                    New
                  </span>
                </li>
                <li>Maintenance</li>
                <li>Coming Soon</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Page Builder</li>
                <li>Admin Dashboards</li>
                <li>UI Kits</li>
                <li>Illustrations</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Download our app</h4>
            <div className="space-y-4">
              <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition w-80 h-14 lg:w-auto">
                <img
                  src="https://i.postimg.cc/4y4tw1bq/Button.png"
                  alt="App Store"
                  className="h-6"
                />
                <span>Download on the App Store</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition w-80 h-14 lg:w-auto">
                <img
                  src="https://i.postimg.cc/dQnG3zJY/Button-1.png"
                  alt="Google Play"
                  className="h-6"
                />
                <span>Download on the Google Play</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PixInvent. Made with{" "}
              <span className="text-red-500">❤️</span> for a better web.
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGoogle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
