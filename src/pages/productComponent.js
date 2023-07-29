import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dataFetchingComponent from "../components/dataFetchingComponent";
import LoadingComponent from "./loadingComponent";
import ErrorComponent from "./errorComponent";
import ProductImageComponent from "./productImageComponent";
import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/updateCart";

const ProductComponent = () => {
    const urlParams = useParams();
    const id = urlParams.id;

    const { data, isLoading, error } = dataFetchingComponent(`products/${id}`);

    const dispatcher = useDispatch()

    if(isLoading){
        return <LoadingComponent />
    }

    if (error) {
        return <ErrorComponent />
    }

    return (
        <Container fluid className="m-5">
            <Row>
                <Col>
                    <ProductImageComponent images={ data.images }/>
                </Col>
                <Col>
                    <p className="h3">{ data.brand } { data.title }</p>
                    <p className="h6 d-flex">
                        Ratings:
                        <div className="text-success" >
                            { data.rating }
                        </div>
                        / 5
                    </p>
                    <Container className="d-flex">
                        <p className="h2">${ data.price }</p>
                        <div className="mt-auto">
                            <p className="h6 p-3 text-success">{ Math.round(data.discountPercentage) }% off</p>
                        </div>
                    </Container>
                    <p>{ data.description }</p>
                    <Button onClick={() => dispatcher(addToCart(data))}>
                        Add to Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}


export default ProductComponent;