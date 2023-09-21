import { useState } from 'react'
import './App.css'
import ImageGallery from './components/ImageGallery'
import Login from './components/Login'
import Home from './Home'
import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route index element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path="/image-gallery"  element={<ImageGallery />} />
  </Route>
))

function App() {

  return (
    <div className="App">
    <RouterProvider router={router} />
  </div>
  )
}

export default App
