import React, { useEffect, useState } from 'react';
import "../Styles/Volunteering.css";

function Volunteers({ volunteersEndpoint }) {
    const [volunteers, setVolunteers] = useState([]);
    const [filteredVolunteers, setFilteredVolunteers] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
 

    useEffect(() => {
        fetchVolunteers(volunteersEndpoint);
    }, [volunteersEndpoint]);

    const fetchVolunteers = () => {
        fetch(`https://capstone2-bofa-backend.vercel.app/Volunteering`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setVolunteers(data);
                applyFilters(data);
            })
            .catch(err => console.error('Error fetching volunteers:', err));
    };

    useEffect(() => {
        applyFilters(volunteers);
    }, [volunteers, filterName, filterCategory]);

    function applyFilters(volunteers) {
        let filtered = volunteers.filter(volunteer => {
            if (filterName && !volunteer.name.toLowerCase().includes(filterName.toLowerCase())) {
                return false;
            }
            else if (filterCategory && volunteer.category !== filterCategory) {
                return false;
            }
            return true;
        });
        setFilteredVolunteers(filtered);
    };

    function clearFilters() {
        setFilterName('');
        setFilterCategory('');
    };

    return (
        <div className="volunteers-container">
            <h1 className="volunteers-title">Start Your Service Story</h1>

            {/* Filters */}
            <div className="volunteers-filters">
                <div className="filter-item">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={filterName} 
                        onChange={e => setFilterName(e.target.value)} 
                        className="filter-input" 
                        PlaceHolder="Search by keyword.... "
                    />
                </div>
                <div className="filter-item">
                    <label>Category:</label>
                    <select 
                        value={filterCategory} 
                        onChange={e => setFilterCategory(e.target.value)} 
                        className="filter-input"
                    >
                        <option value="">All Categories</option>
                        <option value="education">education</option>
                        <option value="health">health</option>
                        <option value="disaster">disaster</option>
                    </select>
                </div>
                <button 
                    onClick={clearFilters} 
                    className="clear-filters-button"
                >
                    Clear Filters
                </button>
            </div>

            

            {/* Volunteers Grid */}
            <div className="volunteers-grid">
                {filteredVolunteers.map((volunteer, index) => (
                    <div key={index} className="volunteer-card">
                        <div className="volunteer-card-content">
                            <img
                                src={volunteer.image_path}
                                alt="volunteer"
                                className="volunteer-image"
                            />
                            <div className="volunteer-details">
                                <h2 className="volunteer-name">{volunteer.name}</h2>
                                <p className="volunteer-place">{volunteer.location}</p> 
                                <p className="volunteer-date">{volunteer.start_time} PM</p>
                                <p className="volunteer-category">{volunteer.category}</p>
                                {/* <p className="volunteer-type">{volunteer.type}</p> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
// testing
export default Volunteers;
