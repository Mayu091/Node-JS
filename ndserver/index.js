const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');


//creating multiple files
//for(i=0; i<5; i++)
//{
  //fs.writeFileSync(dirPath+`/apple${i}.txt`, "bkwass fruit");
//}


fs.readdir(dirPath,(err, files)=>{
     files.forEach((item)=>{
      console.log("file name is", item)
     })
})
