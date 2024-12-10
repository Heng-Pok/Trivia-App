import React, { useState } from 'react';

function SignupForm(){
    // State to handle form inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        country: '',
        bio: '',
    });

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://137.184.116.179:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            alert("User registered successfully!");
            console.log(data);
          } else {
            const error = await response.json();
            alert(error.error || "Failed to register");
          }
        } catch (err) {
          console.error("Error during registration:", err);
        }
      };
    
    return (
        <>
            <h2>Sign Up Here</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
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

                <label htmlFor="bio">Bio:</label><br />
                <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    cols="50"
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SignupForm