import React from 'react';
import { useLocation } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const formData = location.state;

  return (
    <div>
      <h1>Form Submission Successful</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneCode} {formData.phone}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>Pan No.: {formData.pan}</p>
      <p>Aadhar No.: {formData.aadhar}</p>
    </div>
  );
}

export default Success;
