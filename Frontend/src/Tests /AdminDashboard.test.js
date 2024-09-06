import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminDashboard from '../Pages/AdminDashboard'; 

describe('AdminDashboard Component', () => {
  // test('renders the Total Volunteers chart', () => {
  //   render(<AdminDashboard />);
  //   const totalVolunteersHeading = screen.getByText(/Total Volunteers/i);
  //   const chartImage = screen.getByAltText(/Total Volunteers chart/i);
    
  //   expect(totalVolunteersHeading).toBeInTheDocument();
  //   expect(chartImage).toBeInTheDocument();
  // });

  test('renders the Hours Volunteered card', () => {
    render(<AdminDashboard />);
    const hoursVolunteeredHeading = screen.getByText(/Hours Volunteered/i);
    const circleGraph = screen.getByAltText(/circle graph/i);

    expect(hoursVolunteeredHeading).toBeInTheDocument();
    expect(circleGraph).toBeInTheDocument();
  });

  test('renders the Visitors This Week card', () => {
    render(<AdminDashboard />);
    const visitorsThisWeekHeading = screen.getByText(/Visitors This Week/i);
    const lineGraph = screen.getByAltText(/line graph/i);

    expect(visitorsThisWeekHeading).toBeInTheDocument();
    expect(lineGraph).toBeInTheDocument();
  });

  test('renders the Events Attended card', () => {
    render(<AdminDashboard />);
    const eventsAttendedHeading = screen.getByText(/Events Attended/i);
    const educationEvent = screen.getByText(/Education : 56/i);
    const healthEvent = screen.getByText(/Health : 70/i);
    const disasterEvent = screen.getByText(/Disaster Relief : 115/i);

    expect(eventsAttendedHeading).toBeInTheDocument();
    expect(educationEvent).toBeInTheDocument();
    expect(healthEvent).toBeInTheDocument();
    expect(disasterEvent).toBeInTheDocument();
  });

  test('renders the Donation of the Month card', () => {
    render(<AdminDashboard />);
    const donationOfTheMonthHeading = screen.getByText(/Donation of the Month/i);
    const donationImage = screen.getByAltText(/Donation of the month/i);

    expect(donationOfTheMonthHeading).toBeInTheDocument();
    expect(donationImage).toBeInTheDocument();
  });

  test('renders the Donations by Category section', () => {
    render(<AdminDashboard />);
    const donationsByCategoryHeading = screen.getByText(/Donations by Category/i);
    const donationGraph = screen.getByAltText(/donation graph/i);

    expect(donationsByCategoryHeading).toBeInTheDocument();
    expect(donationGraph).toBeInTheDocument();
  });
});
