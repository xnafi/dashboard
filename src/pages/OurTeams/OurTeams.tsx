const OurTeams = () => {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Title */}
          <div className="mb-12">
            <p className="text-sm text-indigo-600 font-semibold">Our Great Team</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              <span className="text-gray-600">Supported by</span>{" "}
              <span className="text-gray-600">Real People</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Who is behind these great-looking interfaces?
            </p>
          </div>
  
          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-lg bg-white text-center p-6"
              >
                {/* Profile Picture */}
                <div
                  className={`w-64 h-56 mx-auto overflow-hidden mb-4`}
                  style={{ backgroundColor: member.bgColor }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                {/* Role */}
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  // Team Member Data
  const teamMembers = [
    {
      name: "Sophie Gilbert",
      role: "Project Manager",
      image: "https://i.postimg.cc/x1FdzkY3/Image.png",
    //   bgColor: "#F3E5F5", 
    },
    {
      name: "Paul Miles",
      role: "UI Designer",
      image: "https://i.postimg.cc/nLjhYHhb/Image-1.png",
    //   bgColor: "#E8EAF6",
    },
    {
      name: "Nannie Ford",
      role: "Development Lead",
      image: "https://i.postimg.cc/0NT2VLz6/Image-2.png",
    //   bgColor: "#FCE4EC",
    },
    {
      name: "Chris Watkins",
      role: "Marketing Manager",
      image: "https://i.postimg.cc/63C6gYZM/Image-3.png",
      bgColor: "",
    },
  ];
  
  export default OurTeams;
  