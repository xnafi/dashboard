const statsData = [
    {
      title: "Total Earning",
      value: "$24,983",
      img: "https://i.postimg.cc/SxtdJxFh/Icon.png",
    },
    {
      title: "Unpaid Earning",
      value: "$8,647",
      img: "https://i.postimg.cc/bvDTbfp2/Icon-1.png",
    },
    {
      title: "Signups",
      value: "2,367",
      img: "https://i.postimg.cc/MGCYm3p3/Icon-2.png",
    },
    {
      title: "Conversion Rate",
      value: "4.5%",
      img: "https://i.postimg.cc/fLWcYWDL/Icon-3.png",
    },
  ];
  
  const ReferralStats = () => {
    return (
      <div className="grid grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between dark:bg-gray-800 dark:text-white"
          >
            <div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-500">{stat.title}</p>
            </div>
            <img src={stat.img} alt={stat.title} className="w-10 h-10 rounded-full" />
          </div>
        ))}
      </div>
    );
  };
  
  export default ReferralStats;
  