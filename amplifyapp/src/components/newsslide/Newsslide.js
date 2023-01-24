import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './NewsslideStyles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imgNws = [
    <div><img height="500px" src="https://i.imgur.com/tLmglQT.png" alt="fakeNews1" />
        <p className="legend">Legend 1</p></div>,
    <div><img height="650px" src="https://i.imgur.com/jEm0htO.jpeg" alt="fakeNews2" />
        <p className="legend">Legend 2</p></div>,
    <div><img height="700px" src="https://i.imgur.com/JiXkzkL.jpeg" alt="fakeNews3" />
        <p className="legend">Legend 3</p></div>,
    <div><img height="750px" src="https://i.imgur.com/KjT7bkl.jpeg" alt="fakeNews4" />
        <p className="legend">Legend 4</p></div>,
];

const ImgSrcs = [
    "https://i.imgur.com/tLmglQT.png",
    "https://i.imgur.com/jEm0htO.jpeg",
    "https://i.imgur.com/JiXkzkL.jpeg",
    "https://i.imgur.com/KjT7bkl.jpeg",
]

const ImgDesc = [
    "Girl chokes on fidget spinner",
    "Not just life, finds a way",
    "Dokumentation",
    "Flashbang struggles"
]

function Nwsimg(imagesrc, description) {
    return (
        <div id={imagesrc}>
            <img className='sldImg' src={imagesrc} alt={description} />
            <p>{description}</p>
        </div>
    )
}

//

class Newsslide extends Component {
    render() {
        return (
            <div>
                <Carousel showArrows={true}>
                    {Nwsimg(ImgSrcs[0], ImgDesc[0])}
                    {Nwsimg(ImgSrcs[1], ImgDesc[1])}
                    {Nwsimg(ImgSrcs[2], ImgDesc[2])}
                    {Nwsimg(ImgSrcs[3], ImgDesc[3])}
                </Carousel>
            </div>
        );
    }
};

export default Newsslide;