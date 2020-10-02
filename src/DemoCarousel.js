import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
let styles = {
    margin: 'auto',
    width: '500px'
  };
  
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div style={styles}>
                <div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
                
                    <p className="legend">Legend 1</p>
                </div>
                <div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
                    
                    <p className="legend">Legend 2</p>
                </div>
                <div>
				<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
                    <p className="legend">Legend 3</p>
                </div>
                </div>
            </Carousel>
        );
    }
};
 
 export default DemoCarousel;