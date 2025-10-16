import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Login from './User/Login'
import Dashboard from './User/Dashboard'
import Register from './User/Register'
import { Routes, Route } from 'react-router-dom'
import CourseDetail from "./CourseDetail";

function Main() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:course_id' element={<CourseDetail />}></Route>
        <Route path='/user-login' element={<Login />}></Route>
        <Route path='/user-register' element={<Register />}></Route>
        <Route path='/user-dashboard' element={<Dashboard />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
