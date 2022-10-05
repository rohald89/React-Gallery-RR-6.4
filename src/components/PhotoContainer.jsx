import Photo from "./Photo"
import apiKey from "../config"
import { useLoaderData } from "react-router-dom"

const PhotoContainer = () => {
  // useLoaderData brings in the data that is returned from the loader function
  const images = useLoaderData()

  return (
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {
                images.map(image => (
                    <Photo key={image.id} data={image} />
                ))
            }
        </ul>
      </div>
  )
}

export default PhotoContainer

// loader function will run when the user requests a route that renders this component. 
// this will be run before anything will be rendered to the page! 
export async function loader({ params }) {
  // use the query parameter, fall back to 'dogs' when user visits home route
    const { query = 'dogs' } = params;
    const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`)
    const data = await res.json()
    if (data.photos.photo.length === 0) {
        // throw error when no results are found for the search query
        // this will be caught and handled by the "errorElement" prop on the '/' route
        throw { message: 'No results found' }
    }
    return data.photos.photo
}
