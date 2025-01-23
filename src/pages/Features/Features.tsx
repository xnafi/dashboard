import { FaCode, FaSync, FaRocket, FaPaperPlane, FaUsers, FaFileAlt } from "react-icons/fa"; 

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full ">
          Useful Features
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Everything you need to start your next project
        </h2>
        <p className="text-gray-500 mt-4">
          Not just a set of tools, the package includes ready-to-deploy conceptual application.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Feature Item */}
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-blue-600 bg-blue-100 rounded-full">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Items
const features = [
  {
    icon: <FaCode className="text-2xl" />, 
    title: "Quality Code",
    description: "Code structure that all developers will easily understand and fall in love with.",
  },
  {
    icon: <FaSync className="text-2xl" />, 
    title: "Continuous Updates",
    description: "Free updates for the next 12 months, including new demos and features.",
  },
  {
    icon: <FaRocket className="text-2xl" />, 
    title: "Starter Kit",
    description: "Start your project quickly without having to remove unnecessary features.",
  },
  {
    icon: <FaPaperPlane className="text-2xl" />, 
    title: "API Ready",
    description: "Just change the endpoint and see your own data loaded within seconds.",
  },
  {
    icon: <FaUsers className="text-2xl" />, 
    title: "Excellent Support",
    description: "An easy-to-follow doc with lots of references and code examples.",
  },
  {
    icon: <FaFileAlt className="text-2xl" />, 
    title: "Well Documented",
    description: "An easy-to-follow doc with lots of references and code examples.",
  },
];

export default Features;
