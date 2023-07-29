import React, { useState } from 'react';
import {Navbar, Container, Offcanvas, Form, Button} from 'react-bootstrap';
import CartComponent from "./cartComponent";
import {clearCart} from "../redux/updateCart";
import {useDispatch} from "react-redux";

const NavBarComponent = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas((prevState) => !prevState);
    };

    const dispatcher = useDispatch();

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand={false} sticky={"top"}>
                <Container>
                    <Navbar.Brand href="/">React Shop</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 bg-light text-dark"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Navbar.Toggle onClick={toggleOffcanvas} className={"text-light"}>
                        Cart
                    </Navbar.Toggle>
                </Container>
            </Navbar>

            <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                    <Button
                        variant="danger"
                        onClick={() => dispatcher(clearCart())}
                    >
                        Clear Cart
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CartComponent />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default NavBarComponent;
