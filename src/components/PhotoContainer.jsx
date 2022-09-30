import Photo from "./Photo"
import apiKey from "../config"
import { useLoaderData } from "react-router-dom"

const PhotoContainer = () => {
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

export async function loader({ params }) {
    const { query = 'dogs' } = params;
    const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`)
    const data = await res.json()
    if (data.photos.photo.length === 0) {
        throw new Error('No images found')
    }
    return data.photos.photo
}
