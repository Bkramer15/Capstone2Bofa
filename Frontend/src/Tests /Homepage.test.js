import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Homepage from '../Pages/HomePage'; 

describe('Homepage Component', () => {
  test('renders the hero section with correct text', () => {
    render(
      <Router>
        <Homepage />
      </Router>
    );
    
    const heroHeading = screen.getByText(/HANDS ON HEROES/i);
    const heroSubheading = screen.getByText(/YOUR PATH TO MAKING A DIFFERENCE/i);
    const learnMoreButton = screen.getByRole('link', { name: /Learn More/i });

    expect(heroHeading).toBeInTheDocument();
    expect(heroSubheading).toBeInTheDocument();
    expect(learnMoreButton).toBeInTheDocument();
  });

  test('renders the About Us section with correct text', () => {
    render(
      <Router>
        <Homepage />
      </Router>
    );

    const aboutUsHeading = screen.getByText(/About Us/i);
    const whatWeDoHeading = screen.getByText(/WHAT EXACTLY DO WE DO\?/i);
    const aboutUsDescription1 = screen.getByText(/At HandsOn Heroes, based in Charlotte/i);
    const aboutUsDescription2 = screen.getByText(/In addition, we mobilize volunteers/i);

    // Use getAllByRole to target specific "OPPORTUNITIES" links
    const opportunitiesLink = screen.getAllByRole('link', { name: /OPPORTUNITIES/i })[1]; // Select the correct one by index
    const mapImage = screen.getByAltText(/Map/i);

    expect(aboutUsHeading).toBeInTheDocument();
    expect(whatWeDoHeading).toBeInTheDocument();
    expect(aboutUsDescription1).toBeInTheDocument();
    expect(aboutUsDescription2).toBeInTheDocument();
    expect(opportunitiesLink).toBeInTheDocument();
    expect(mapImage).toBeInTheDocument();
  });

  test('renders the sponsor slider and team heading', () => {
    render(
      <Router>
        <Homepage />
      </Router>
    );

    const sponsorTitle = screen.getByText(/Our Dedicated Team of Heroes/i);

    const sponsorSlider = screen.getByText(/Our Dedicated Team of Heroes/i);

    expect(sponsorTitle).toBeInTheDocument();
    expect(sponsorSlider).toBeInTheDocument();
  });
});
