import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pic1 from "../assets/car.png"
import Pic from "../assets/car2.png"
import Pic2 from "../assets/chad.jpg"

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
                    <img src={Pic2} height={500} width={1500}/>
                </div>
            </Carousel>
        </>
    )
}

export default HomeCarousel