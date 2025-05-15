import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Destination.css';

const Destination = () => {
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 3.2,
    slidesToScroll: 1,
  };

  const Services = [
    { image: 'Destination2.png', text: 'Bali, Indonesia' },
    { image: 'Destination3.png', text: 'Paris, France' },
    { image: 'Destination5.png', text: 'Kerry, Ireland' },
    { image: 'Destination1.png', text: 'Sydney, Australia' },
  ];

  return (
    <Wrapper>
      <NavLink className="card-dest" to="/">
        <h4 className="headline">Top Vacation Destinations</h4>
        <Slider {...settings}>
          {Services.map((Service, index) => (
            <div className="card-head" key={index}>
              <img src={Service.image} alt={Service.text} />
              <p>{Service.text}</p>
            </div>
          ))}
        </Slider>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Destination;
