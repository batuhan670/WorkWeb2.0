import React, { Component } from 'react';
import './SlideshowStyles.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const imageNews = [
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
    <div>5</div>
];

class Slideshow extends Component {
    render() {
        return (
            <Carousel>
                {imageNews}
            </Carousel>
        );
    }
};

export default Slideshow;