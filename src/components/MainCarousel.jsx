import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';

function MainCarousel() {
    return (
        <div data-aos="zoom-in" className="h-56 sm:h-64 xl:h-80 2xl:h-96 flex items-center justify-center">
            <Carousel slideInterval={6000} className="w-3/4 sm:w-2/3 lg:w-1/2">
                <Link to="/Skills">
                    <img src="./public/carousel/1.jpeg" alt="1" />
                </Link>
                <Link to="/LifeAsAStudent">
                    <img src="./public/carousel/2.jpg" alt="2" />
                </Link>
                <Link to="/Passions">
                    <img src="./public/carousel/3.jpeg" alt="3" />
                </Link>
                <Link to="/Aspirations">
                    <img src="./public/carousel/4.jpg" alt="4" />
                </Link>
            </Carousel>
        </div>
    );
}

export default MainCarousel;
