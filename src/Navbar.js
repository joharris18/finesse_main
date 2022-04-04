import React from 'react'
import person from './images/person.svg'
import heart from './images/heart.svg'
import bag from './images/bag.svg'
import NavLinks from './components/NavLinks'

export default function Navbar() {
    return (
        <nav>
            <div className="first-list-container">

                <ul className="list-one">
                    <li id="brand-name">F I N E S S E </li>
                    <li>HEELS</li>
                    <li>FLATS</li>
                    <li>PLATFORM</li>
                    <li>SLIP-ONS</li>
                    <li>MULES</li>
                    <li>
                    <input
                        type="text"
                        placeholder="20% Off New Arrivals, Flats"
                        id="search-bar"
                    />
                    </li>
                    <li><img src={person} /></li>
                    <li><img src={heart} /></li>
                    <li><img src={bag} /></li>
                </ul>
            </div>

            <div className="second-list-container">
                <ul className="list-two">
                    <li className="first">NEW ARRIVALS</li>
                    <li>BEST-SELLERS</li>
                    <li>SHOPEE</li>
                    <li>LAZADA</li>
                    <li>FLASH SALE</li>
                    <li>LIMITED EDITION</li>
                    <li id="sale">SALE</li>
                </ul>
            </div>

            <NavLinks />
        </nav>
    )
}