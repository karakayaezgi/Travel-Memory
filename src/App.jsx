import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Trips from './pages/Trips'
import Favorites from './pages/Favorites'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './components/NotFound'
import TripDetail from './pages/TripDetail'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='trips' element={<Trips />}/>
          <Route path='trips/:id' element={<TripDetail />}/>
          <Route path='favorites' element={<Favorites />}/>
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
