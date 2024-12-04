import AnimalCard from "./AnimalCard"
import CultureCard from "./CultureCard"
import HistoryCard from "./HistoryCard"
import PlantCard from "./PlantCard"

import { useNavigate } from "react-router-dom";

function Body(){

    const navigate = useNavigate();

    const handleCardClick = (cardType) => {
        navigate("/gamescreen", { state: { cardType } });
    };

    return (
    <div className="card-selection">
        <AnimalCard onClick={() => handleCardClick("animal")}/>
        <HistoryCard onClick={() => handleCardClick("history")}/>
        <CultureCard onClick={() => handleCardClick("culture")}/>
        <PlantCard onClick={() => handleCardClick("plant")}/>
    </div>
    )

}

export default Body