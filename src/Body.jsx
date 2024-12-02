import AnimalCard from "./AnimalCard"
import CultureCard from "./CultureCard"
import HistoryCard from "./HistoryCard"
import PlantCard from "./PlantCard"

function Body(){

    return(
        <div className = "card-selection">
            <AnimalCard></AnimalCard>
            <HistoryCard/>
            <CultureCard/>
            <PlantCard/>
        </div>
    )
}

export default Body