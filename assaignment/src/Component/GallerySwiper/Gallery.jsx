import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import FirstImage from '../../Assets/Images/7c0c0a0a-6e1d-44a4-84fe-2c3cd05ef9df.avif';
import SecondImage from '../../Assets/Images/7f4f3954-4a89-46b6-9af6-6a832f27fd28.avif';
import ThirdImage from '../../Assets/Images/93ac6730-2cb8-4ea9-a9b7-a7d54fe8cac6.avif';
import FourthImage from '../../Assets/Images/14075d40-8b58-40f3-82a1-473d7992399e.avif';
import FiveImage from '../../Assets/Images/993599d1-8872-4f5d-87af-a4fbfb5fb16f.avif';
import './Gallery.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={FirstImage} onDragStart={handleDragStart} role="presentation" alt="Description 1" className="carousel-image" />,
    <img src={SecondImage} onDragStart={handleDragStart} role="presentation" alt="Description 2" className="carousel-image" />,
    <img src={ThirdImage} onDragStart={handleDragStart} role="presentation" alt="Description 3" className="carousel-image" />,
    <img src={FourthImage} onDragStart={handleDragStart} role="presentation" alt="Description 4" className="carousel-image" />,
    <img src={FiveImage} onDragStart={handleDragStart} role="presentation" alt="Description 4" className="carousel-image" />,
];

const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
};

const Gallery = () => (
    <div style={{ backgroundColor: "rgb(255, 227, 226)" }}>
        <div className='container mt-5'>
            <h1>You can try</h1>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                autoPlay
                autoPlayInterval={1500}
                infinite
                disableButtonsControls={true}
            />
        </div>
    </div>
);

export default Gallery;
