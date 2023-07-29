import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {useDispatch} from "react-redux";
import Button from "react-bootstrap/Button";
import {addToCart} from "../redux/updateCart";

const ProductPreviewComponent = ({ product }) => {

    const dispatch = useDispatch();

    return (
        <Col>
            <Card bg="light" className="text-dark">
                <Card.Header className="text-center">
                    <Card.Title>{ product.title }</Card.Title>
                    <Card.Subtitle>${ product.price }</Card.Subtitle>
                </Card.Header>
                <Card.Img src={ product.thumbnail } height="300"/>
                <Card.Footer className="d-flex justify-content-around">
                    <Button variant="success" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
                    <Button variant="info" href={`/products/${product.id}`}>View Details</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default ProductPreviewComponent;