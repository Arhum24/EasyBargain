import React from "react";
import { Carousel } from "react-responsive-carousel";
import './livesessionmain.css';
import image1 from './images/Nike-001.jpg';
import image2 from './images/Nike-001.jpg';
import image3 from './images/Nike-001.jpg';
import image4 from './images/Nike-001.jpg';

function Productcarousel(props){

    const[slide1, setslide1] = React.useState(image1);
    const[slide2, setslide2] = React.useState(image2);
    const[slide3, setslide3] = React.useState(image3);
    const[slide4, setslide4] = React.useState(image4);

    return(
    
    <Carousel axis="horizontal" className="productCarousel" autoplay>
    <div>
<img src={slide1} />
<p className="legend">Legend 1</p>
</div>
<div>
<img src={slide2} />
<p className="legend">Legend 2</p>
</div>
<div>
<img src={slide3} />
<p className="legend">Legend 3</p>
</div>
<div>
<img src={slide4} />
<p className="legend">Legend 4</p>
</div> 
</Carousel>
    );
}

export default Productcarousel;