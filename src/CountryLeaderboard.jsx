import { useEffect, useState } from "react";
import "./leaderboard.css";

function CountryLeaderboard() {
  const [countryLeaderboardData, setCountryLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryLeaderboard = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://137.184.116.179:3000/countryLeaderboard"); // Replace with your server address
        if (!response.ok) {
          throw new Error(`Error fetching country leaderboard: ${response.statusText}`);
        }
        const data = await response.json();
        setCountryLeaderboardData(data);
      } catch (err) {
        console.error("Failed to fetch country leaderboard data:", err);
        setError("Could not load country leaderboard data.");
      } finally {
        setLoading(false);
      }
    };
    fetchCountryLeaderboard();
  }, []);


  return (
    <>
      <div className="home-button">
        <a href="/">Home</a>
      </div>
      <h2> Country Leaderboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ol className="leaderboard">
          {countryLeaderboardData.map((entry, index) => (
            <li key={entry._id} className="leaderboard-item">
              {index + 1}.<strong>{entry.country}</strong>: {entry.totalScore} points
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default CountryLeaderboard;