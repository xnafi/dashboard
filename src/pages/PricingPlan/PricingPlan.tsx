import { useState } from "react";

const PricingPlan = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingData = [
    {
      title: "Basic",
      monthlyPrice: 19,
      yearlyPrice: 15, // Save 25%
      features: [
        "Timeline",
        "Basic search",
        "Live chat widget",
        "Email marketing",
        "Custom Forms",
        "Traffic analytics",
        "Basic Support",
      ],
      icon: "https://i.postimg.cc/C1j64L4M/paper-airplane-2-1.png", 
    },
    {
      title: "Team",
      monthlyPrice: 29,
      yearlyPrice: 22, // Save 25%
      features: [
        "Everything in basic",
        "Timeline with database",
        "Advanced search",
        "Marketing automation",
        "Advanced chatbot",
        "Campaign management",
        "Collaboration tools",
      ],
      icon: "https://i.postimg.cc/kGqYY3jQ/Icon.png", 
    },
    {
      title: "Enterprise",
      monthlyPrice: 49,
      yearlyPrice: 37, // Save 25%
      features: [
        "Everything in premium",
        "Timeline with database",
        "Fuzzy search",
        "A/B testing sandbox",
        "Custom permissions",
        "Social media automation",
        "Sales automation tools",
      ],
      icon: "https://i.postimg.cc/59SRYy0n/Icon-1.png", 
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-indigo-600 font-semibold">Pricing Plans</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Tailored pricing plans <span className="font-normal">designed for you</span>
          </h2>
          <p className="text-gray-500 mt-4">
            All plans include 40+ advanced tools and features to boost your product.
          </p>
          <p className="text-gray-500">Choose the best plan to fit your needs.</p>
          {/* Toggle Switch */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? "text-indigo-500" : "text-gray-500"}`}>
              Pay Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex items-center h-6 w-11 rounded-full ${
                isAnnual ? "bg-indigo-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                } transition-transform`}
              ></span>
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-indigo-500" : "text-gray-500"}`}>
              Pay Annual <span className="text-gray-400">(Save 25%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-transform group"
            >
              <div className="text-center">
                {/* Icon */}
                <img
                  src={plan.icon}
                  alt={`${plan.title} icon`}
                  className="w-16 h-16 mx-auto mb-6"
                />
                {/* Title and Price */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
                <p className="text-4xl font-bold text-indigo-500">
                  ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-lg text-gray-500">/mo</span>
                </p>
              </div>
              {/* Features */}
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2"
                  >
                    {/* Checkmark Icon */}
                    <span className="w-5 h-5 flex items-center justify-center rounded-full text-indigo-500 bg-indigo-200 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Button */}
              <div className="mt-8 text-center">
                <button className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-indigo-500 hover:text-white transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
