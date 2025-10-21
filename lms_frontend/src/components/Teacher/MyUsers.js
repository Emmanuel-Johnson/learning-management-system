export default function MyUsers() {
  const users = [
    { id: 1, name: "Emily Clark", enrolledCourse: "Advanced React Patterns" },
    { id: 2, name: "Michael Lee", enrolledCourse: "Django REST Framework" },
    { id: 3, name: "Sarah Kim", enrolledCourse: "Next.js & Tailwind CSS" },
  ];

  return (

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Name</th>
              <th className="text-left px-4 py-2 border-b">Enrolled Course</th>
              <th className="text-left px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-orange-50 transition">
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.enrolledCourse}</td>
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
