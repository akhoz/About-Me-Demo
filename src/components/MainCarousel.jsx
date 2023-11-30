import { Carousel } from 'flowbite-react';

function MainCarousel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 flex items-center justify-center">
            <Carousel slideInterval={5000} className="w-3/4 sm:w-2/3 lg:w-1/2">
                <img src="./public/carousel/1.png" alt="1" />
                <img src="./public/carousel/2.png" alt="2" />
                <img src="./public/carousel/3.png" alt="3" />
                <img src="./public/carousel/4.png" alt="4" />
            </Carousel>
        </div>
    )
}

export default MainCarousel;
