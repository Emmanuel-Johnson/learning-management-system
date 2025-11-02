import { useState } from "react";
import { Link } from "react-router-dom"
import LatestCourses from "./LatestCourses";

const teachers = [
  { 
    title: "Albert Einstein", 
    img: "Einstein.jpeg", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
  },
  { 
    title: "Albert Einstein",  
    img: "Einstein.jpeg", 
    description: "Master backend with Django!", 
    rating: 4.6, 
  },
  { 
    title: "Albert Einstein",  
    img: "Einstein.jpeg", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
  },
  { 
    title: "Albert Einstein",  
    img: "Einstein.jpeg", 
    description: "Front-end development with React!", 
    rating: 4.8, 
  },
  { 
    title: "Albert Einstein",  
    img: "Einstein.jpeg", 
    description: "Learn Python from scratch!", 
    rating: 4.5, 
  },
  { 
    title: "Albert Einstein",  
    img: "Einstein.jpeg", 
    description: "Master backend with Django!", 
    rating: 4.6, 
  },
  { 
    title: "Albert Einstein",  
    img: "Einstein.jpeg", 
    description: "Crack coding interviews!", 
    rating: 4.4, 
  },
  { 
    title: "Albert Einstein",  
    img: "Einstein.jpeg", 
    description: "Front-end development with React!", 
    rating: 4.8, 
  },
];

// Testimonial data
const testimonials = [
  {
    name: "Emma Johnson",
    course: "React Web Development",
    feedback: "I really enjoyed the React course! The lessons were clear, and I was able to build a real project in just 3 weeks.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Liam Smith",
    course: "Python Data Science",
    feedback: "The course content was amazing! It helped me get hands-on experience with data analysis and machine learning.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sophia Lee",
    course: "Full Stack Development",
    feedback: "Thanks to this course, I landed my first developer job! The projects and mentorship were top-notch.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function Home() {
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
];




  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextSlide = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <main className="mx-auto px-12 pt-12 bg-red-200 min-h-screen space-y-12 tracking-tighter pb-10">
      {/* Latest Courses Section */}
      <section className="space-y-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-lighter text-4xl font-mono">Latest Courses</h3>
          <Link to="/all-courses" className="text-black hover:text-gray-700 font-medium text-lg transition-colors">
            See All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {cards.map((card, index) => (
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

          {/* ⭐ Rating + 👁️ Views */}
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

      </section>

      {/* Popular Courses Section */}
     <section className="space-y-12">
  <div className="flex items-center justify-between mb-6">
    <h3 className="font-lighter text-4xl font-mono">Popular Courses</h3>
    <Link
      to="/popular-courses"
      className="text-black hover:text-gray-700 font-medium text-lg transition-colors"
    >
      See All →
    </Link>
  </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {cards.map((card, index) => (
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

          {/* ⭐ Rating + 👁️ Views */}
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
</section>



      {/* Popular Teachers Section */}
<section className="space-y-12">
  <div className="flex items-center justify-between mb-6">
    <h3 className="font-lighter text-4xl font-mono">Popular Teachers</h3>
    <Link
      to="/popular-teachers"
      className="text-black hover:text-gray-700 font-medium text-lg transition-colors"
    >
      See All →
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {teachers.map((card, index) => (
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

          {/* ⭐ Rating + 👁️ Views */}
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
</section>

      

      {/* Student Testimonial Section */}
      <section className="space-y-12 max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Student Testimonials</h2>

        <div className="relative bg-amber-100 rounded-lg p-8 shadow-lg">
          <p className="text-gray-700 mb-4 italic">
            "{testimonials[currentTestimonial].feedback}"
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img
              src={testimonials[currentTestimonial].avatar}
              alt={testimonials[currentTestimonial].name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{testimonials[currentTestimonial].name}</h3>
              <p className="text-sm text-gray-500">{testimonials[currentTestimonial].course}</p>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-gray-100 rounded-full p-2 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black hover:bg-gray-100 rounded-full p-2 transition"
          >
            &#8594;
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
