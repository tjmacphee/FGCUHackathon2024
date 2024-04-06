import dotenv from "dotenv";

var APIKEY=dotenv.config().parsed.GEMINIKEY; //gets key for gemini from .env

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(APIKEY); //gets key for gemini from .env

export async function geminirun(inputtext) { //runs gemini. Will upgrade to latest gemini model when available

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"}); //sets generative model

    //sets prompt
    const prompt = inputtext;

    //starts generating gpt response
    const result = await model.generateContent(prompt);

    //gets gpt response
    const response = await result.response;

    const text = response.text(); //saves response as text

    return text;
}
