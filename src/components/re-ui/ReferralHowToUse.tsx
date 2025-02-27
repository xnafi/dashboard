const howToUseData = [
    {
      img: "https://i.postimg.cc/R0dfCrKz/Icon-4.png",
      text: "Create & validate your referral link and get",
      reward: "$50",
    },
    {
      img: "https://i.postimg.cc/265WVH7L/Icon-5.png",
      text: "For every new signup you get",
      reward: "10%",
    },
    {
      img: "https://i.postimg.cc/265WVH7L/Icon-5.png",
      text: "Get other friends to generate link and get",
      reward: "$100",
    },
  ];
  
  const ReferralHowToUse = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
        <h3 className="text-lg font-semibold">How to use</h3>
        <p className="text-gray-500 mb-4">Integrate your referral code in 3 easy steps.</p>
  
        <div className="grid grid-cols-3 gap-4">
          {howToUseData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={item.img} alt="Step Icon" className="w-12 h-12 mb-2" />
              <p className="text-gray-500 text-sm">{item.text}</p>
              <span className="text-indigo-600 font-semibold">{item.reward}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReferralHowToUse;
  