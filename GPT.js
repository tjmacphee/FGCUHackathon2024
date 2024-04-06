import OpenAI from "openai";

const openai = new OpenAI();
import dotenv from 'dotenv';



export async function gptrun(gpttext) {
    //runs gpt 4 turbo
    const completion = await openai.chat.completions.create({//starts generating response
        messages: [{ role: "system", content: gpttext }],
        //gpttext is the prompt gppt will run
        model: "gpt-4-turbo-preview",
        //the model (gpt 4 turbo)


    });

    console.log (completion.choices[0]);
    //Prints out gpt result



}
