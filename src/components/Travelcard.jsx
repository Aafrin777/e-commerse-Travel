import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Services.css";

const Services = () => {
  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 1.3,
    slidesToScroll: 1,
  };

  const cards = [
    {
      image: 'blog1.png',
      text1: 'Domestic Flight',
      heading: 'Huge saving on flight with trxvl.',
      text: 'Book domestic flights starting @ just $1459',
    },
    {
      image: 'blog3.jpeg',
      text1: 'International Hotels',
      heading: 'Enjoy up to 20% off on International Hotels',
      text: 'Make the most of this deal on your first booking with trxvl',
    },
    {
      image: 'blog4.webp',
      text1: 'Bank Offer',
      heading: 'Get up to 30% discount',
      text: 'Get discount on flight, hotels, and packages with HDFC bank',
    },
  ];

  return (
    <Wrapper>
      <NavLink className="title" to="/">
        <h3> Offers</h3>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div className="container" key={index}>
              <div className="card">
                <img src={card.image} alt={card.heading} className="card-image" />
                <div className="card-content">
                  <p><small>{card.text1}</small></p>
                  <h4>{card.heading}</h4>
                  <p><small>{card.text}</small></p>
                  <button className="btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Services;
