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


  //This test is checking to make sure that the hours volunteered cards are going to load on the admin dashboard page
  test('renders the Hours Volunteered card', () => {
    render(<AdminDashboard />);
    const hoursVolunteeredHeading = screen.getByText(/Hours Volunteered/i);//this is checking for text Hours volunteered
    const circleGraph = screen.getByAltText(/circle graph/i);


    //THis test is checking to make sure that the text thats being tested is inside the document
    expect(hoursVolunteeredHeading).toBeInTheDocument();
    expect(circleGraph).toBeInTheDocument();
  });


  test('renders the Visitors This Week card', () => {
    render(<AdminDashboard />); //This test is checking to make sure that the admin Dashboard commponent is loading
    const visitorsThisWeekHeading = screen.getByText(/Visitors This Week/i);
    const lineGraph = screen.getByAltText(/line graph/i);

    expect(visitorsThisWeekHeading).toBeInTheDocument();
    expect(lineGraph).toBeInTheDocument();
  });


  //Thisn test is checking to make sure that events attended card has rendered in the admin dashboard componenet
  test('renders the Events Attended card', () => {
    render(<AdminDashboard />); //This test is checking to make sure that the adminDashboard componenet is loading
    const eventsAttendedHeading = screen.getByText(/Events Attended/i);
    const educationEvent = screen.getByText(/Education : 56/i);
    const healthEvent = screen.getByText(/Health : 70/i);
    const disasterEvent = screen.getByText(/Disaster Relief : 115/i);


    //This block of test are making sure that the certain text are found inside the adminDashboard doucument
    expect(eventsAttendedHeading).toBeInTheDocument();
    expect(educationEvent).toBeInTheDocument();
    expect(healthEvent).toBeInTheDocument();
    expect(disasterEvent).toBeInTheDocument();
  });


  //This test is making sure that the donation of the month card has rendered on the adminDashborad component
  test('renders the Donation of the Month card', () => {
    render(<AdminDashboard />);//This will test the componenet by seeing if it will render the adminDashboard component
    const donationOfTheMonthHeading = screen.getByText(/Donation of the Month/i); //This is checking if the text is found on the page
    const donationImage = screen.getByAltText(/Donation of the month/i);


    //This test is checking if these texts will be found inside the document
    expect(donationOfTheMonthHeading).toBeInTheDocument();
    expect(donationImage).toBeInTheDocument();
  });

  test('renders the Donations by Category section', () => {
    render(<AdminDashboard />); //This will test the component by seeing if it will render the adminDashbord component
    const donationsByCategoryHeading = screen.getByText(/Donations by Category/i);
    const donationGraph = screen.getByAltText(/donation graph/i);

    expect(donationsByCategoryHeading).toBeInTheDocument();
    expect(donationGraph).toBeInTheDocument();
  });
});
