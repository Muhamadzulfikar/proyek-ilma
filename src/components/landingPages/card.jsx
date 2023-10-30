const CardLandingPage = ({ image, title, content }) => {
    return (
        <div className="col-md-6 col-lg-4 rounded">
            <div className="card bg-dark text-white p-0 pb-3 shadow mb-5" style={{ border: 0, textAlign: "left", height: "430px" }}>
                <img style={{ height: "200px" }} src={image} className="card-img-top" alt="..." />
                <div className="card-body p-4">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{height:"80px"}}>{content}</p>
                    <button className='btn button-coffee mt-3'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default CardLandingPage