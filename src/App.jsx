import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TeamsPage from './pages/TeamsPage'
import EventsPage from './pages/EventsPage'
import BlogsPage from './pages/BlogsPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/team' element={<TeamsPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/blogs' element={<BlogsPage />} />
        <Route path='/*' element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  )
}

export default App