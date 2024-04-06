import axios from "axios";
import dotenv from "dotenv";

export async function googleshoppingrun(keyword) { //uses web crawler to find listings

    const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search',
        params: {
            q: keyword,
            country: 'us',
            language: 'en'
        },
        headers: {
            'X-RapidAPI-Key': dotenv.config().parsed.RAPIDAPIKEY,
            //gets key for rapidapi from .env
            'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
    };

    try {
        //starts generating response
        const response = await axios.request(options);

        return response.data;
    }
    catch (error) {
        return "error";
    }
}
