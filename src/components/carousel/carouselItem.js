export const CarouselItem = ({ item, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <div></div>
            <p className="carousel-title">{item.title}</p>
            <img className="carousel-img" src={item.image} alt="" />
            <div className="carousel-item-text">{item.description}</div>
            <a className="carousel-link" href={item.link}><span className="visually-hidden">Read more</span></a>
        </div>
    );
};