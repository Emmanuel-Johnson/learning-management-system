import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Home from './Home'
import About from './About'

import Login from './User/Login'
import Register from './User/Register'
import Dashboard from './User/Dashboard'
import CourseDetail from "./CourseDetail";

import TeacherLogin from './Teacher/TeacherLogin'
import TeacherRegister from './Teacher/TeacherRegister'
import TeacherDashboard from './Teacher/TeacherDashboard'
import TeacherDetail from './TeacherDetail'

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

        <Route path='/teacher-login' element={<TeacherLogin />}></Route>
        <Route path='/teacher-register' element={<TeacherRegister />}></Route>
        <Route path='/teacher-dashboard' element={<TeacherDashboard />}></Route>
        <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
