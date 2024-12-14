import profilePic from "./assets/plant.jpg"

// eslint-disable-next-line react/prop-types
function PlantCard( {onClick} ){
    return (
        <div className="card" onClick={onClick}>
            <img src = {profilePic} alt = "plants-picture" />
            <h2>Topic: Plants</h2>
            <p><b>Description:</b> Plant related questions concerning flowers, trees, edible plants, and plant anatomy.</p>
        </div>
    )
}


export default PlantCard
