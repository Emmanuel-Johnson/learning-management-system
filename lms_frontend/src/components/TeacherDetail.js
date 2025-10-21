import React from "react";
import { Link } from "react-router-dom"

// Sample data (replace with API or props)
const teacherData = {
  photo: "https://via.placeholder.com/300",
  name: "John Doe",
  description: `John Doe is a highly experienced Web Developer and Instructor with over 10 years in full-stack development. 
He specializes in React, Django, Python, and SQL, and has helped thousands of students become professional developers. 
John believes in hands-on learning and ensures every student gets real-world project experience. 
He is passionate about mentoring and sharing knowledge with aspiring developers.`,
  skills: ["React", "Django", "Python", "SQL", "JavaScript", "Tailwind CSS", "REST APIs"],
  recentCourse: "Advanced React Hooks",
  rating: 4.8,
  courses: [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Django for Beginners" },
    { id: 3, title: "Python Data Structures" },
    { id: 4, title: "Full-Stack Web Development" },
    { id: 5, title: "REST API Development with Django" },
  ],
};

function TeacherDetail() {
  const { photo, name, description, skills, recentCourse, rating, courses } = teacherData;

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-10">
      {/* Header section: large photo + name + description */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-10">
        <img
          src={photo}
          alt={name}
          className="w-72 h-72 rounded-xl object-cover border-4 border-gray-200 shadow-lg"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-extrabold">{name}</h1>
          <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
          <p className="mt-2 font-semibold text-lg">Recent Course: {recentCourse}</p>
          <p className="mt-1 font-semibold text-lg">Rating: {rating} ⭐</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-md font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Courses list */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Courses by {name}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Link to="/detail/1">
            <div
              key={course.id}
              className="p-6 border rounded-xl hover:shadow-xl transition cursor-pointer bg-white"
            >
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600 mt-2">
                A comprehensive course designed to give practical experience and deep understanding.
              </p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
