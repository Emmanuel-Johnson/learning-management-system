export default function FavouriteCourse() {
  const courses = [
    { id: 1, title: "React Web Development", instructor: "John Doe" },
    { id: 2, title: "Python Django Bootcamp", instructor: "Jane Smith" },
    { id: 3, title: "Full-Stack Project Building", instructor: "Alex Johnson" },
  ];

  return (
      

      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition cursor-pointer hover:shadow-md shadow-sm"
          >
            <h4 className="font-semibold text-lg">{course.title}</h4>
            <p className="text-gray-400 text-sm mt-1">Instructor: {course.instructor}</p>
            <button className="mt-3 px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition">
              View
            </button>
          </div>
        ))}
      </div>
  );
}
