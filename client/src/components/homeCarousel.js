import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pic1 from "../assets/car.png"
import Pic from "../assets/homepageCards.png"
import Pic2 from "../assets/car2.png"

function HomeCarousel() {
    return (
        <>
            <Carousel autoPlay interval="5000"
                transitionTime="2500"
                showStatus={false}

                showThumbs={false}>
                <div>
                    <img src={Pic1} />
                </div>
                
                <div>
                    <img src={Pic} />
                </div>
                <div>
                    <img src={Pic2} />
                </div>
            </Carousel>
        </>
    )
}

export default HomeCarousel