import React, { useState } from 'react';

function LoginForm(){
    // State to handle form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        country: '',
        message: '',
        subscribe: false,
    });

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default browser submission
        console.log('Form Data:', formData);
        // We can send `formData` to our backend here
    };
    
    return (
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            <br /><br />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
            />
            <br /><br />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <br /><br />

            <p>Gender:</p>
            <label>
                <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                />
                Male
            </label>
            <label>
                <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                />
                Female
            </label>
            <br /><br />

            <label htmlFor="country">Country:</label>
            <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
            >
                <option value="">Select a country</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
            </select>
            <br /><br />

            <label htmlFor="message">Message:</label><br />
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                cols="50"
            />
            <br /><br />

            <label>
                <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                />
                Subscribe to Newsletter
            </label>
            <br /><br />

            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm