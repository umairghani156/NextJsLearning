const fs = require('fs');

// fs.readFile('text.txt', "utf8",(err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })


// try {
//     const data = fs.readFileSync('text.txt', "utf8");
//     console.log(data);
    
    
// } catch (error) {
//     console.error(error);
    
// }
// Asynchronous Way
// fs.readFile("text.txt","utf8",(err, data)=>{
//     if(err) throw err;
//     console.log(data);
    
// })

//Synchronous Way

// try {
//     const data = fs.readFileSync('text.txt', 'utf8');
//     console.log(data);
    
// } catch (error) {
//     throw error
// }

//Asynchronous Way to write a file

// fs.writeFile("hello.txt", "hello world", (err)=>{
//     if(err) throw err
//     console.log("File hase been saved");
    
// });

// fs.writeFile("check.txt","Hello my Checking Brother",(err)=>{
//     if(err) throw err;
//     console.log("File has been saved");
    
// })

// Synchronous Way to write a file

// function hello(){
//    const res = fs.writeFileSync("nyPractice.txt","hello this is the practice file");
//    console.log('File has been saved');
   
// }
// hello();

//Appending File
//Asynchronous way
// let text = 'Hello Content has been appended'

// fs.appendFile("text.txt",text, (err)=>{
//    if(err) throw err;
//    console.log('Content Appended to File');
   
// })

//Synchronous Way

// try {
//     fs.appendFileSync("hello.txt", "Ma ne append krdiya content ko");
//     console.log("Appended");
    
    
// } catch (error) {
//     console.log(error);
    
// }


//Deleting Files
//Asynchronous way

// fs.unlink("hello.txt", (err)=>{
//     if(err) throw err;
//     console.log("File deleted");
    
// })

//Synchronous Way

// try {
//     fs.unlinkSync('check.txt');
//     console.log('File deleted');
    
// } catch (error) {
//     console.log(error);
    
// }

// Create Directory

// fs.mkdir("newDir",(err)=>{
//     if(err) throw err;
//     console.log("Directory created!");
    
// })

// fs.mkdir("assets",(err)=>{
//     if(err) throw err;
//     console.log("Directory Created!");
    
// })


//Read Directory
//Asynchronous way
fs.readdir("newDir", (err, files)=>{
   if(err) throw err;
   console.log(files);
   
});

//Delete Directory

// fs.rmdir("assets", (err)=>{
//     if(err) throw err;
//     console.log('Directory deleted!');
    
// })



// fs.mkdir("utils", (err)=>{
//    if(err) throw err;
//    console.log("Directory created!");
// })

//File Stats
//Asynchronous

// fs.stat("text.txt", (err, stats)=>{
//     if(err) throw err;
//     console.log(stats);
    
// })

// fs.mkdir("utils",(err)=>{
//     if(err) throw err;
//     console.log("Created directory");
    
// })

//Asynchronous File Stats

// fs.stat("utils", (err, stats)=>{
//     if(err) throw err;
//     console.log(stats);
    
// })

//Read Stream 

// const readStream = fs.createReadStream("text.txt", {encoding: "utf8"});

// readStream.on("data", (chunk)=>{
//   console.log("Received Chunk", chunk);
  
// })

//Write Stream 

const writeStream = fs.createWriteStream("user.txt", {encoding: "utf8"});

writeStream.write("Hello world!");
writeStream.end()