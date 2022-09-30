const Photo = ({ data }) => {
  return (
    <li>
        <img src={`https://live.staticflickr.com/${data.server}/${data.farm}/${data.id}_${data.secret}.jpg`} alt="" />
    </li>
  )
}
export default Photo
