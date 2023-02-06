import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Home from '../pages/Home'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/admin" element={<Admin/>} />
   </Routes>
  )
}

export default AllRoutes