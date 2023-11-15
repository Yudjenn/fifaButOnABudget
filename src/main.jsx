import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SplashScreen from './splashScreen/splashScreen'
import MainMenu from './mainMenu/mainMenu'

const router = createBrowserRouter([
  {path: '/', element: <SplashScreen />},
  {path: '/menu', element: <MainMenu />},
  {path: '/managerCareer', element: <ManCar />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
