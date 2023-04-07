import React from "react";
import Navbar from "./components/NavBar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./components/data.js";
console.log(data)
export default function App() {
const dataElement = data.map((info) => {
    return ( 
        <Card 
            key={info.id}
            content ={info}
            // coverImg={info.coverImg}
            // rating={info.stats.rating} 
            // reviewCount={info.stats.reviewCount} 
            // location={info.location} 
            // title={info.title} 
            // price={info.price}
            // openSpots={info.openSpots}
        />
    )
})

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-scroll">
                {dataElement}
            </div>
        </div>
    );
};
