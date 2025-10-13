function Home() {
  const cards = [
    {
      title: "Python",
      img: "python.png"
    },
    {
      title: "django",
      img: "django.png"
    },
    {
      title: "SQL",
      img: "SQL.png"
    },
    {
      title: "DSA",
      img: "DSA.png"
    },
    {
      title: "React",
      img: "React.png"
    },
  ];

  return (
    <main className="mx-12 bg-gray-100 min-h-screen space-y-12 tracking-tighter pb-10">
  {/* Latest Courses Section */}
  <section className="space-y-12">
    <h3 className="font-lighter text-4xl font-mono mb-6 text-center">Latest Courses</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <a key={index} href="#" className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <img
  src={card.img}
  alt={card.title}
  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
/>

            <div className="p-6 flex-1 flex flex-col space-y-2">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600 flex-1">{card.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>

  {/* Popular Courses Section */}
  <section className="space-y-12">
    <h3 className="font-lighter text-4xl font-mono mb-6 text-center">Popular Courses</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <a key={index} href="#" className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <img
  src={card.img}
  alt={card.title}
  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
/>

            <div className="p-6 flex-1 flex flex-col space-y-2">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600 flex-1">{card.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
</main>

  );
}

export default Home;
