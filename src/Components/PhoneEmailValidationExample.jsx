import React, { useState } from 'react';

const PhoneEmailValidationExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Validate the input
    const isValid = validateInput(value);
    setError(isValid ? '' : 'Invalid phone number or email');
  };

  const validateInput = (value) => {
    // Regular expression for 10-digit phone number
    const phoneRegex = /^\d{10}$/;

    // Regular expression for email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if it's a valid phone number or email
    return phoneRegex.test(value) || emailRegex.test(value);
  };

  return (
    <div>
      <label htmlFor="inputField">Phone Number or Email:</label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleChange}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default PhoneEmailValidationExample;
