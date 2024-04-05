import axios from "axios";

export async function depotrun(depottext) {
    const params = {
        api_key: "A3F34E6187AC460CBC83BECB9EC0AF14",
        search_term: depottext,
        type: "search"
    };

    try {
        // Await the axios call to resolve, making the async HTTP GET request
        const response = await axios.get('https://api.bigboxapi.com/request', { params });

        // Once the promise is resolved, return the stringified JSON data
        return String(JSON.stringify(response.data, null, 2));
    } catch (error) {
        // In case of an error, catch it and return a string indicating an error
        console.error(error); // It's a good practice to log the error for debugging
        return "error";
    }
}