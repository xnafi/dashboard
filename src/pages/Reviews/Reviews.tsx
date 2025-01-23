import { useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      logo: "https://i.postimg.cc/BZHgMh5L/Vector-1.png",
      text: "Vuexy is hands down the most useful front-end Bootstrap theme I've ever used. I can't wait to use it again for my next project.",
      stars: 5,
      name: "Cecilia Payne",
      position: "CEO of Airbnb",
    },
    {
      logo: "https://i.postimg.cc/wB15JFTB/logo-1.png",
      text: "I’ve never used a theme as versatile and flexible as Vuexy. It’s my go-to for building dashboard sites on almost any project.",
      stars: 5,
      name: "Eugenia Moore",
      position: "Founder of HubSpot",
    },
    {
      logo: "https://i.postimg.cc/25twXMXv/Logo.png",
      text: "This template is really clean & well documented. The docs are really easy to understand & it’s always easy to find a screenshot.",
      stars: 5,
      name: "Curtis Fletcher",
      position: "Design Lead at Dribbble",
    },
    {
      logo: "https://i.postimg.cc/BZHgMh5L/Vector-1.png",
      text: "The customer support team is extremely helpful, the design is amazing and Highly recommend it and easy to find a screenshot.",
      stars: 5,
      name: "Alexandra Grey",
      position: "Marketing Lead at Coinbase",
    },
    {
      logo: "https://i.postimg.cc/wB15JFTB/logo-1.png",
      text: "This product has saved us so much time. It's efficient and easy to use, Highly recommend, it’s always easy to find a screenshot.",
      stars: 5,
      name: "Jordan Parker",
      position: "Designer at Pinterest",
    },
    {
      logo: "https://i.postimg.cc/25twXMXv/Logo.png",
      text: "I am amazed by how customizable this tool is. Highly recommend it and easy to use and it’s always easy to find a screenshot.",
      stars: 5,
      name: "Taylor Wilson",
      position: "Developer at Netflix",
    },
  ];

  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= reviews.length ? 0 : prevIndex + itemsPerPage
    );
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        

        {/* Reviews Section */}
        <div className="flex items-center">
          {/* Left Section */}
          <div className="flex flex-col justify-between w-1/3 p-6">
          <div className="text-start mb-12">
          <button className="text-sm bg-purple-100 text-indigo-500 px-4 py-2 rounded-full mb-4">
            Real Customers Reviews
          </button>
          <h2 className="text-2xl font-bold text-gray-800">
            What people say
          </h2>
          <p className="text-gray-500 mt-4">
            See what our customers have to say about their experience.
          </p>
        </div>
            <div className="flex space-x-4 mt-8">
              <button
                onClick={handlePrev}
                className="bg-purple-100 text-indigo-500 p-3 rounded-full hover:bg-purple-200 transition"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="bg-purple-100 text-indigo-500 p-3 rounded-full hover:bg-purple-200 transition"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex-1 flex space-x-6 overflow-hidden">
            {reviews
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg w-60 flex-shrink-0"
                >
                  <img
                    src={review.logo}
                    alt={review.name}
                    className="h-4 mb-4"
                  />
                  <p className="text-gray-600 mb-6">{review.text}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-500 text-lg mr-1"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-semibold">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{review.position}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <img
            src="https://i.postimg.cc/05Jgv0xT/logo-1.png"
            alt="Airbnb"
            className="h-7"
          />
          <img
            src="https://i.postimg.cc/tTKMJ8yL/Vector-2.png"
            alt="Netflix"
            className="h-6"
          />
          <img
            src="https://i.postimg.cc/6QTj0Bpk/Vector-3.png"
            alt="Dribbble"
            className="h-6"
          />
          <img
            src="https://i.postimg.cc/15PvdGzc/Vector-4.png"
            alt="Coinbase"
            className="h-6"
          />
          <img
            src="https://i.postimg.cc/VN3RWMTt/Vector-5.png"
            alt="Pinterest"
            className="h-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
