Design a Login Validation Form to check the errors, valid user inputs

Here is the validate code function snippet shows checks of each field -

      const newErrors = {};
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const phoneRegex = /^\d{10}$/;
      const panRegex = /^\d{10}$/;
      const aadharRegex = /^\d{12}$/;
     

Screenshots - 
![Screenshot (228)](https://github.com/Sweetynehra/Validation_Form/assets/130247953/788e9a0a-acaf-485c-b887-985fdbca6573)
![Screenshot (229)](https://github.com/Sweetynehra/Validation_Form/assets/130247953/6b549713-d0d4-4fbb-a2d0-e103627c5327)
![Screenshot (230)](https://github.com/Sweetynehra/Validation_Form/assets/130247953/13a7ab9e-d4d5-4c07-af5f-483464578fc1)
