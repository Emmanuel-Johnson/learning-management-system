// TitleManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home - LMS App",
      "/about": "About - LMS App",
      "/all-courses": "All Courses - LMS App",
      "/popular-courses": "Popular Courses - LMS App",
      "/popular-teachers": "Popular Teachers - LMS App",
      "/user-login": "User Login",
      "/user-register": "User Register",
      "/user-dashboard": "User Dashboard",
      "/teacher-login": "Teacher Login",
      "/teacher-register": "Teacher Register",
      "/teacher-dashboard": "Teacher Dashboard",
    };

    // Dynamic routes (like /detail/:course_id)
    if (location.pathname.startsWith("/detail/")) {
      document.title = "Course Detail - LMS App";
      return;
    }

    if (location.pathname.startsWith("/teacher-detail/")) {
      document.title = "Teacher Detail - LMS App";
      return;
    }

    // Static routes
    document.title = titles[location.pathname] || "LMS App";
  }, [location.pathname]);

  return null; // no visible UI
}

export default TitleManager;
