import Button from "react-bootstrap/esm/Button";
import Tags from "./Tags";

const MyCard = ({ character }) => {
    return (
        <div className="MyCard">
            <img src={character.image} alt={character.type} />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <Button variant={character.color}>{character.text}</Button>
        </div>
    );
};

export default MyCard;
