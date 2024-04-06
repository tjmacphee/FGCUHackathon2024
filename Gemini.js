import dotenv from "dotenv";

var APIKEY=dotenv.config().parsed.GEMINIKEY; //gets key for gemini from .env


import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(APIKEY); //gets key for gemini from .env

export async function geminirun(inputtext) { //runs gemini. When gemini 1.5 is released (can support more tokens)
    // we might use it instead of gpt turbo

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"}); //sets generative model

    const prompt = inputtext; //sets prompt

    const result = await model.generateContent(prompt);
    //starts generating gpt response

    const response = await result.response;
    //gets gpt response

    const text = response.text(); //saves response as text

    return text; //returns text
}

