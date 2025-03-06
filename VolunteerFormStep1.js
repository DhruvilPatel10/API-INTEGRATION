import React, { useState } from 'react';
import './VolunteerForm.css';
import logo from './assets/keelworks-logo.png';
import HeaderBackgroundImage from './assets/nav_background1.jpg';
const VolunteerForm = ({ formData, setFormData, onNext }) => {
 

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData, // ✅ Uses previous state correctly
    [name]: value,
  }));
};
;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Step 1 Form Data:', formData);
    onNext(); // Move to Step 2
  };

  return (
    <div className="form-container">
      {/* HEADER SECTION */}
      <header className="form-header">
        <img src={logo} alt="KeelWorks Logo" className="header-logo" />
        <button className="donate-button">Donate</button>
        <button className="login-button">Login</button>
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      <div className="form-content">
        <div className='header'>
          <div className="headerText">
            <h1>KeelWorks Volunteer Sign Up</h1>
            <p className="description">
              Join our dedicated team of volunteers and make a lasting impact in our community.
            </p>
          </div>
          <img className="headerBgImg" src={HeaderBackgroundImage} alt="Keelworks Image" />
        </div>
        {/* <div className="steps">
          <span className="step active">1</span>
          <div className="step-line"></div> 
          <span className="step">2</span>
          <div className="step-line"></div> 
          <span className="step">3</span>
          <div className="step-line"></div> 
          <span className="step">4</span>
          <div className="step-line"></div>
          <span className="step">5</span>
        </div> */}
        <div className="steps">
          <div className="step-container">
            <span className="step active">1</span>
            <span className="step-label">Personal Information</span>
          </div>
          <div className="step-line"></div>

          <div className="step-container">
            <span className="step">2</span>
            <span className="step-label">Education and Experience</span>
          </div>
          <div className="step-line"></div>

          <div className="step-container">
            <span className="step">3</span>
            <span className="step-label">Role and Availability</span>
          </div>
          <div className="step-line"></div>

          <div className="step-container">
            <span className="step">4</span>
            <span className="step-label">Additional Information</span>
          </div>
          <div className="step-line"></div>

          <div className="step-container">
            <span className="step">5</span>
            <span className="step-label">Identification</span>
          </div>
        </div>




        <p className="step-description">Step 1: Add your personal details below</p>

        <form onSubmit={handleSubmit}>
          {/* First Name & Middle Name */}
          <div className="form-group">
            <label>
              First Name*
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>

            <label>
              Middle Name (optional)
              <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Grace" />
            </label>
          </div>

          <label>
            Last Name*
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
          </label>

          <label>
            Email Address*
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="janedoe@gmail.com" />
          </label>

          <label>
            Phone Number*
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder="+1 1234567890" />
          </label>

          <label>
            Phone Type*
            <select name="phoneType" value={formData.phoneType} onChange={handleChange} required>
              <option value="Home">Home</option>
              <option value="Mobile">Mobile</option>
              <option value="Work">Work</option>
            </select>
          </label>

          <label>
            Address Line 1*
            <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required placeholder="123 Main Street" />
          </label>

          <label>
            Address Line 2 (optional)
            <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} placeholder="Apartment, suite number, etc" />
          </label>

          <label>
            City*
            <select name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Select City</option>
              {['Indianapolis', 'New York', 'Los Angeles', 'Chicago'].map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </label>

          <label>
            State*
            <select name="state" value={formData.state} onChange={handleChange} required>
              {['IN', 'NY', 'CA', 'IL'].map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </label>

          <label>
            Zipcode*
            <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} required placeholder="01234" />
          </label>

          <label>
            Country*
            <select name="country" value={formData.country} onChange={handleChange} required>
              {['United States', 'India', 'Canada', 'Australia'].map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </label>

          <label className="checkbox-label">
            <input type="checkbox" name="isCurrentCountrySame" checked={formData.isCurrentCountrySame} onChange={handleChange} />
            Current country is same as home country?
          </label>

          <label>
            Home Country*
            <select name="homeCountry" value={formData.homeCountry} onChange={handleChange} required disabled={formData.isCurrentCountrySame}>
              {['United States', 'India', 'Canada', 'Australia'].map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </label>

          <label>
            Time Zone*
            <select name="timeZone" value={formData.timeZone} onChange={handleChange} required>
              {['EDT', 'IST', 'PST', 'CST'].map(zone => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </label>

          <label>
            Profile Picture (optional)
            <input type="file" name="profilePicture" onChange={handleChange} accept=".png, .jpg, .jpeg" />
          </label>
          <p className="file-restriction">Maximum size: 2MB, file types allowed: PNG, JPEG</p>

          {/* Next Button to Move to Step 2 */}
          {/* <button type="submit" className="next-button">Next</button> */}
          <button
            type="submit"
            className="next-button"
            style={{ float: 'right' }}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
