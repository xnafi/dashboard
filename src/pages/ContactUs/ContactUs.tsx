const ContactUs = () => {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <button className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full ">
              Contact Us
            </button>
            <h2 className="text-2xl font-bold text-gray-800">
              Let’s work <span className="font-normal text-2xl">together</span> 
            </h2>
            <p className="text-gray-500 mt-4">
              Any question or remark? Just write us a message
            </p>
          </div>
  
          {/* Content Section */}
          <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg">
            {/* Left Section: Image and Contact Info */}
            <div className="lg:w-1/2 p-6 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-gray-200">
              <img
                src="https://i.postimg.cc/RhNdvs1z/customer-service-operator-talking-phone-office-1.png"
                alt="Customer Support"
                className="w-full h-full rounded-lg object-cover mb-6"
              />
              <div className="w-full flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
                {/* Email Info */}
                <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                  <img
                    src="https://i.postimg.cc/tgQfs0Dk/List.png"
                    alt="Email Icon"
                    className="h-6 w-6 mr-4"
                  />
                  <span className="text-gray-700">example@gmail.com</span>
                </div>
                {/* Phone Info */}
                <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                  <img
                    src="https://i.postimg.cc/13nhgrSm/phone-call.png"
                    alt="Phone Icon"
                    className="h-6 w-6 mr-4"
                  />
                  <span className="text-gray-700">+1234 568 963</span>
                </div>
              </div>
            </div>
  
            {/* Right Section: Contact Form */}
            <div className="lg:w-1/2 p-6 h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Send a message
              </h3>
              <p className="text-gray-500 mb-6">
                If you would like to discuss anything related to payment,
                account, licensing, partnerships, or have pre-sales questions,
                you’re at the right place.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <textarea
                  placeholder="Write a message..."
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={4}
                />
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition "
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  