import './Content.css'

function Content(props) {
  const { img, onImgOpenClick } = props;
    return(
        <div className="item">
          <img src={img.imgUrl} onClick={() => {onImgOpenClick(img)}}/>
          <h4>{img.title}</h4>
        </div>
    )
}
export default Content;