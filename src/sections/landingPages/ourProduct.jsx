import CardLandingPage from '../../components/landingPages/card';
const OurProductLandingPage = () => {
    return (
        <div className="row w-100 mt-5 mt-4 ps-4 ps-md-5 ps-4">
            <h1 className='text-center mb-5'>Produk Unggulan Kami</h1>
            <CardLandingPage
                image="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Kopi Arabika Greenbeans"
                content="Biji kopi berkualitas yang belum mengalami proses sangrai. Cocok untuk coffee shop yang ingin bermintra"
            />
            <CardLandingPage
                image="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Kopi Arabika Roasted Beans"
                content="Biji kopi yang telah melalui proses sangrai, siap menghadirkan cita rasa yang kaya dan mendalam."
            />
            <CardLandingPage
                image="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=1928&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Kopi Arabika Bubuk"
                content="Varian kopi yang siap seduh, memberikan kenyamanan dalam menikmati rasa kopi yang khas."
            />
        </div>
    )
}

export default OurProductLandingPage