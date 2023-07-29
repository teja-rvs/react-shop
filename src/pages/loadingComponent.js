import Container from "react-bootstrap/Container";
import {Spinner} from "react-bootstrap";

const LoadingComponent = () => {
    return (
        <Container fluid>
            <Spinner animation="border"/>
        </Container>
    )
}

export default LoadingComponent;
