import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Error from './components/Error';
import Layout from './components/Layout'
import PhotoContainer, { loader as ImageLoader } from './components/PhotoContainer'

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error /> }>
        <Route index loader={ImageLoader} element={<PhotoContainer />} />
        <Route path=":query" loader={ImageLoader} element={<PhotoContainer />} />
    </Route>)
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;

/** createBrowserRouter
 * To use the new data APIs you'll have to use the new routers introduced in 6.4
 * https://reactrouter.com/en/main/routers/picking-a-router
 * createBrowserRouter is the recommended router for all web apps
 * https://reactrouter.com/en/main/routers/create-browser-router
 */

/** createRoutesFromElements
 * Using the `createRoutesFromElements` you can build your Route tree as used in previous versions
 * of React Router. Note: You'll no longer need to use Routes or Switches.
 */

/** errorElement
 * When an error occurs in a route the errorElement will be rendered
 * If a route doesn't have an errorElement it will bubble up to the closest parent that does
 */

/** loader
 * This function can be used to provide data to the route element before it is rendered
 * https://reactrouter.com/en/main/route/loader
 */

/** RouterProvider
 * The router objects created can be passed to this component to render them in the tree
 * https://reactrouter.com/en/main/routers/router-provider
 */
