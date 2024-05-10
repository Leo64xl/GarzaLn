import React from 'react'
import "./GigCard.scss"
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.url} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.url} alt="" />
            <span>{item.nameUser || 'leo es gay'}</span>
          </div>
          <p>{item.descripcion}</p>
          <div className="star">
            <img src="/img/star.png" alt="" />
            <span>{item.time || 5}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="/img/heart.png" alt="" />
          <div className="price">
            <span>Apartir de </span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;