import React from "react";
import "./contact.css"; // Link to the CSS file

function Contact() {
    const projectLeaders = [
        {
            name: "Garret Wilson",
            email: "wsg@arizona.edu",
        },
        {
            name: "Hengsocheat Pok",
            email: "hspok@arizona.edu",
        },
        {
            name: "Dhruvi Rathod",
            email: "dhruvirathod29@arizona.edu",
        },
        {
            name: "Yashi Gupta",
            email: "yashigupta@arizona.edu",
        },
    ];

    return (
        <div className="contact">
            <div className="home-button">
                <a href="/">Home</a>
            </div>
            <h1 className="title">Project Leaders Contact</h1>
            <ul className="contact-list">
                {projectLeaders.map((person, index) => (
                    <li key={index} className="contact-item">
                        <div className="contact-info">
                            <span className="contact-name">{person.name}</span>
                            <span className="contact-email">
                            <a href={`mailto:${person.email}`}>{person.email}</a>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Contact;