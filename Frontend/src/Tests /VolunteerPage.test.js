import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import VolunteerPage from '../Pages/VolunteerPage';



//This test is checking the volunteer componenet to see if the specified text is found in the page
describe('VolunteerPage Component', () => {
  test('renders the hero section with correct text', () => {
    render(<VolunteerPage />);
    const heroHeading = screen.getByText(/Make a difference today/i);
    const heroDescription = screen.getByText(/Find volunteer opportunities that match your passion and location/i);
    expect(heroHeading).toBeInTheDocument();
    expect(heroDescription).toBeInTheDocument();
  });

  
  test('renders the VolunteerMatch section', () => {
    render(<VolunteerPage />);
    const volunteerMatchHeading = screen.getByText(/Hands on Heroes transforms volunteering/i);
    const volunteerMatchDescription = screen.getByText(/The power of collaboration truly makes a difference/i);
    expect(volunteerMatchHeading).toBeInTheDocument();
    expect(volunteerMatchDescription).toBeInTheDocument();
  });

  test('renders the Categories section', () => {
    render(<VolunteerPage />);//rendering the volunteering component and checking if the page is going to load

    const educationCategory = screen.getAllByText(/Education/i)[0];
    const healthCategory = screen.getAllByText(/Health/i)[0];
    const disasterReliefCategory = screen.getAllByText(/Disaster Relief/i)[0];

    //This is testing to making sure that these three categries are found inside the document 
    expect(educationCategory).toBeInTheDocument();
    expect(healthCategory).toBeInTheDocument();
    expect(disasterReliefCategory).toBeInTheDocument();
  });

  test('renders the impact statements carousel', () => {
    render(<VolunteerPage />);//This test is making sure that the impact carousel is being rendered on the Volunteeerig page 


    //This test is checking if the certain text along with the letter P is found inside the testimonial 1
    const testimonial1 = screen.getByText((content, element) =>
      content.includes("Volunteering with Hands on Heroes has been life-changing") &&
      element.tagName.toLowerCase() === 'p'
    );

    //This test is checking if this certain text along with the certain letter P id found inside testimonial 2
    const testimonial2 = screen.getByText((content, element) =>
      content.includes("I’ve met amazing people and learned so much") &&
      element.tagName.toLowerCase() === 'p'
    );

//This test is checking if the certain text along with the certain letter P is found inside testmonial 3
    const testimonial3 = screen.getByText((content, element) =>
      content.includes("Every moment spent volunteering has been rewarding") &&
      element.tagName.toLowerCase() === 'p'
    );

    //These tests are making sure and checking if these threee testimonials will be in the document
    expect(testimonial1).toBeInTheDocument();
    expect(testimonial2).toBeInTheDocument();
    expect(testimonial3).toBeInTheDocument();
  });
});
