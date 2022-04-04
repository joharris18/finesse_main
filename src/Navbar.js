import person from './images/person.svg'
import heart from './images/heart.svg'
import bag from './images/bag.svg'

export default function Navbar() {
    return (
        <nav>
            <div class="first-list-container">

                <ul class="list-one">
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

            <div class="second-list-container">
                <ul class="list-two">
                    <li class="first">NEW ARRIVALS</li>
                    <li>BEST-SELLERS</li>
                    <li>SHOPEE</li>
                    <li>LAZADA</li>
                    <li>FLASH SALE</li>
                    <li>LIMITED EDITION</li>
                    <li id="sale">SALE</li>
                </ul>
            </div>

            <div class="links-container">
                <a href="#">this is a link</a>
                <a href="#">this is a link</a>
                <a href="#">this is a link</a>
                <a href="#">this is a link</a>
                <a href="#">this is a link</a>
            </div>
        </nav>
    )
}