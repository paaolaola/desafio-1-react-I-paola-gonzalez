import Badge from "react-bootstrap/Badge";

function Tags({ data }) {
    return (
        <Badge type="button" className={data.color}>
            {data.text}
        </Badge>
    );
}

export default Tags;
