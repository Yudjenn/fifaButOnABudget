import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SplashScreen from './splashScreen/splashScreen'
import MainMenu from './mainMenu/mainMenu'
import McFirstScreen from './managerCareer/firstScreen/mcFirstScreen'

const router = createBrowserRouter([
  {path: '/', element: <SplashScreen />},
  {path: '/menu', element: <MainMenu />},
  {path: '/managerCareer', element: <McFirstScreen />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
