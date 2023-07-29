import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dataFetchingComponent from "../components/dataFetchingComponent";
import LoadingComponent from "./loadingComponent";
import ErrorComponent from "./errorComponent";
import ProductPreviewComponent from "./productPreviewComponent";

const ProductCatalogIndexComponent = ({ category }) => {

    const { data, isLoading, error } = dataFetchingComponent(`products/category/${category}?limit=3`);
    const products = data.products;

    if (isLoading) {
        return <LoadingComponent />
    }

    if (error) {
        return <ErrorComponent />
    }

    if (data.length === 0) {
        return (
            <Container fluid>
                <h1>Coming Soon!!!</h1>
            </Container>
        )
    }

    return (
        <Container fluid>
            <Col className="justify-content-center">
                <Row>
                    <h1 className="text-center p-5 text-capitalize">{category}</h1>
                </Row>
                <Row>
                    {
                        products.map((product) => (
                            <ProductPreviewComponent product={product} key={product.id}/>
                        ))
                    }
                </Row>
            </Col>
        </Container>
    )
}

export default ProductCatalogIndexComponent;