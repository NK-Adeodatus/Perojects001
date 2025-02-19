import { 
  BrowserRouter, // replacede inorder to use data APIs.
  Routes, // replaced in order to use data APIs.
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Movies from '../components/Movies.jsx'
import Favorites from '../components/Favorites.jsx'
import Layout from '../components/Layout.jsx'
//import fetchMovies from '../components/imdb.js'
import MovieId from '../components/MovieId.jsx'
import PageNotFound from '../components/PageNotFound.jsx'
import './index.css'
import { movieLoader } from '../components/MovieId.jsx'
import Login from '../components/Login.jsx'
import { requireAuth } from '../components/utils.js'
import { actionGoToHomePage } from '../components/Login.jsx'

const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route 
      index 
      element={<Home />} 
      />
      <Route 
      path='about' 
      element={<About />} 
      loader={() => requireAuth()}
      />
      <Route 
      path='movies' 
      element={<Movies />} 
      loader={() => requireAuth()}
      />
      <Route 
      path='favorites' 
      element={<Favorites />} 
      loader={() => requireAuth()}
      />
      <Route 
      path='movies/:id' 
      element={< MovieId/>} 
      loader={movieLoader} 
      />
      <Route 
      path='login' 
      element={<Login />} 
      action={actionGoToHomePage}
      />
      <Route 
      path='*' 
      element={<PageNotFound/>}
      />
      </Route>

))

export default function App() {
  //fetchMovies().then((response) => console.log(response))
  
  return(
    <RouterProvider router={router} />
  )
}