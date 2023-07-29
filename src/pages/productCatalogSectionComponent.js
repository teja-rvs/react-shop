import dataFetchingComponent from "../components/dataFetchingComponent";
import LoadingComponent from "./loadingComponent";
import ErrorComponent from "./errorComponent";
import Container from "react-bootstrap/Container";
import ProductCatalogIndexComponent from "./productCatalogIndexComponent";

const productCatalogSectionComponent = () => {

    const { data, isLoading, error } = dataFetchingComponent("products/categories");
    const slicedData = data.slice(0,3);

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
                slicedData.map((item) => (
                    <ProductCatalogIndexComponent category={item} key={item} />
                ))
            }
        </div>
    )
}

export default productCatalogSectionComponent;