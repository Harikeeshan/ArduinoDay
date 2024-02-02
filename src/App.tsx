import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import DayOneRegulations from './pages/DayOneRegulations'
import DayTwoRegulations from './pages/DayTwoRegulations'
import HomeCall from './pages/HomeCall'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DMCARemoval from './pages/DMCARemoval'

function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomeCall />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dayone-regulations' element={<DayOneRegulations />} />
        <Route path='/daytwo-regulations' element={<DayTwoRegulations />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/dmca' element={<DMCARemoval />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}


export default App
