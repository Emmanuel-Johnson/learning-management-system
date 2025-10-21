export default function MyCourse() {
  const courses = [
    { id: 1, title: "React Web Development", enrolled: 45 },
    { id: 2, title: "Python Django Bootcamp", enrolled: 62 },
    { id: 3, title: "Full-Stack Project Building", enrolled: 30 },
  ];

  return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Course Name</th>
              <th className="text-left px-4 py-2 border-b">Total Enrolled</th>
              <th className="text-left px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-orange-50 transition">
                <td className="px-4 py-2 border-b">{course.title}</td>
                <td className="px-4 py-2 border-b">{course.enrolled}</td>
                <td className="px-4 py-2 border-b">
                  <button className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
