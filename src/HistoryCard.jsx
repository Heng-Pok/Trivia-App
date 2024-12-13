import profilePic from "./assets/American-Revolution(3).jpg"

function HistoryCard( {onClick} ){

    return (
        <div className="card" onClick={onClick}>
            <img src={profilePic} alt="history-picture" />
            <h2>Topic: World History</h2>
            <p><b>Difficulty:</b> Hard</p>
            <p><b>Description:</b> From the beginning of the Roman Empire to the Cold War</p>
        </div>
    )
}

export default HistoryCard