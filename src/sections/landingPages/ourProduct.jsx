import CardLandingPage from '../../components/landingPages/card';
const OurProductLandingPage = () => {
    return (
        <div id='product' className="row w-100 mt-5 mt-4 ps-4 ps-md-5 ps-4">
            <h1 className='text-center mb-5'>Produk Unggulan Kami</h1>
            <CardLandingPage
                image="https://th.bing.com/th/id/OIP.YapA0lZmKl3H0lKfvWTNVwHaG_?pid=ImgDet&rs=1"
                title="Kopi Arabika Greenbeans"
                content="Biji kopi berkualitas yang belum mengalami proses sangrai. Cocok untuk coffee shop yang ingin bermintra"
            />
            <CardLandingPage
                image="https://th.bing.com/th/id/R.da3e3744b64a85a769a5c01c7f18e1cc?rik=QXmQtOuTwAHu7A&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fb5%2fMedium_roasted_Arabica_coffee_beans.jpg&ehk=Zf75HiIhszfmZwZa9dlaof9TGDTJ6RkldoCA9h%2fjq4g%3d&risl=1&pid=ImgRaw&r=0"
                title="Kopi Arabika Roasted Beans"
                content="Biji kopi yang telah melalui proses sangrai, siap menghadirkan cita rasa yang kaya dan mendalam."
            />
            <CardLandingPage
                image="./public/images/5.jpg"
                title="Kopi Arabika Bubuk"
                content="Varian kopi yang siap seduh, memberikan kenyamanan dalam menikmati rasa kopi yang khas."
            />
        </div>
    )
}

export default OurProductLandingPage