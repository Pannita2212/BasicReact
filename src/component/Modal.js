import './Modal.css'


function Modal(props) {
    const {img, onBgClick} = props;
    return(
        <div className="modal">
            <div className="modal-bg" onClick={onBgClick}></div>
            <div className="modal-content">
                <img src={img.imgUrl} />
                <h4>{img.title}</h4>
            </div>
        </div>
    )
}
export default Modal;