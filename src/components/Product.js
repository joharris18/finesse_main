import React from "react";
import shoes from "../images/flat-shoes.jpg"
import "./Components.css"

export default function Product() {
    return <div className="product">
        <img src={shoes}/>
        <div>
            <h1>Product Title is Long</h1>
            <p>sperry</p>
            <p>web ID</p>
            <span>stars</span>
            <a href="#" className="link">(323)</a>
            <p></p>
            <span>PHP 3,230.00</span>
            <a href="#">Details</a>
            <p>40% Off 2, 30$ Off 1</p>
            <p>Color: Oat</p>
            <div className="product-color-picker"></div>
            <p>Size: Please select | <a href="#">Size Chart</a></p>
            <div className="product-sizes">
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
            </div>
            <a>Which Size Fits Me?</a>
            <p>5,173 Customers Purchased</p>
            <p className="product-add-to-bag">Add To Bag</p>
            <hr />
            <p className="">Product Details</p>
            <p>This is a short description of the product</p>
            <ul>
                <li>details of the product</li>
                <li>details of the product</li>
                <li>details of the product</li>
            </ul>
            <a>View More</a>
        </div>

    </div>
}

