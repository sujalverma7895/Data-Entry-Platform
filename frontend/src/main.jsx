import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Dashboard from './Dashboard.jsx'
import View from './View.jsx'
import Edit from './Edit.jsx'
let data= createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
  },
  {
    path: '/View/:id',
    element: <View />,
  },{
    path: '/edit/:id',
    element: <Edit />,
  },
  // Add more routes as needed
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={data}>
    <App />
  </RouterProvider>
)
