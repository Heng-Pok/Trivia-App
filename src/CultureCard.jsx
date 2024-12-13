import profilePic from "./assets/culture.jpg"

function CultureCard( {onClick} ){

    return (
        <div className="card" onClick={onClick}> 
            <img src = {profilePic} alt = "cultures-picture" />
            <h2>Topic: Cultural Studies</h2>
            <p><b>Difficulty:</b> Medium</p>
            <p><b>Description:</b> Comparing and contrasting different cultures.</p>
        </div>
    )
}

export default CultureCard