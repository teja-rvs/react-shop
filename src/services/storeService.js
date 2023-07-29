const baseUrl = 'https://dummyjson.com';

async function fetchData(endpoint) {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    if(!response.ok) {
        throw new Error("Backend store is down");
    }
    return response.json();
}

export const storeService = {
    fetchData
}