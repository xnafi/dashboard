

const JoinCommunity = () => {
    const data = [
        {
            id: 1,
            icon: 'https://i.postimg.cc/y8TVdsRR/Laptop.png',
            value: '7.1k+',
            text: 'Support Tickets',
            subtext: 'Resolved',
            hoverColor: 'hover:border-purple-500',
        },
        {
            id: 2,
            icon: 'https://i.postimg.cc/xdxnv5tT/User.png',
            value: '50k+',
            text: 'Join creatives',
            subtext: 'Community',
            hoverColor: 'hover:border-green-500',
        },
        {
            id: 3,
            icon: 'https://i.postimg.cc/d1hv4CxR/Diamond.png',
            value: '4.8/5',
            text: 'Highly Rated',
            subtext: 'Products',
            hoverColor: 'hover:border-blue-500',
        },
        {
            id: 4,
            icon: 'https://i.postimg.cc/nVQpmv7p/Check.png',
            value: '100%',
            text: 'Money Back',
            subtext: 'Guarantee',
            hoverColor: 'hover:border-orange-500',
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 py-10">
            {data.map((item) => (
                <div
                    key={item.id}
                    className={`flex flex-col items-center justify-center w-64 h-40 border rounded-lg shadow-sm transition-shadow duration-300 ${item.hoverColor} hover:shadow-md`}
                >
                    <img
                        src={item.icon}
                        alt={item.text}
                        className="w-10 h-10 mb-2"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800">
                        {item.value}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                        {item.text}
                    </p>
                    <p className="text-sm text-gray-600 font-medium text-center">
                        {item.subtext}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default JoinCommunity;
