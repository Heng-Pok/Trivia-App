import profilePic from "./assets/owl (3).jpg"

// eslint-disable-next-line react/prop-types
function AnimalCard( {onClick} ){
    return (
        <div className="card" onClick={onClick}> 
            <img src = {profilePic} alt = "owl-picture" />
            <h2>Topic: Animal Trivia</h2>
            <p><b>Description:</b> Animal related questions concerning general animals, mammals, reptiles and aquatic animals.</p>
        </div>
    )
}


export default AnimalCard
