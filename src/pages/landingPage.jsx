import './style.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

const LandingPage = () => {
  const [zIndex, setZIndex] = useState({ zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.515)" });
  return (
    <section className="main-container bg-dark text-white">
      <div className=" position-relative">
        <div style={zIndex} className={"navbar-fixed py-2 position-absolute bg-navbar"}>
          <nav className="navbar navbar-expand-lg container border-bottom border-1">
            <div className="container-fluid">
              <a className="navbar-brand text-center text-md-start text-white" href="#"><h3>Coffee Shop</h3></a>
              <button onClick={() => setZIndex({ zIndex: 3, backgroundColor: "rgba(0, 0, 0, 0.622)" })} className="navbar-toggler px-5 bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 navbar">
                  <li className="nav-item me-md-5 me-0 mt-4 mb-2 mb-md-0 mt-md-0">
                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0 ">
                    <a className="nav-link active text-white" aria-current="page" href="#">Menu</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0 ">
                    <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0">
                    <a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
                  </li>
                  <li>
                    <form className="ms-md-5">
                      <button className="btn navbar-button-primary text-white" type="submit">Shop Coffee</button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide w-100">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://plus.unsplash.com/premium_photo-1675362191731-0b7947b5f1b6?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        <div className="position-absolute text-center carousel-header-container">
          <div className="text-white fw-bold">
            <h3>Welcome</h3>
            <h1 className=" text-uppercase custom-font">Your coffee ready to serve <br /> You want a order coffee ?</h1>
          </div>
          <div className="mt-5">
            <button className="btn p-3 text-white rounded me-4 navbar-button-primary">Order Now</button>
            <button className="btn p-3 text-white rounded btn-view-menu">View Menu</button>
          </div>
        </div>
      </div>

      <div className="row w-100 mt-5 pt-4 pb-5">
        <div className="col-md-6 ps-5 mb-md-5">
          <h1 className='text-center'>Our Story</h1>
          <p className='mt-5 lh-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate iusto rem excepturi numquam dignissimos incidunt cumque commodi vel alias autem obcaecati quisquam corrupti accusantium debitis, ipsum dolorum eligendi, ad optio.
            Consectetur laboriosam deleniti natus eum! Ad placeat unde vitae beatae totam doloribus corrupti! Explicabo repellendus ad architecto saepe tempore pariatur laborum molestias, placeat dolores nemo incidunt excepturi odio dolorem commodi.
            Officiis ipsa optio perspiciatis sed veritatis est, voluptate exercitationem commodi pariatur omnis placeat nesciunt deleniti quae. Nulla consectetur eius quaerat reprehenderit, est ex! Dolore dignissimos libero voluptates reprehenderit distinctio quibusdam?</p>
        </div>
        <div className="col-md-6 ps-5 mt-3 mt-md-5 mt-lg-0 pt-md-5 pt-lg-0">
          <img className='rounded' style={{ objectFit: "cover", height: "450px", width: "100%" }} src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>

      {/* <div className="row w-100 mt-md-5 ps-4 ps-md-5 ps-4 mt-5"></div> */}

      <div className="row w-100 mt-md-5 mt-4 ps-4 ps-md-5 ps-4">
        <h1 className='text-center mb-5'>Our Product</h1>
        <div className="col-md-6 col-lg-4 rounded">
          <button className="card bg-dark text-white p-0 pb-3 shadow mb-5" style={{border:0, textAlign:"left", height:"550px"}}>
            <img src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
            <div className="card-body p-4">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <button className='btn btn-primary'>Order Now</button>
            </div>
          </button>
        </div>
        <div className="col-md-6 col-lg-4 rounded">
          <button className="card bg-dark text-white p-0 pb-3 shadow mb-5" style={{border:0, textAlign:"left", height:"550px"}}>
            <img src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
            <div className="card-body p-4">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <button className='btn btn-primary'>Order Now</button>
            </div>
          </button>
        </div>
        <div className="col-md-6 col-lg-4 rounded">
          <button className="card bg-dark text-white p-0 pb-3 shadow mb-5" style={{border:0, textAlign:"left", height:"550px"}}>
            <img src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
            <div className="card-body p-4">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
              <button className='btn btn-primary'>Order Now</button>
            </div>
          </button>
        </div>
      </div>

      <div className="row w-100 p-5 bg-dark text-white mt-5">
        <div className="col-md-4 ps-md-5">
          <p>+62 82284134328</p>
          <p>Nomor handphone admin</p>
        </div>
        <div className="col-md-4 ps-md-5">
          <p>Batam</p>
          <p>Jl. Kenangan Gajah Mada</p>
        </div>
        <div className="col-md-4 ps-md-5">
          <p>Open Senin - Jumat</p>
          <p>17:00 - 23:30</p>
        </div>
      </div>
    </section>
  )
}

export default LandingPage