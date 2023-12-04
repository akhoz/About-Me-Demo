import { Link, useLocation } from 'react-router-dom';
import { Carousel } from 'flowbite-react';

function MainCarousel() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const handleCarouselClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isHomePage && (
            <div data-aos="zoom-in" className="h-56 sm:h-64 xl:h-80 2xl:h-96 flex items-center justify-center mb-20">
                <Carousel slideInterval={6000} className="w-3/4 sm:w-2/3 lg:w-1/2">
                    <Link to="/Skills" onClick={handleCarouselClick}>
                        <img src="./public/carousel/1.jpeg" alt="1" />
                    </Link>
                    <Link to="/Aspirations" onClick={handleCarouselClick}>
                        <img src="./public/carousel/4.jpg" alt="4" />
                    </Link>
                    <Link to="/Passions" onClick={handleCarouselClick}>
                        <img src="./public/carousel/3.jpeg" alt="3" />
                    </Link>
                </Carousel>
            </div>
        )
    );
}

export default MainCarousel;
