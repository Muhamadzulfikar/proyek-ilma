import TaglineContentLandingPage from "../../components/landingPages/tagline"

const TaglineLandingPage = () => {
    return (
        <div className="row w-100 mt-3 tagline-container py-5 px-5 px-md-0 py-md-0">
            <TaglineContentLandingPage
                icon="fa fa-shopping-cart"
                title="Easy To Order"
                content="Produk kami sangat mudah untuk dipesan. Ayo tunggu apa lagi, klik pesan sekarang. Kepuasan Terjamin"
            />
            <TaglineContentLandingPage
                icon="fa fa-paper-plane"
                title="Fast Delivery"
                content="
                Dengan teknologi mutakhir kami, pesanan Anda segera diproses setelah pembayaran dan dikirimkan ke rumah Anda"
            />
            <TaglineContentLandingPage
                icon="fa fa-coffee"
                title="Quality Coffee"
                content="Kami selalu menjaga kualitas dan rasa coffee kami agar terjaga saat sampai di rumah Anda"
            />
        </div>
    )
}

export default TaglineLandingPage