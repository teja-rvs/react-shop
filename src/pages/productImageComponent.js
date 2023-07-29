import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import ProductCatalogIndexComponent from "./productCatalogIndexComponent";

const ProductImageComponent = (props) => {
    const images = props.images;
    const [selectedImage, setSelectedImage] = useState('');

    if(!images){
        return (
            <Container fluid>
                Something went wrong!!!
            </Container>
        )
    }


    const handleClick = (src) => {
        setSelectedImage(src);
    }

    return (
        <Row>
            <Col md={2}>
                {
                    images.map((image, index) => (
                        <Image
                            className="m-1"
                            key={index}
                            src={image}
                            thumbnail
                            onClick={() => handleClick(image)}
                        />
                    ))
                }
            </Col>
            <Col md={8}>
                <Image src={selectedImage || images[0]} />
            </Col>
        </Row>
    )
}

export default ProductImageComponent;