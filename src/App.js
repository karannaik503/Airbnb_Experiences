import React from "react";
import Header from "./components/Header.js";
import './index.css';
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import Data from "./data.js";

function App() {
  const cards= Data.map(item=>{
    return (
      <Card 
          key={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviews={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
      />
    )
  })
  return (
    <div>
      <Header/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;


/* 
<Card
        img="katie-zaferes.png"
        rating="5.0"
        reviews="(6) • "
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="From $136"
/>
*/