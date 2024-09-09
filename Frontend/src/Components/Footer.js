import "../Styles/Footer.css";
import React, { useState } from "react";
import axios from "axios";

function Footer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!consent) {
      setMessage("You must consent to subscribe.");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8081/subscribe", {
        firstName,
        lastName,
        email,
      });
      setMessage(response.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setConsent(false);
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="footer">
      <div className="image-overlay-section">
        <div className="main-image-container">
          <img
            src="https://www.unitedwayofyc.org/wp-content/uploads/united-way-of-york-team-work-1500x1000.jpg"
            alt="Main Background"
            className="main-image"
          />
          <div className="overlay-images">
            <div className="overlay-image-container">
              <img
                src="https://www.unitedwayofyc.org/wp-content/uploads/advocate.png"
                alt="Overlay 1"
                className="overlay-image"
              />
              <p className="overlay-text">ADVOCATE</p>
            </div>
            <div className="overlay-image-container">
              <img
                src="https://www.unitedwayofyc.org/wp-content/uploads/give.png"
                alt="Overlay 2"
                className="overlay-image"
              />
              <p className="overlay-text">GIVE</p>
            </div>
            <div className="overlay-image-container">
              <img
                src="https://www.unitedwayofyc.org/wp-content/uploads/volunteer.png"
                alt="Overlay 3"
                className="overlay-image"
              />
              <p className="overlay-text">VOLUNTEER</p>
            </div>
          </div>
          <p className="main-text">MAKE A DIFFERENCE IN MECK COUNTY</p>
        </div>
      </div>

      <div className="newsletter-section">
        <h4>STAY CONNECTED</h4>
        <form onSubmit={handleSubscribe}>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              aria-label="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              aria-label="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="consent-group">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            <label htmlFor="consent">
              I consent to receive newsletters
              <br /> and promotional emails.
            </label>
          </div>
          <button className="submit-button" type="submit" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {message && (
          <p className="message" role="alert">
            {message}
          </p>
        )}
      </div>

      <div className="sb-footer-section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>INFORMATION</h4>
            <a href="/employer">
              <p>Home</p>
            </a>
            <a href="/home">
              <p>Get To Know Us</p>
            </a>
            <a href="/individual">
              <p>Volunteer</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>RESOURCE</h4>
            <a href="/employer">
              <p>Resources Center</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>HELP</h4>
            <a href="/home">
              <p>About</p>
            </a>
            <a href="/volunteer">
              <p>Volunteer</p>
            </a>
            <a href="/volunteer">
              <p>Get Involved</p>
            </a>
            <a href="/donation">
              <p>Donation</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>CONTACT US</h4>
            <div className="socialmedia">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="sb-footer-btm">
          <p>
            © 2024 All Rights Reserved. Designed and Developed by HandsOnHeros.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
