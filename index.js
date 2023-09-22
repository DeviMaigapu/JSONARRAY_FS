// json-handler.js
const fs = require('fs');
const JsonArrayHandler = {
  //Read json array 
   readJsonFile: function(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
  } catch (error) {
    throw new Error(`Error reading JSON file: ${error.message}`);
  }
},
  //write a json array
   writeJsonFile: function(filePath, data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf8');
  } catch (error) {
    throw new Error(`Error writing JSON file: ${error.message}`);
  }
},
    //appending file to json array
    appendToJsonFile: function(filePath, newData) {
      const jsonArray = [];
      try {
        const data = fs.readFileSync(filePath, 'utf8');
        jsonArray = JSON.parse(data);
        } catch (error) {
       // Handle file not found or JSON parsing errors here
       console.error(`Error reading JSON file: ${error.message}`);
      }
      jsonArray.push(newData);
      try {
     fs.writeFileSync(filePath, JSON.stringify(jsonArray, null, 2), 'utf8');
     console.log('Data appended to JSON file successfully.');
     } catch (error) {
    //Handle file write errors here
    console.error(`Error writing JSON file: ${error.message}`);
     }
      },
      //update a value in json array
     updateValueInJsonArray: function(jsonArray, condition, updateFunction) {
        for (let i = 0; i < jsonArray.length; i++) {
         if (condition(jsonArray[i])) {
          jsonArray[i] = updateFunction(jsonArray[i]);
           console.log("VALUED UPDATED SUCESSFULLY!!!");
         }
      }
    },

    //deleting json file
     deleteJsonFile: function(filePath) {
       try {
         fs.unlinkSync(filePath);
         } catch (error) {
         throw new Error(`Error deleting JSON file: ${error.message}`);
        }
       }
      }
module.exports = JsonArrayHandler;
