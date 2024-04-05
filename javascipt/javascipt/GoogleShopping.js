import axios from "axios";

export async function googleshoppingrun(keyword) {

    const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search',
        params: {
            q: keyword,
            country: 'us',
            language: 'en'
        },
        headers: {
            'X-RapidAPI-Key': 'ff0a6a6dacmshcfcfd7b06e45617p1c996bjsn15bfeac30230',
            'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
       //console.log(response.data);
        return response.data;
    } catch (error) {
        //console.error(error);
        return "error";
    }
}