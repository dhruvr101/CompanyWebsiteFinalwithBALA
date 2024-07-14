import React from "react";
import "../styles/hero.css";

import heroDarkImg from "../images/hero-img.png";
import lightImg from "../../components/images/light-hero-bg.jpg";

const Hero = ({ theme }) => {
  return (
    <section className="'hero__section" id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We 're Creating </h2>
              <h2>Next-Gen Therapy</h2>
              <h2 className="highlight">Your AI Therapist</h2>
            </div>
            <p className="description">
            Chat and Call with an AI Therapist that remembers you.
24/7 Personalized and Science-backed support.
            </p>

            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>

          <div className="hero__img">
            <img
              src={theme === "light-theme" ? lightImg : heroDarkImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
