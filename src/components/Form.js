import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';


const countryCodes = {
    India: '+91',
    USA: '+1',
    UK: '+44',
    Mexico: '+52',
    Australia: '+61',
    China: '+86'
    // Add more countries and their codes as needed
  };
  
  function Form() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      phone: '',
      country: '',
      city: '',
      pan: '',
      aadhar: '',
    });
  
    const [errors, setErrors] = useState({});
    const [passwordVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false); // Track form submission status
    const navigate = useNavigate();
  
    const validate = () => {
      const newErrors = {};
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const phoneRegex = /^\d{10}$/;
      const panRegex = /^\d{10}$/;
      const aadharRegex = /^\d{12}$/;
  
      if (!formData.firstName.match(/^[A-Z][a-z]*$/)) newErrors.firstName = 'First Name should start with capital letter and contain only alphabets';
      if (!formData.lastName.match(/^[A-Z][a-z]*$/)) newErrors.lastName = 'Last Name should start with capital letter and contain only alphabets';
      if (!formData.username.match(usernameRegex)) newErrors.username = 'Username can only contain letters, numbers, and underscores';
      if (!formData.email.match(emailRegex)) newErrors.email = 'Invalid email address';
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (!passwordRegex.test(formData.password)) {
        newErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character';
      }
      if (!formData.phone.match(phoneRegex)) newErrors.phone = 'Phone number must be 10 digits';
      if (!formData.pan.match(panRegex)) newErrors.pan = 'PAN number must be 10 digits';
      if (!formData.aadhar.match(aadharRegex)) newErrors.aadhar = 'Aadhar number must be 12 digits';
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, phoneCode: countryCodes[value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission success
      setSubmitted(true);
      setTimeout(() => {
        navigate('/success', { state: formData });
      }, 100); // Redirect to success page after 2 seconds (simulated)
    }
  };


  return (
    
    <div>
    {!submitted ? ( // Render form if not submitted
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type={passwordVisible ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
        
        {errors.password && <span>{errors.password}</span>}
      </div>
      
      <div>
        <label>Country</label>
        <select className='grey' name="country" value={formData.country} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          <option value="Mexico">Mexico</option>
          <option value="Australia"> Australia</option>
          <option value="China">China</option>
          
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>Phone Number</label>
        <div style={{ display: 'flex', alignItems: 'center' }} className='code' >
          <input type="text" readOnly value={formData.phoneCode || ''} placeholder="Country Code" style={{ width: '98px', marginLeft: '2px', marginRight: '10px' }} />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
        </div>
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <div>
        <label>City</label>
        <select className='grey' name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Delhi">Delhi</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Jodhpur">Jodhpur</option>
          <option value="Kanpur">Kanpur</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>Pan Number</label>
        <input type="text" name="pan" value={formData.pan} onChange={handleChange} placeholder="Enter your Pan No." />
        {errors.pan && <span>{errors.pan}</span>}
      </div>
      <div>
        <label>Aadhar Number</label>
        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Enter your Aadhar No." />
        {errors.aadhar && <span>{errors.aadhar}</span>}
      </div>
      <button id="sub" type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
    ) : ( // Render success message if submitted
      <div className='succ'>
        <h2>Submitted!! </h2>
        <p>Your form has been submitted successfully.</p>
      </div>
    )}
  </div>
  );
}

export default Form;
