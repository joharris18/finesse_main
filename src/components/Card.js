import React from 'react';
import ReactDOM from 'react-dom';
import star from "../images/star.svg"
import halfStar from "../images/star-half.svg"
import shoes from "../images/flat-shoes.jpg"
import './Components.css'

export default function Card() {
    return (
        <div className="card">
            <img src={shoes} className="card-main-img"/>
            <p className="card-sale">New Markdown</p>
            <p className="card-title">Amy</p>
            <p className="card-subtitle">Two Strap Flats (Women)</p>
            <p className="card-sale-price">Now PHP 4,300.36</p>
            <p className="card-orig-price">Was PHP 6,540.35</p>
            <div className='card-flex'>
                <img className="card-star" src={star}/>
                <img className="card-star" src={star}/>
                <img className="card-star" src={star}/>
                <img className="card-star" src={star}/>
                <img className="card-star" src={halfStar}/>
                <p className="card-reviews">(39)</p>
            </div>
        </div>
    )
}

