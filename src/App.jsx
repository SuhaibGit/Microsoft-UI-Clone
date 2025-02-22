import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Carousel from './components/hero'
import List from './components/hero2'
import Hero3 from './components/hero3'
import List2 from './components/hero4'
import Footer from './components/footer'
import Home from './pages/home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
