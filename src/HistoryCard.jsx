import profilePic from "./assets/American-Revolution(3).jpg"

// eslint-disable-next-line react/prop-types
function HistoryCard( {onClick} ){

    return (
        <div className="card" onClick={onClick}>
            <img src={profilePic} alt="history-picture" />
            <h2>Topic: History Trivia</h2>
            <p><b>Description:</b> History related questions concerning historical discoveries, historical figures, historical eras, and world history</p>
        </div>
    )
}

export default HistoryCard
