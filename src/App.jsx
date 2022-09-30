import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import PhotoContainer, { loader as ImageLoader } from './components/PhotoContainer'

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<Layout />} >
        <Route path="/" loader={ImageLoader} element={<PhotoContainer />} />
        <Route path="/:query" loader={ImageLoader} element={<PhotoContainer />} />
    </Route>)
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
