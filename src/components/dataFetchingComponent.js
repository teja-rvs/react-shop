import {useEffect, useState} from "react";
import {storeService} from "../services/storeService";

const DataFetchingComponent = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        storeService
            .fetchData(endpoint)
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            })
    }, [endpoint])

    return { data, isLoading, error }
}

export default DataFetchingComponent;