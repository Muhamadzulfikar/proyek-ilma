const ImageGallery = ({image}) => {
    return(
        <div className="col-md-6 col-lg-3 rounded">
            <div className="card bg-dark text-white shadow mb-5" style={{ border: 0, textAlign: "left", height: "250px" }}>
                <img style={{ height: "250px", objectFit:"cover" }} src={image} className="card-img-top" alt="..." />
            </div>
        </div> 
    )
}

export default ImageGallery