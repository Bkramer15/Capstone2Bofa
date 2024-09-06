import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import VolunteerPage from '../Pages/VolunteerPage';

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
    render(<VolunteerPage />);

    const educationCategory = screen.getAllByText(/Education/i)[0];
    const healthCategory = screen.getAllByText(/Health/i)[0];
    const disasterReliefCategory = screen.getAllByText(/Disaster Relief/i)[0];

    expect(educationCategory).toBeInTheDocument();
    expect(healthCategory).toBeInTheDocument();
    expect(disasterReliefCategory).toBeInTheDocument();
  });

  test('renders the impact statements carousel', () => {
    render(<VolunteerPage />);

    const testimonial1 = screen.getByText((content, element) =>
      content.includes("Volunteering with Hands on Heroes has been life-changing") &&
      element.tagName.toLowerCase() === 'p'
    );

    const testimonial2 = screen.getByText((content, element) =>
      content.includes("I’ve met amazing people and learned so much") &&
      element.tagName.toLowerCase() === 'p'
    );

    const testimonial3 = screen.getByText((content, element) =>
      content.includes("Every moment spent volunteering has been rewarding") &&
      element.tagName.toLowerCase() === 'p'
    );

    expect(testimonial1).toBeInTheDocument();
    expect(testimonial2).toBeInTheDocument();
    expect(testimonial3).toBeInTheDocument();
  });
});
