import profilePic from "./assets/owl (3).jpg"

function AnimalCard( {onClick} ){
    return (
        <div className="card" onClick={onClick}> 
            <img src = {profilePic} alt = "owl-picture" />
            <h2>Topic: Animal Studies</h2>
            <p><b>Difficulty:</b> Medium</p>
            <p><b>Description:</b> Animal related questions including but not limited to land animals, marine life, domestic animals and wild animals.</p>
        </div>
    )
}


export default AnimalCard