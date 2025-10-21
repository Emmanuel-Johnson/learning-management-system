export default function MyCourse() {
  const courses = [
    { id: 1, title: "React Web Development", instructor: "John Doe" },
    { id: 2, title: "Python Django Bootcamp", instructor: "Jane Smith" },
    { id: 3, title: "Full-Stack Project Building", instructor: "Alex Johnson" },
  ];

  return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div 
            key={course.id}
            className="hover:bg-orange-50 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <h4 className="font-semibold text-lg">{course.title}</h4>
            <p className="text-gray-400 text-sm mt-1">Instructor: {course.instructor}</p>
            <div className="mt-3 flex space-x-2">
              <button className="px-3 py-1 text-white text-sm rounded bg-orange-500 hover:bg-orange-600 transition">
                View
              </button>
              <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
  );
}
