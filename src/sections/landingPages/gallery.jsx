import ImageGallery from "../../components/landingPages/imageGallery"

const Gallery = () => {
    return (
        <div id='galery' className="row w-100 mt-5 mt-4 ps-4 ps-md-5 ps-4">
            <h1 className="text-center mb-3">Gallery Saveuriror</h1>
            <ImageGallery image="https://majalah.ottencoffee.co.id/wp-content/uploads/2016/03/guatemala-central-ame_moor-3.jpg" />
            <ImageGallery image="https://majalah.ottencoffee.co.id/wp-content/uploads/2016/03/guatemala-central-ame_moor-3.jpg" />
            <ImageGallery image="https://majalah.ottencoffee.co.id/wp-content/uploads/2016/03/guatemala-central-ame_moor-3.jpg" />
            <ImageGallery image="https://majalah.ottencoffee.co.id/wp-content/uploads/2016/03/guatemala-central-ame_moor-3.jpg" />
        </div>
    )
}

export default Gallery