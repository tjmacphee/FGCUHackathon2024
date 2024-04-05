import OpenAI from "openai";

const openai = new OpenAI();



export async function gptrun(gpttext) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: gpttext }],
        model: "gpt-4-turbo-preview",


    });

    console.log (completion.choices[0]);



}
