import Badge from "react-bootstrap/Badge";

function Tags({ data }) {
    return <Badge className={data.color}>{data.text}</Badge>;
}

export default Tags;
