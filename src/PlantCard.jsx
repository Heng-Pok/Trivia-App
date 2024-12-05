import profilePic from "./assets/plants.jpg"

function PlantCard( {onClick} ){
    return (
        <div className="card" onClick={onClick}>
            <img src = {profilePic} alt = "plants-picture" />
            <h2>Topic: Plant Studies</h2>
            <p><b>Difficulty:</b> Hard</p>
            <p><b>Description:</b> Questions about all kinds of plants (their appearances, functions, etc.).</p>
        </div>
    )
}


export default PlantCard