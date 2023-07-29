import dataFetchingComponent from "../components/dataFetchingComponent";
import LoadingComponent from "./loadingComponent";
import ErrorComponent from "./errorComponent";
import Container from "react-bootstrap/Container";

const productCatalogIndex = () => {

    const { data, isLoading, error } = dataFetchingComponent("products/categories");

    if (isLoading) {
        return <LoadingComponent />
    }

    if (error) {
        return <ErrorComponent />
    }

    if (!data.length) {
        return (
            <Container fluid>
                <h1>Coming Soon!!!</h1>
            </Container>
        )
    }

    return (
        <div>
            {
                data.map((item) => (
                    <h1>{item}</h1>
                ))
            }
        </div>
    )
}

export default productCatalogIndex;