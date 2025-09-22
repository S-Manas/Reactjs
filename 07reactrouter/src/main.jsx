import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider,createBrowserRouter} from
'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{Infoloader} from './components/github/github.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:userId',
        element: <User />
      },
      {
        loader:(Infoloader)=>fetch("https://api.github.com/users/S-Manas"),
        path:'github',
        element:<Github />
      }
    ]
  }
])

//  const router = createBrowserRouter(
//    createBrowserRouter(
//      <Route path="/" element={<Layout />}>
//        <Route path='' element={<Home />} />
//        <Route path="about" element={<About />} />
//        <Route path="contact" element={<Contact />} />
//        <Route path="user/:userId" element={<User />} />
//      </Route>
//    )
//  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
