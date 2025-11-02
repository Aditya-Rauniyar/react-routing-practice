import React from 'react'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Course from './pages/Course';
import BTech from './pages/BTech';
import BPharma from './pages/BPharma';
import MBA from './pages/MBA';


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Courses' element={<Course/>}>
             <Route path='Btech' element={<BTech/>}/>
             <Route path='BPharma' element={<BPharma/>}/>
             <Route path='MBA' element={<MBA/>}/>
        </Route>
       
        <Route path='*' element={<NotFound/>}/>
       </Routes>
      <Footer/>
    </div>
  )
}

export default App
