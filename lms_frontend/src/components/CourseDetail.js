import { useParams } from "react-router-dom";
import { Play } from "lucide-react"; // optional icon library
import { Link } from "react-router-dom"

export default function CourseDetail() {
  const { course_id } = useParams();
  const cards = [
    { title: "Python", img: "/python.png" },
    { title: "Django", img: "/django.png" },
    { title: "DSA", img: "/DSA.png" },
    { title: "React", img: "/React.png" },
  ];

  // Dummy data (replace later with API)
  const course = {
    title: "Mastering React & Django Integration",
    description:
      "Learn how to build powerful full-stack web applications using React on the frontend and Django on the backend. This course covers APIs, authentication, deployment, and more.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    teacher: "Teacher 1",
    duration: "3 Hours 30 Minutes",
    enrolled: 456,
    rating: 4.5,
  };

  const videos = [
    { id: 1, title: "Introduction to Full Stack Development", duration: "10:25" },
    { id: 2, title: "Setting up React and Django", duration: "15:12" },
    { id: 3, title: "Building REST APIs with Django REST Framework", duration: "20:45" },
    { id: 4, title: "Connecting React Frontend with API", duration: "22:18" },
    { id: 5, title: "Authentication & Deployment", duration: "17:59" },
  ];

  return (
    <>
    <div className="min-h-screen bg-red-200 py-12 px-4">
      {/* Course Details Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-12">
        {/* Left - Image */}
        <div className="md:w-1/2">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{course.title}</h1>
            <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Course by:</span> {course.teacher}
              </li>
              <li>
                <span className="font-semibold">Duration:</span> {course.duration}
              </li>
              <li>
                <span className="font-semibold">Total Enrolled:</span> {course.enrolled} Students
              </li>
              <li>
                <span className="font-semibold">Rating:</span> ⭐ {course.rating}/5
              </li>
            </ul>
          </div>

          <button className="mt-8 bg-green-700 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition-all">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Course Videos Table */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Course Content
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-700">
            <thead className="border-b">
              <tr>
                <th className="py-3 px-4 font-semibold">No.</th>
                <th className="py-3 px-4 font-semibold">Video Title</th>
                <th className="py-3 px-4 font-semibold">Duration</th>
                <th className="py-3 px-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video, index) => (
                <tr
                  key={video.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{video.title}</td>
                  <td className="py-3 px-4">{video.duration}</td>
                  <td className="py-3 px-4 text-center">
                    <button className="flex items-center justify-center mx-auto bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-all">
                      <Play className="w-4 h-4 mr-1" /> Play
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* Latest Courses Section */}
    <div className="p-12 bg-orange-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-lighter text-4xl font-mono">Latest Courses</h3>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Link key={index} to="/detail/1" className="group">
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
            </Link>
          ))}
        </div>
    </div>
    </>
    
    
  );
}
