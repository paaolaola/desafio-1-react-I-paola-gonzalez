import React from "react";
import Tags from "./Tags";

const MyCard = ({ character }) => {
    return (
        <div className="MyCard">
            <img src={character.image} alt={character.type} />

            <h2>{character.name}</h2>
            <p>{character.description}</p>

            <h3>
                <Tags data={character}></Tags>
            </h3>
        </div>
    );
};

export default MyCard;
