var APIKEY="AIzaSyCSZl1OT7pOB4SM2Y_9WoVSepfKOC_mkXk";

var APIPROMPTKEYWORD;
var APIPROMPTKEYWORD;
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(APIKEY);

export async function geminirun(inputtext) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = inputtext;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  //  console.log(text);
    return text;
}

