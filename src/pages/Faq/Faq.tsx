import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <button className="text-sm font-medium bg-purple-100 text-indigo-500 px-4 py-2 rounded-full mb-4">
            FAQ
          </button>
          <h2 className="text-2xl text-gray-800">
            Frequently asked <span className="text-2xl font-bold">questions</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Browse through these FAQs to find answers to commonly asked
            questions.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section: Illustration */}
          <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
            <img
              src="https://i.postimg.cc/MHW7C1h4/illustration.png"
              alt="FAQ Illustration"
              className="w-80 max-w-md"
            />
          </div>

          {/* Right Section: FAQ Accordion */}
          <div className="lg:w-1/2">
            <div className="space-y-4">
              {[
                {
                  question: "Do you charge for each upgrade?",
                  answer:
                    "No, upgrades are free for all customers who have purchased a license.",
                },
                {
                  question: "Do I need to purchase a license for each website?",
                  answer:
                    "Yes, a license is required for each unique domain or project.",
                },
                {
                  question: "What is regular license?",
                  answer:
                    "Regular license can be used for end products that do not charge users for access or service. Single regular license can be used for a single end product.",
                },
                {
                  question: "What is extended license?",
                  answer:
                    "An extended license allows you to use the product for multiple clients or domains.",
                },
                {
                  question: "Which license is applicable for SAAS application?",
                  answer:
                    "For SAAS applications, an extended license is required.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-4 bg-white flex justify-between items-center"
                  >
                    <span className="text-gray-800 font-medium">
                      {item.question}
                    </span>
                    <span
                      className={`transform transition-transform ${
                        open === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {open === index && (
                    <div className="px-6 py-4 bg-white text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
