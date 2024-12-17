const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`


//CREATE
//fs.writeFileSync(filePath, 'bkwass fruit');


//READ
fs.readFile(filePath,'utf8',(err, item)=>{
    console.log(item);
})


//UPDATE
//fs.appendFile(filePath, 'but healthy', (err) => {
  // if(!err) console.log("Updated!")
//});


//RENAME
//fs.rename(filePath,`${dirPath}/fruit.txt`, (err) => {
  //  if(!err) console.log("Renamed!")
//})


//DELETE
//fs.unlinkSync(`${dirPath}/fruit.txt`);