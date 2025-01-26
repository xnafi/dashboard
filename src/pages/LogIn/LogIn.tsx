import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";

const LogIn = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Container with max-w-7xl */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-stretch h-full">
        {/* Left Section: Illustration */}
        <div className="lg:w-2/3 h-full flex items-center justify-center bg-gray-50">
          <div className="relative">
            {/* Illustration Image */}
            <img
              src="https://i.postimg.cc/5NTbKr3K/Illustration-1.png"
              alt="Illustration"
              className="max-w-full"
            />
          </div>
        </div>

        {/* Right Section: Login Form */}
        <div className="lg:w-1/3 w-full bg-white p-8 flex items-center justify-center h-full">
          <div className="max-w-sm w-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 text-start">
                Welcome to Vuexy!👋🏻
              </h2>
              <p className="text-gray-500 mt-2 text-start">
                Please sign in to your account and start the adventure
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm mb-1"
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email or username"
                  className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-600 text-sm mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember Me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-indigo-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-6 text-gray-600 text-sm">
              New on our platform?{" "}
              <a href="#" className="text-indigo-500 hover:underline">
                Create an account
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-full border-t border-gray-300"></div>
              <p className="px-4 text-sm text-gray-500">or</p>
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="bg-blue-100 text-blue-500 p-3 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-blue-100 text-blue-500 p-3 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="bg-blue-100 text-blue-500 p-3 rounded-full">
                <FaGithub />
              </a>
              <a href="#" className="bg-blue-100 text-blue-500 p-3 rounded-full">
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
