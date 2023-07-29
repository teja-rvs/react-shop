import Container from "react-bootstrap/Container";
import {Button, Table} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../redux/updateCart";

const CartComponent = ({ items }) => {

    console.log(items.length);

    const dispatcher = useDispatch();

    if(items.length === 0){
        return (
            <Container fluid>
                Cart empty
            </Container>
        )
    }

    const total = items.reduce((total, currentItem) => total + currentItem.product.price * currentItem.count, 0);

    return (
        <Table>
            <thead>
                <tr>
                    <td>Item</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
            {
                items.map((item) => (
                    <tr key={ item.product.id }>
                        <td>{ item.product.title }</td>
                        <td>$ { item.product.price }</td>
                        <td className="text-center">{ item.count }</td>
                        <td>$ { item.product.price * item.count}</td>
                        <td>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => dispatcher(removeFromCart(item.product))}
                            >
                                X
                            </Button>
                        </td>
                    </tr>

                ))
            }
                <tr>
                    <td className="fw-bold" colSpan="3">Total</td>
                    <td className="fw-bold">$ { total }</td>
                    <td></td>
                </tr>
            </tbody>

        </Table>
    )
}

export default CartComponent;