import "./app.scss"
import React from "react";
import Navbar from "./componets/navbar/navbar";
import Hero from "./componets/hero/hero";
import Parallax from "./componets/parallax/parallax";
import Services from "./componets/service/Services";
import Portfolio from "./componets/portfolio/portfolio";
import Contact from "./componets/contact/contact";




function App() {
  return (
    <div className="app">
      <section id="Home">
        <Navbar/>
        <Hero/>
        </section>
      <section>
        <Parallax type="service"/>
      </section>
      <section id="Service">
      <Services/>
      </section>
      <section >
        <Parallax type="portfolio"/>
      </section>
      <Portfolio/>
      <section id="Contact">
        <Contact/>
      </section>
      <section id="About">About</section>
    </div>

  );
  }
export default App;
