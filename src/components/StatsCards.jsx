const stats = [
    { title: "Visitors", value: "12,345", icon: "👥" },
    { title: "Sales", value: "$8,920", icon: "💰" },
    { title: "Signups", value: "1,234", icon: "📝" },
  ];
  
  const StatsCards = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{stat.icon} {stat.title}</h2>
            <p className="text-2xl font-bold text-green-600">{stat.value}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatsCards;
  