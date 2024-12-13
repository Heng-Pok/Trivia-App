import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginForm( {setUser} ){
    // State to handle form inputs
    const navigate = useNavigate();
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
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://137.184.116.179:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            alert("User logged in successfully!");
            console.log("Login Successful: ", data);
            setUser(formData.email);
            navigate('/');
          } else {
            const error = await response.json();
            alert(error.error || "Failed to log in");
          }
        } catch (err) {
          console.error("Error during registration:", err);
        }
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
