import * as geminiUtils from './Gemini.js';
import * as googleShoppingUtils from './GoogleShopping.js';
import * as homeDepotUtils from './Homedepot.js';
import * as readline from "readline";
import {geminirun} from "./Gemini.js";
import {googleshoppingrun} from "./GoogleShopping.js";
import {depotrun} from "./Homedepot.js";
import {gptrun} from "./GPT.js";
import {sleep} from "openai/core";
import aesjs from "aes-js";


// Create an interface for input and output
const mode = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask a question and get an input
mode.question('Type search, assistant, or encrypt ', (modeselect) => {
    console.log(`Your search query is: ${modeselect}`);
    mode.close();

    if(modeselect==="search")
    {
        const searchtext = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

// Ask a question and get an input
        searchtext.question('What is your search query? ', async (search) => {

            console.log(`Your search query is: ${search}`);


             //   const googleShoppingResult = await googleshoppingrun(search);
              //  console.log("Google Shopping Result:", googleShoppingResult);

            //    const depotResult = await depotrun(search);
             //   console.log("Depot Result:", depotResult);
                // Await the asynchronous functions to complete and get their results
               const [googleShoppingResult, depotResult] = await Promise.all([
                    googleshoppingrun(search),
                    depotrun(search)
               ]);

                // Once both are complete, you can concatenate their results

                const finalResult = String(depotResult) + String(googleShoppingResult);



             //   console.log("Concatenated result:", finalResult); // Check the concatenated result



                const geminiResult = await gptrun("With the following data make a table of how far each item is being shipped, when it arrives, the vendor, and the price: " +finalResult);

                // Do something with geminiResult if needed
                console.log(geminiResult);


            //    geminirun("With the following data make a table of how far each item is being shipped, when it arrives, the vendor, and the price: "+googleshoppingrun((""+search))+depotrun(((""+search))));


            // Don't forget to close the readline interface when you're done
            searchtext.close();
        });

    }
    if(modeselect==="assistant") {
        const assistantinput = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        assistantinput.question('What do you need help with? ', (assistant) => {
            console.log(`Your search query is: ${assistant}`);
gptrun(""+assistant);


            // Don't forget to close the readline interface when you're done
            assistantinput.close();
        });
    }
        if (modeselect === "encrypt") {
            const encrypter = readline.createInterface({
                input: process.stdin,
                output: process.stdout

            });


// Ask a question and get an input
            encrypter.question('What is would you like to encrypt/decrypt? ', (encrypt) => {
                console.log(`You will encrypt and decrypt the following words:  ${encrypt}`);


                var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


                var textBytes = aesjs.utils.utf8.toBytes(encrypt);

// The counter is optional, and if omitted will begin at 1
                var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
                var encryptedBytes = aesCtr.encrypt(textBytes);

// To print or store the binary data, you may convert it to hex
                var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
                console.log(encryptedHex);
// "a338eda3874ed884b6199150d36f49988c90f5c47fe7792b0cf8c7f77eeffd87
//  ea145b73e82aefcf2076f881c88879e4e25b1d7b24ba2788"

// When ready to decrypt the hex string, convert it back to bytes
                var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

// The counter mode of operation maintains internal state, so to
// decrypt a new instance must be instantiated.
                var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
                var decryptedBytes = aesCtr.decrypt(encryptedBytes);

// Convert our bytes back into text
                var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
                console.log(decryptedText);
// "Text may be any length you wish, no padding is required."



                // Don't forget to close the readline interface when you're done
                encrypter.close();

            });
            }

        else {


        }
        // Don't forget to close the readline interface when you're done

});










