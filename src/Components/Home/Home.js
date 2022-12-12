import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpghttps://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="LG 360 L 2 Star Frost-Free Smart Inverter Double Door Refrigerator (GL-D382SDSY, Dazzle Steel, Door Cooling+ & Multi Air Flow)"
            price={79.7}
            image="https://m.media-amazon.com/images/I/61r5DUOrTvL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="AmazonBasics 1 Ton 3 Star Split AC (White, Copper, Anti corrosion coating)"
            price={399.0}
            image="https://m.media-amazon.com/images/I/71Z9+rx576L._SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="54419823"
            title="Apple iPhone 13 (128GB) - Midnight"
            price={159.99}
            image="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="41098920"
            title="JBL Clip 4, Wireless Ultra Portable Bluetooth Speaker, JBL Pro Sound, Integrated Carabiner, Vibrant Colors with Rugged Fabric Design, Dust & Waterproof, Type C (Without Mic, Blue)"
            price={75.79}
            image="https://m.media-amazon.com/images/I/61QK6svpbDS._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="75879863"
            title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)"
            price={180.0}
            image="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="53641287"
            title="ZEBRONICS Juke BAR 9750 PRO 5.1.2 Surround Dolby Atmos 525 Watt Soundbar with Subwoofer, Dual Wireless Rear Satellites, HDMI eARC, Optical, Bluetooth 5.0, Wall Mount & Remote Control"
            price={300.9}
            image="https://m.media-amazon.com/images/I/41VI1wkzEeL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
