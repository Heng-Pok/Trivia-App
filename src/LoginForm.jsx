import React, { useState } from 'react';

function LoginForm(){
    // State to handle form inputs
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default browser submission
        console.log('User Logged In:\n', formData);
        // We can send `formData` to our backend here
    };
    
    return (
        <>
            <h2>Log In Here</h2>
            <form onSubmit={handleSubmit}>
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

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginForm