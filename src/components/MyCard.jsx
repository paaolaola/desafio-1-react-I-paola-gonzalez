import Button from "react-bootstrap/Button";

const MyCard = ({ character }) => {
    return (
        <div className="MyCard">
            <img src={character.image} alt={character.type} />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <Button variant={character.colorButton}>{character.button}</Button>
        </div>
    );
};

export default MyCard;
