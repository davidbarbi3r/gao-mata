function Carousel(props) {

    const carousel = props.images.map((image) => {
        return (
            <img src={image.url} alt={image.alt}/>
        )
    })
    
    return (
        <div className="Carousel">
            <div className="Carousel-container">
                {carousel}
            </div>
        </div>
    );
}

export default Carousel;