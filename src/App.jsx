import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.jsx"; // Ensure this path is correct
import MainPage from "./MainPage.jsx";
import SignupForm from "./SignupForm.jsx";
import GameScreen from "./GameScreen.jsx";
import {useEffect, useState} from "react";
import Leaderboard from "./Leaderboard.jsx";
import CountryLeaderboard from "./CountryLeaderboard.jsx";
import Help from "./Help.jsx";

function App() {
    const [currentUser, setCurrentUser] = useState(() => {
        // Load from localStorage on initialization
        return localStorage.getItem("currentUser") || null;
    });

    useEffect(() => {
        // Persist to localStorage whenever currentUser changes
        if (currentUser) {
            localStorage.setItem("currentUser", currentUser);
        } else {
            localStorage.removeItem("currentUser");
        }
    }, [currentUser]);

    return (
        <Routes>
            <Route path="/" element={<MainPage setUser={setCurrentUser} user={currentUser} />} />
            <Route path="/login" element={<LoginForm setUser={setCurrentUser} />} />
            <Route path="/signup" element={<SignupForm setUser={setCurrentUser} />} />
            <Route path="/gamescreen" element={<GameScreen user={currentUser} />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/countryLeaderboard" element={<CountryLeaderboard />} />
            <Route path="/help" element={<Help />} />
        </Routes>
    );
}

export default App;
