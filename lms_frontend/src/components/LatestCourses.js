import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const cards = [
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
  { 
    title: "Python", 
    img: "python.png", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
    views: "12k" 
  },
  { 
    title: "Django", 
    img: "django.png", 
    description: "Master backend with Django!", 
    rating: 4.6, 
    views: "9.3k" 
  },
  { 
    title: "DSA", 
    img: "DSA.png", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
    views: "15k" 
  },
  { 
    title: "React", 
    img: "React.png", 
    description: "Front-end development with React!", 
    rating: 4.8, 
    views: "20k" 
  },
];

export default function LatestCourses() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 16;

  // Pagination Logic
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currentCards = cards.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(cards.length / cardsPerPage);    

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // remove "smooth" if you want instant scroll
    });
  }, [currentPage]);

  return (
    <main className="mx-auto px-12 pt-12 bg-red-200 min-h-screen space-y-12 tracking-tighter pb-10">
      <section className="space-y-12">
        <div className="text-sm text-gray-600 flex gap-2 items-center">
  <Link to="/" className="hover:underline">Home</Link>
  <span>/</span>
  <span className="font-semibold cursor-pointer">Latest Courses</span>
</div>

        <div className="flex items-center justify-between mb-6">
          <h3 className="font-lighter text-4xl font-mono">Latest Courses</h3>
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {currentCards.map((card, index) => (
    <Link key={index} to="/detail/1" className="group">
      <div className="bg-amber-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="p-6 flex-1 flex flex-col space-y-2">
          <h2 className="text-xl font-semibold">{card.title}</h2>
          <p className="text-gray-600 flex-1">{card.description}</p>

          {/* ⭐ Rating + 👁️ views */}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <span className="flex items-center space-x-1 mt-1">
              ⭐ Rating <span className="ml-0.3"></span> <span>{card.rating} / 5</span>
            </span>
            <span>{card.views} views</span>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>


        {/* Pagination Buttons */}
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
      </section>
    </main>
  );
}
