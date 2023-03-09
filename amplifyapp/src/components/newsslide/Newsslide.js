import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './NewsslideStyles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgSrcs = [
    "https://thumbs.dreamstime.com/z/businessman-having-good-news-office-47627698.jpg",
    "https://thumbs.dreamstime.com/z/excited-indian-woman-read-good-news-letter-young-work-computer-home-office-triumph-results-paperwork-correspondence-221752078.jpg",
    "https://i.imgur.com/JiXkzkL.jpeg",
]

const ImgDesc = [
    "Webwork enables quick overview on your Workday",
    "And makes people happy",
    "Dokumentation",
]

function Nwsimg(imagesrc, description) {
    return (
        <div id={imagesrc}>
            <img className='sldImg' src={imagesrc} alt={description} height="650px" />
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
                </Carousel>
            </div>
        );
    }
};

export default Newsslide;