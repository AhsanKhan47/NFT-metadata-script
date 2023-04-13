import * as fs from 'fs';
import data from "./metadata/_metadata.json" assert { type: "json" }; // asset type added o avoid error "ERR_IMPORT_ASSERTION_TYPE_MISSING for import of json file"---Import assertions address a security concern (v8.dev/features/import-assertions) about trusting cross-origin imports.
// const data = fetch('http://127.0.0.1:5500/metaddata.json')

let editionValue = 0

const updatedData = data.forEach((element) => {
    element["edition"] = editionValue
    editionValue = editionValue + 1

})

const jsonObj = JSON.stringify(data, null, 4)  //convertsJS value to a JSON string, third param formats code


fs.writeFile("output.json", jsonObj, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});



