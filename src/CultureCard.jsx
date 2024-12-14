import profilePic from "./assets/culture.jpg"

// eslint-disable-next-line react/prop-types
function CultureCard( {onClick} ){

    return (
        <div className="card" onClick={onClick}> 
            <img src = {profilePic} alt = "cultures-picture" />
            <h2>Topic: Cultural Trivia</h2>
            <p><b>Description:</b> Culture related questions concerning language, art, literature, and pop culture.</p>
        </div>
    )
}

export default CultureCard
