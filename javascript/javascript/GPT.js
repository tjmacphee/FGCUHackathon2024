import OpenAI from "openai";
const openai = new OpenAI();

export async function gptrun(gpttext) {
    const completion = await openai.chat.completions.create({//starts generating response
        messages: [{ role: "system", content: gpttext }],

        //gpttext is the prompt gppt will run
        model: "gpt-4-turbo-preview", //the model (gpt 4 turbo)
    });

    //Prints out gpt result
    console.log (completion.choices[0]);
}
