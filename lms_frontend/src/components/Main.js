import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import { Routes, Route } from 'react-router-dom'
import CourseDetail from "./CourseDetail";

function Main() {
  return (
    <div className="space-y-12 bg-gray-100">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:course_id' element={<CourseDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
