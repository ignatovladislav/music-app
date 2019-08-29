import React from 'react'

const NextArrow = props => {
    const { className, style, onClick } = props;
    // console.log(props)
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    )
}

const PrevArrow = props => {
    const { className, style, onClick } = props;
    
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
}


const NextArrowMain = props => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
        />
    )
}

export const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

export const settingsHome = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <NextArrowMain />,
    prevArrow: <NextArrowMain />
}