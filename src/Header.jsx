import LoginButton from "./LoginButton.jsx";
import SignupButton from "./SignupButton.jsx";
import LogoutButton from "./LogoutButton.jsx";
import "./index.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ user, setUser }) {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const fetchUsername = async () => {
            if (!user) {
                setUsername(null); // Clear username if no user is logged in
                return;
            }

            try {
                console.log("Fetching username for user:", user);
                const response = await fetch(`http://137.184.116.179:3000/username?email=${encodeURIComponent(user)}`);

                if (response.ok) {
                    const fetchedUsername = await response.text(); // Adjust if the server returns JSON
                    setUsername(fetchedUsername);
                } else {
                    console.error("Failed to fetch username");
                }
            } catch (error) {
                console.error("Error fetching username:", error);
            }
        };

        fetchUsername();
    }, [user]); // Re-run effect whenever the `user` prop changes

    return (
        <>
            <h1>Trivia Game</h1>
            <span>Signed in as: {username || "Guest"}</span> {/* Default to "Guest" if not signed in */}
            <nav>
                <ul className="list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/countryLeaderboard">Country Leaderboard</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </nav>
            <div className="auth-buttons">
                {user ? (
                    // Show Logout button if user is signed in
                    <LogoutButton setUser={setUser} />
                ) : (
                    // Show Login and Signup buttons if user is not signed in
                    <>
                        <LoginButton />
                        <SignupButton />
                    </>
                )}
            </div>
            <hr />
        </>
    );
}

export default Header;
