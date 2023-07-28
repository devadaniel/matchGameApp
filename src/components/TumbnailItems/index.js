import './index.css'

const ThumbnailItems = props => {
  const {imageDetails, onClickThumbnail} = props
  const {thumbnailUrl} = imageDetails

  const onClickThumb = () => {
    onClickThumbnail(thumbnailUrl)
  }

  return (
    <li className="match-image-container">
      <button className="button-image" type="button" onClick={onClickThumb}>
        <img src={thumbnailUrl} alt="thumbnail" className="image-button" />
      </button>
    </li>
  )
}

export default ThumbnailItems
