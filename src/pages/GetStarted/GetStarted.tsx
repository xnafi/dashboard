

const GetStarted = () => {
  return (
    <section className="relative bg-gradient-to-b from-purple-300 to-red-100 p-10  py-16">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Left Section: Text */}
        <div className="flex flex-col z-10">
          <h2 className="text-3xl font-bold text-indigo-500">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Start your project with a 14-day free trial
          </p>
          <button className="mt-6 bg-indigo-500 text-white px-6 py-3 w-32 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 relative pt-6">
          <img
            src="https://i.postimg.cc/T3shLkXP/Image-4.png"
            alt="Dashboard Preview"
            className="absolute -bottom-40  right-0   rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
