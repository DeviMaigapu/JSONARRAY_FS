const jsonArrayHandler = require('./index');
// Write JSON file
const newData = [{"name": "Alice","age": 18 ,"city": "New York" },{"name": "Joe","age": 28 ,"city": "Paris" }];
  
jsonArrayHandler.writeJsonFile("data.json", newData);
console.log(newData);

// Read JSON file
const jsonData = jsonArrayHandler.readJsonFile("data.json");
console.log('Read JSON data:', jsonData);


//Append to JSON file
/*const newdata = [{ address: "Tom" },{ address : "hyd"}];
jsonArrayHandler.appendToJsonFile("data.json", newdata);
console.log(newdata);*/

const jsonArray = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];
  
  // Update the age of Bob (id: 2)
  /*jsonArrayHandler.updateValueInJsonArray(
    jsonArray,
    (item) => item.id === 2, // Condition to find Bob
    (item) => ({ ...item, age: 36 }) // Update function
  );
  console.log(jsonArray);*/


  

  // Delete JSON file
//jsonHandler.deleteJsonFile(filePath);
