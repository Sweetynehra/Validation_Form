Design a Login Validation Form to check the errors, valid user inputs

Here is the validate code function -
/////
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
////

Screenshots - 
![Screenshot (228)](https://github.com/Sweetynehra/Validation_Form/assets/130247953/788e9a0a-acaf-485c-b887-985fdbca6573)
![Screenshot (229)](https://github.com/Sweetynehra/Validation_Form/assets/130247953/6b549713-d0d4-4fbb-a2d0-e103627c5327)
![Screenshot (230)](https://github.com/Sweetynehra/Validation_Form/assets/130247953/13a7ab9e-d4d5-4c07-af5f-483464578fc1)
