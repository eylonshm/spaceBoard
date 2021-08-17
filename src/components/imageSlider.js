import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../assets/styles/imageSlider.css'

import photo_1 from '../assets/images/sliderImages/photo_1.jpg'
import photo_2 from '../assets/images/sliderImages/photo_2.jpg'
import photo_3 from '../assets/images/sliderImages/photo_3.jpg'
import photo_4 from '../assets/images/sliderImages/photo_4.jpg'
import photo_5 from '../assets/images/sliderImages/photo_5.jpg'
import photo_6 from '../assets/images/sliderImages/photo_6.jpg'

const demoCarousel = () => {
    return (
        <div className="imageSliderWrapper">
            <Carousel autoPlay infiniteLoop interval={3000} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
                <div style={styles.imageWrapper}>
                    <img style={styles.image} src={photo_1} />
                </div>
                <div style={styles.imageWrapper}>
                    <img style={styles.image} src={photo_2} />
                </div>
                <div style={styles.imageWrapper}>
                    <img style={styles.image} src={photo_3} />
                </div>
                <div style={styles.imageWrapper}>
                    <img style={styles.image} src={photo_4} />
                </div>
                <div style={styles.imageWrapper}>
                    <img style={styles.image} src={photo_5} />
                </div>
                <div style={styles.imageWrapper}>
                    <img style={styles.image} src={photo_6} />
                </div>
            </Carousel>
        </div>
    )
}

export default demoCarousel

const styles = {
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 0,
        height: '100%',
    },
    image: {
        // maxHeight and width for resize image to container
        // maxHeight: '100%',
        width: '100%',
        height: '100%',
    },
}

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
