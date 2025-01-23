export default function Banner() {
  return (
    <div className="max-w-full mx-auto h-[700px] px-4 flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 to-pink-200  text-center ">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500">
        One dashboard to manage <br />
        all your businesses
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mt-4 text-sm sm:text-lg">
        Production-ready & easy to use Admin Template <br />
        for Reliability and Customizability.
      </p>

      {/* Call-to-Action Section */}
      <div className="flex items-center mt-10 space-x-4">
        <p className="text-gray-500 text-sm sm:text-base">Join community</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Get Early Access
        </button>
      </div>

      {/* Arrow Below Join Community */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-gray-500 mt-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 13l-5 5m0 0l-5-5m5 5V6"
        />
      </svg>
    </div>
  );
}
