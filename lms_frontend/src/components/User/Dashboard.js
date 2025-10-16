import React, { useState } from "react";

export default function Dashboard() {
  const [active, setActive] = useState("my-courses");

  const menu = [
    { id: "my-courses", label: "My Courses" },
    { id: "favourite-courses", label: "Favourite Courses" },
    { id: "recommended-courses", label: "Recommended Courses" },
    { id: "profile-setting", label: "Profile Setting" },
    { id: "change-password", label: "Change Password" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 p-6">
        <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

        <nav className="space-y-2">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                active === item.id
                  ? "bg-orange-50 text-orange-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}

          {/* Logout button styled red */}
          <div className="pt-4 border-t border-gray-100 mt-4">
            <button
              onClick={() => alert("Logging out...")}
              className="w-full px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">{menu.find(m => m.id === active)?.label}</h1>
          <p className="text-gray-500 mt-1">Manage your information and settings from here.</p>
        </header>

        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          {/* Simple conditional content placeholders */}
          {active === "my-courses" && (
           <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
    <thead className="bg-gray-100">
      <tr>
        <th className="text-left py-2 px-4 border-b">No.</th>
        <th className="text-left py-2 px-4 border-b">Course Name</th>
        <th className="text-left py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b">React Tutorial</td>
        <td className="py-2 px-4 border-b space-x-2">
          <button className="text-blue-500 hover:underline">View</button>
          <button className="text-red-500 hover:underline">Delete</button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">2</td>
        <td className="py-2 px-4 border-b">Jenny's Lecture</td>
        <td className="py-2 px-4 border-b space-x-2">
          <button className="text-blue-500 hover:underline">View</button>
          <button className="text-red-500 hover:underline">Delete</button>
        </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">3</td>
        <td className="py-2 px-4 border-b">Advanced JS</td>
        <td className="py-2 px-4 border-b space-x-2">
          <button className="text-blue-500 hover:underline">View</button>
          <button className="text-red-500 hover:underline">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>


          )}

          {active === "favourite-courses" && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Favourite Courses</h3>
              <p className="text-gray-600">Courses the user has favourited.</p>
            </div>
          )}

          {active === "recommended-courses" && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Recommended Courses</h3>
              <p className="text-gray-600">Courses recommended based on your activity.</p>
            </div>
          )}

          {active === "profile-setting" && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Profile Setting</h3>
              <p className="text-gray-600">Update your profile details here.</p>
            </div>
          )}

          {active === "change-password" && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Change Password</h3>
              <p className="text-gray-600">Change your account password securely.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
