import { useEffect, useState } from "react";
import "./leaderboard.css";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://137.184.116.179:3000/leaderboard");
        if (!response.ok) {
          throw new Error(`Error fetching leaderboard: ${response.statusText}`);
        }
        const data = await response.json();
        setLeaderboardData(data);
      } catch (err) {
        console.error("Failed to fetch leaderboard data:", err);
        setError("Could not load leaderboard data.");
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <>
      <div className="home-button">
        <a href="/">Home</a>
      </div>
      
      <h2>Leaderboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ol className="leaderboard">
          {leaderboardData.map((entry, index) => (
            <li key={entry._id} className="leaderboard-item">
              {index + 1}. <strong>{entry.username}</strong>: {entry.score} points
            </li>
          ))}
        </ol>


      )}
    </>
  );
}

export default Leaderboard;