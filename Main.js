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
import forge from 'node-forge';

// Create an interface for input and output
const mode = readline.createInterface({
    //creates interface for readline
    input: process.stdin,
    output: process.stdout
});


// Ask a question and get an input
mode.question('Type search, assistant, or encrypt ', (modeselect) => {
    console.log(`Your search query is: ${modeselect}`);
    mode.close();

    if(modeselect==="search")
        //search mode for searching product info
    {
        const searchtext = readline.createInterface({
            // Create an interface for input and output
            input: process.stdin,
            output: process.stdout
        });

// Ask a question and get an input
        searchtext.question('What is your search query? ', async (search) => {

            console.log(`Your search query is: ${search}`);

            // Waits for googleshopping run and depotrun to return a value

            const [googleShoppingResult, depotResult] = await Promise.all([
                    googleshoppingrun(search),
                    depotrun(search)
               ]);

                // Once both are complete, you can concatenate their results

                const finalResult = String(depotResult) + String(googleShoppingResult);

                //Start processing prompt in gpt and wait till gpt is done processing prompt
                const gptResult = await gptrun("With the following data make a table of how far each item is being shipped, when it arrives, the vendor, and the price: " +finalResult);

                //Print gpt result
                console.log(gptResult);




             // closes searchtext
            searchtext.close();
        });

    }
    if(modeselect==="assistant") {
        //selects assistant/chabot mode
        const assistantinput = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
                //Start processing prompt in gpt
        assistantinput.question('What do you need help with? ', (assistant) => {
            console.log(`Your search query is: ${assistant}`);

        gptrun(""+assistant);
        //Print gpt result



               // close the readline interface when done
            assistantinput.close();
        });
    }
        if (modeselect === "encrypt") { //encryption mode
            const encrypter = readline.createInterface({
                input: process.stdin,
                output: process.stdout

            });


                // Ask a question and get an input
            encrypter.question('What is would you like to encrypt/decrypt? ', (encrypt) => {

                console.log(`You will encrypt and decrypt the following words:  ${encrypt}`);


                var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
                //sets AES 256 bit key
                const { publicKey, privateKey } = forge.pki.rsa.generateKeyPair(4096);

                // Message to be encrypted
                const message = String(key);

                // Encrypt the message using the public key
                const encrypted = publicKey.encrypt(message, 'RSA-OAEP');
                const encryptedhex = forge.util.bytesToHex(encrypted);
                // Convert to hex string for readable format
                console.log("RSA 4096 bit Encrypted Key:", encryptedhex);
                //prints RSA 4096 bit Encrypted key



                // Decrypt the message using the private key
                const decrypted = privateKey.decrypt(encrypted, 'RSA-OAEP');

                console.log("RSA 4096 bit Decrypted Key:", decrypted);

                var textBytes = aesjs.utils.utf8.toBytes(encrypt);

                //prints RSA 4096 bit Decrypted key

                //encrypt
                var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
                var encryptedBytes = aesCtr.encrypt(textBytes);

            // To print or store the binary data, you may convert it to hex
                var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

                console.log("AES 256 bit Encrypted String: "+encryptedHex);
                //prints AES 256 bit encrypted key


            // When ready to decrypt the hex string, convert it back to bytes
                var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

            //The counter mode of operation maintains internal state, so to
            // decrypt a new instance must be instantiated.

                var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));

                var decryptedBytes = aesCtr.decrypt(encryptedBytes);

                // Convert our bytes back into text
                var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
                console.log("AES 256 bit Decrypted String: "+decryptedText);
                //prints AES 256 bit encrypted key





                // close the readline interface when done
                encrypter.close();

            });
            }

        else {


        }


});










