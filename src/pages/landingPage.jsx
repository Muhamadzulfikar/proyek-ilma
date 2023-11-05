import './style.css'
import { useEffect } from 'react';
import OurProductLandingPage from '../sections/landingPages/ourProduct';
import TaglineLandingPage from '../sections/landingPages/tagline';
import Story from '../components/landingPages/story';
import StoryRight from '../components/landingPages/storyRight';
import TeamContainer from '../sections/landingPages/teamContainer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  useEffect(() => {
    const nextButton = document.getElementById('next');

    if (nextButton) {
      const intervalId = setInterval(() => {
        nextButton.click();
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, []);

  const burgerButtonClicked = () => {
    const navContent = document.getElementById('navbarSupportedContent');
    const navContainer = document.getElementById('navbar-container');
    const buttonNavbar = document.getElementById('button-navbar');
    navContent.classList.toggle('bg-coffee');
    navContainer.classList.toggle('z-index-99');
    buttonNavbar.classList.toggle('navbar-button-border');
  }

  return (
    <section id='home' className="main-container bg-dark text-white">
      <div className=" position-relative">
        <div id='navbar-container' className="navbar-fixed py-2 position-absolute">
          <nav className="navbar navbar-expand-lg container border-bottom border-1">
            <div className="container-fluid">
              <a className="navbar-brand text-center text-md-start text-white" href="#home"><h3>Saveurior Coffee</h3></a>
              <button onClick={burgerButtonClicked} className="navbar-toggler bg-coffee" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 navbar">
                  <li className="nav-item me-md-5 me-0 mt-4 mb-2 mb-md-0 mt-md-0">
                    <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0 ">
                    <a className="nav-link active text-white" aria-current="page" href="#story">About</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0 ">
                    <a className="nav-link active text-white" aria-current="page" href="#product">Menu</a>
                  </li>
                  <li className="nav-item me-md-5 me-0 ms-md-3 ms-0 mb-2 mb-md-0">
                    <a className="nav-link active text-white" aria-current="page" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item mt-2 mt-md-0">
                    <form className="ms-md-5">
                      <button id='button-navbar' className="btn button-coffee text-white" type="submit">Shop Coffee</button>
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
          <button className="carousel-control-prev d-none" style={{height: "100svh"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button id='next' className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div style={{margin: "0 auto", left: "0", right: 0}} className="position-absolute text-center carousel-header-container">
          <div className="text-white fw-bold">
            <h3>Welcome</h3>
            <h1 className=" text-uppercase custom-font">Your coffee ready to serve <br /> You want an order coffee ?</h1>
          </div>
          <div className="mt-5">
            <a href='#product' className="btn px-3 py-2 text-white rounded me-4 button-coffee">Order Now</a>
            <a href='#product' className="btn px-3 py-2 text-white rounded btn-view-menu">View Menu</a>
          </div>
        </div>
      </div>

      <Story 
        title="Kenapa Harus Saveurior Coffee"
        content='Saveurior Coffee adalah pilihan utama bagi pecinta kopi yang menghargai kualitas dan rasa yang unggul. Nama "Saveurior" kami berasal dari kata "Saveur" dalam bahasa Perancis yang berarti rasa, digabung dengan akhiran "-ior" yang diambil dari kata "superior" dalam bahasa Indonesia, mencerminkan tekad kami untuk menjadi yang terbaik dalam dunia kopi. Kami berkomitmen untuk berdedikasi terhadap kualitas dalam pemilihan, pengolahan, dan penyajian kopi, kami akan memanjakan lidah Anda dengan setiap tegukan yang luar biasa.'
        image="public/images/Catalogue - 2.png"
        position="0px -10px"
      />

      <TaglineLandingPage />

      <Story 
        title="Dari Pangalengan ke Cangkir Anda"
        content='Kopi Saveurior berasal dari daerah Pangalengan yang mendunia akan kopi berkualitas. Kami teliti dalam pemilihan biji arabika terbaik, kemudian mengolahnya dengan metode fullwash demi mempertahankan kemurnian rasa kopi yang autentik. Kami dengan bangga menjunjung tinggi standar keaslian dengan menggunakan 100% kopi arabika murni tanpa campuran apa pun. Dengan begitu, Anda dapat merasakan kelezatan sejati kopi yang menjadi ciri khas dari daerah kami.'
        image="https://majalah.ottencoffee.co.id/wp-content/uploads/2016/03/guatemala-central-ame_moor-3.jpg"
      />
      
      <StoryRight 
        title="Visi Misi Saveurior Coffee"
        content='Visi kami adalah menjadi penyedia kopi arabika berkualitas dan otentik yang bisa dinikmati oleh pecinta kopi di indonesia dan bisa memasarkan produk kami ke luar negeri. Misi kami adalah memastikan biji kopi memiliki kualitas rasa yang terjaga dan berinovasi dalam memberikan pelayanan kepada pelanggan.'
        image="public/images/3.jpg"
      />

      <OurProductLandingPage />

      <TeamContainer />

      <div id='contact' className="row w-100 p-5 bg-coffee mt-5">
        <div className="col-md-4 ps-md-5">
          <p><i class="fa fa-phone" aria-hidden="true"></i> +628 2229 5904  40</p>
        </div>
        <div className="col-md-4 ps-md-5">
          <p><i class="fa fa-envelope" aria-hidden="true"></i> seveurirorcoffe@gmail.com</p>
        </div>
        <div className="col-md-4 ps-md-5">
          <p><i class="fa fa-instagram" aria-hidden="true"></i> saveurior.coffee</p>
        </div>
      </div>
    </section>
  )
}

export default LandingPage