import React, { useState } from "react";
import FavouriteCourse from './AddCourse'
import RecommendedCourse from "./MyUsers";
import ProfileSetting from "./ProfileSetting";
import ChangePassword from "./ChangePassword";
import MyCourse from './MyCourse'
import AddCourse from "./AddCourse";
import MyUsers from "./MyUsers";

export default function TeacherDashboard() {
  const [active, setActive] = useState("my-courses");

  const menu = [
    { id: "my-courses", label: "My Courses", message: "View all courses you are enrolled in."},
    { id: "add-course", label: "Add Course", message: "Courses you have favourited." },
    { id: "my-users", label: "My Users", message:  "Courses recommended based on your activity." },
    { id: "profile-setting", label: "Profile Setting", message:  "Update your profile details here." },
    { id: "change-password", label: "Change Password", message:  "Change your account password securely." },
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
                  item.id === active
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
          <p className="text-gray-500 mt-1">{menu.find(m => m.id === active)?.message}</p>
        </header> 

        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          {/* Simple conditional content placeholders */}
          {active === "my-courses" && (
           <MyCourse/>
          )}

          {active === "add-course" && (
           <AddCourse />
          )}

          {active === "my-users" && (
           <MyUsers />
          )}

          {active === "profile-setting" && (
           <ProfileSetting />
          )}

          {active === "change-password" && (
           <ChangePassword />
          )}
        </section>
      </main>
    </div>
  );
}
