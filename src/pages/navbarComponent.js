import React, { useState } from 'react';
import {Navbar, Container, Offcanvas, Form, Button} from 'react-bootstrap';
import CartComponent from "./cartComponent";
import {clearCart} from "../redux/updateCart";
import {useDispatch, useSelector} from "react-redux";
import Badge from "react-bootstrap/Badge";

const NavBarComponent = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas((prevState) => !prevState);
    };

    const items = useSelector((state) => state.updateCart.items);
    const dispatcher = useDispatch();
    const productsCount = items.reduce((total, currentItem) => total + currentItem.count, 0);

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand={false} sticky={"top"}>
                <Container>
                    <Navbar.Brand to="/">React Shop</Navbar.Brand>
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
                        Cart <Badge pill bg="secondary">{ productsCount }</Badge>
                    </Navbar.Toggle>
                </Container>
            </Navbar>

            <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                    {
                        items.length !== 0 && <Button
                            variant="danger"
                            onClick={() => dispatcher(clearCart())}
                        >
                            Clear Cart
                        </Button>
                    }
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CartComponent items={items}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default NavBarComponent;
