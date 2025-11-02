import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const cards = [
  { title: "Python", img: "python.png", description: "Learn Python from scratch!", rating: 4.5, views: "12k", category: "Python" },
  { title: "Django", img: "django.png", description: "Master backend with Django!", rating: 4.6, views: "9.3k", category: "Django" },
  { title: "DSA", img: "DSA.png", description: "Crack coding interviews!", rating: 4.4, views: "15k", category: "DSA" },
  { title: "React", img: "React.png", description: "Front-end development!", rating: 4.8, views: "20k", category: "React" },
  { title: "Python Advanced", img: "python.png", description: "Advanced Python course", rating: 4.7, views: "11k", category: "Python" },
  { title: "Python", img: "python.png", description: "Learn Python from scratch!", rating: 4.5, views: "12k", category: "Python" },
  { title: "Django", img: "django.png", description: "Master backend with Django!", rating: 4.6, views: "9.3k", category: "Django" },
  { title: "DSA", img: "DSA.png", description: "Crack coding interviews!", rating: 4.4, views: "15k", category: "DSA" },
  { title: "React", img: "React.png", description: "Front-end development!", rating: 4.8, views: "20k", category: "React" },
  { title: "Python Advanced", img: "python.png", description: "Advanced Python course", rating: 4.7, views: "11k", category: "Python" },
  { title: "Python", img: "python.png", description: "Learn Python from scratch!", rating: 4.5, views: "12k", category: "Python" },
  { title: "Django", img: "django.png", description: "Master backend with Django!", rating: 4.6, views: "9.3k", category: "Django" },
  { title: "DSA", img: "DSA.png", description: "Crack coding interviews!", rating: 4.4, views: "15k", category: "DSA" },
  { title: "React", img: "React.png", description: "Front-end development!", rating: 4.8, views: "20k", category: "React" },
  { title: "Python Advanced", img: "python.png", description: "Advanced Python course", rating: 4.7, views: "11k", category: "Python" },
  { title: "Python", img: "python.png", description: "Learn Python from scratch!", rating: 4.5, views: "12k", category: "Python" },
  { title: "Django", img: "django.png", description: "Master backend with Django!", rating: 4.6, views: "9.3k", category: "Django" },
  { title: "DSA", img: "DSA.png", description: "Crack coding interviews!", rating: 4.4, views: "15k", category: "DSA" },
  { title: "React", img: "React.png", description: "Front-end development!", rating: 4.8, views: "20k", category: "React" },
  { title: "Python Advanced", img: "python.png", description: "Advanced Python course", rating: 4.7, views: "11k", category: "Python" },
  { title: "Python", img: "python.png", description: "Learn Python from scratch!", rating: 4.5, views: "12k", category: "Python" },
  { title: "Django", img: "django.png", description: "Master backend with Django!", rating: 4.6, views: "9.3k", category: "Django" },
  { title: "DSA", img: "DSA.png", description: "Crack coding interviews!", rating: 4.4, views: "15k", category: "DSA" },
  { title: "React", img: "React.png", description: "Front-end development!", rating: 4.8, views: "20k", category: "React" },
  { title: "Python Advanced", img: "python.png", description: "Advanced Python course", rating: 4.7, views: "11k", category: "Python" },
  { title: "Python", img: "python.png", description: "Learn Python from scratch!", rating: 4.5, views: "12k", category: "Python" },
  { title: "Django", img: "django.png", description: "Master backend with Django!", rating: 4.6, views: "9.3k", category: "Django" },
  { title: "DSA", img: "DSA.png", description: "Crack coding interviews!", rating: 4.4, views: "15k", category: "DSA" },
  { title: "React", img: "React.png", description: "Front-end development!", rating: 4.8, views: "20k", category: "React" },
  { title: "Python Advanced", img: "python.png", description: "Advanced Python course", rating: 4.7, views: "11k", category: "Python" },
  { title: "Python", img: "python.png", description: "Learn Python from scratch!", rating: 4.5, views: "12k", category: "Python" },
  { title: "Django", img: "django.png", description: "Master backend with Django!", rating: 4.6, views: "9.3k", category: "Django" },
  { title: "DSA", img: "DSA.png", description: "Crack coding interviews!", rating: 4.4, views: "15k", category: "DSA" },
  { title: "React", img: "React.png", description: "Front-end development!", rating: 4.8, views: "20k", category: "React" },
  { title: "Python Advanced", img: "python.png", description: "Advanced Python course", rating: 4.7, views: "11k", category: "Python" },
  { title: "Python", img: "python.png", description: "Learn Python from scratch!", rating: 4.5, views: "12k", category: "Python" },
  { title: "Django", img: "django.png", description: "Master backend with Django!", rating: 4.6, views: "9.3k", category: "Django" },
  { title: "DSA", img: "DSA.png", description: "Crack coding interviews!", rating: 4.4, views: "15k", category: "DSA" },
  { title: "React", img: "React.png", description: "Front-end development!", rating: 4.8, views: "20k", category: "React" },
  { title: "Python Advanced", img: "python.png", description: "Advanced Python course", rating: 4.7, views: "11k", category: "Python" },
];

export default function AllCourses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const cardsPerPage = 16;

  // Filter Logic
  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  // Pagination Logic
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currentCards = filteredCards.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  // Scroll to top when changing page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedCategory]);

  return (
    <main className="mx-auto px-12 pt-12 bg-red-200 min-h-screen pb-10">
      <section className="space-y-12">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 flex gap-2 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="font-semibold cursor-pointer">All Courses</span>
        </div>

        <div className="flex gap-8">

          {/* ✅ Sidebar Filter */}
          <div className="bg-amber-100 w-64 p-5 rounded-lg shadow space-y-4 h-fit">
            <h3 className="font-bold text-lg mb-2">Filter by Category</h3>

            {["All", "Python", "Django", "DSA", "React"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1); // reset to first page
                }}
                className={`block w-full text-left px-3 py-2 rounded transition 
                  ${selectedCategory === cat ? "bg-black text-white" : "hover:bg-amber-200"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ✅ Courses Grid */}
          <div className="flex-1">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentCards.map((card, index) => (
                <Link key={index} to="/detail/1" className="group">
                  <div className="bg-amber-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="p-6 space-y-2 flex-1 flex flex-col">
                      <h2 className="text-xl font-semibold">{card.title}</h2>
                      <p className="text-gray-600 flex-1">{card.description}</p>

                      <div className="flex justify-between text-sm text-gray-700">
                        <span>⭐ {card.rating} / 5</span>
                        <span>{card.views} views</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ✅ Pagination */}
            <div className="flex justify-center gap-4 pt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={currentPage === 1}
              >
                ←
              </button>

              <span className="font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                →
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
