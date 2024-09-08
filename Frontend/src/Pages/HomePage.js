import React from 'react';
import "../Styles/Home.css";
import SponsorSlider from './SponsorSlider'; 
import { Link } from 'react-router-dom'; 

function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-text">
            <h2>HANDS ON HEROES</h2>
            <h1>
              <span className="highlight">YOUR PATH TO MAKING A DIFFERENCE</span> ONE MEANINGFUL CONTRIBUTION AT A <span className="highlight">TIME</span>.
            </h1>
            <div className="hero-buttons">
              <Link to="/volunteer" className="learn-more-btn">Learn More</Link> 
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="section">
        <h2 className="section-title">Offering a Helping Hand...</h2>
        <div className="cards-container">
          <div className="categorycard">
            <Link to="/donation"> 
              <img src="https://www.unitedwayofyc.org/wp-content/uploads/united-way-of-york-county-give-1200x1200.jpg" alt="Fund the Cause" />
              <div className="card-overlay">
                <div className="card-content">
                  <h3>GIVE.</h3>
                  <p>Fund the Cause</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="categorycard">
            <Link to="/Register"> 
              <img src="https://www.unitedwayofyc.org/wp-content/uploads/united-way-of-york-county-advocate-1200x1200.jpg" alt="Become an Ambassador" />
              <div className="card-overlay">
                <div className="card-content">
                  <h3>JOIN.</h3>
                  <p>Sign up! Join our organization</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="categorycard">
            <Link to="/volunteer"> 
              <img src="https://www.unitedwayofyc.org/wp-content/uploads/united-way-volunteers.jpg" alt="Opportunities to Help" />
              <div className="card-overlay">
                <div className="card-content">
                  <h3>VOLUNTEER.</h3>
                  <p>Opportunities to Help</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-text">
            <h2>About Us</h2>
            <h3>WHAT EXACTLY DO WE DO?</h3>
            <p>
              At HandsOn Heroes, based in Charlotte, we are dedicated to empowering individuals through meaningful volunteer experiences, fostering community engagement, and promoting social responsibility. We connect passionate volunteers with impactful projects focused on education, health, and disaster relief. Our platform matches volunteers with <Link to="#">opportunities</Link> to support educational initiatives, from tutoring and mentoring to organizing workshops.
            </p>
            <p>
              In addition, we mobilize volunteers to assist with disaster relief efforts, providing critical support and aid in times of crisis. While we currently serve the Charlotte area, we have plans to expand our reach and make a difference in communities across other states in the near future.
            </p>
            <Link to="/volunteer" className="our-work-btn">OPPORTUNITIES</Link> 
          </div>
          <div className="about-us-map">
            <img src="https://unitedwaygreaterclt.org/wp-content/uploads/2022/11/Stocksy_txp68303131zDY300_Large_2908519-sm.png" alt="Map" />
          </div>
        </div>
      </section>

      
      <h2 className="sponsor-title">Our Dedicated Team of Heroes</h2> 

      {/* Invisible Sponsor Slider */}
      <SponsorSlider />
    </div>
  );
}

export default HeroSection;
