export default function RecommendedCourse() {
  const courses = [
    { id: 1, title: "Advanced React Patterns", instructor: "Emily Clark" },
    { id: 2, title: "Django REST Framework", instructor: "Michael Lee" },
    { id: 3, title: "Next.js & Tailwind CSS", instructor: "Sarah Kim" },
  ];

  return (
    
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="hover:shadow-md p-4 bg-gray-50 rounded-xl hover:bg-orange-50   transition cursor-pointer shadow-sm"
          >
            <h4 className="font-semibold text-lg">{course.title}</h4>
            <p className="text-gray-400 text-sm mt-1">Instructor: {course.instructor}</p>
            <button className="mt-3 px-3 py-1 text-white text-sm rounded bg-orange-500 hover:bg-orange-600 transition">
              View
            </button>
          </div>
        ))}
      </div>
  );
}
