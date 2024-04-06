import axios from "axios";
import dotenv from 'dotenv';

export async function depotrun(depottext) {
    //gets key for homedepot from .env
    const params = {
        api_key: dotenv.config().parsed.DEPOTKEY,
        search_term: depottext,
        type: "search"
    };

    try {
        // Await the axios call to resolve, making the async HTTP GET request
        const response = await axios.get('https://api.bigboxapi.com/request', { params });
//gets response from api
        // Once the promise is resolved, return the stringified JSON data
        return String(JSON.stringify(response.data, null, 2));
    } catch (error) {
        return "error";
    }
}