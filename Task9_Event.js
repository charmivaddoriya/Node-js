//Write a node.js script using Event handling to perform following tasks in sequence:
//Create a folder named Test.
// Create file in it named abc.txt and enter data into it.
// Append data to that file abc.txt and print message “Data Appended Successfully”.
// Read the content of the file abc.txt and print the concsole (Ref*- content on http web server).
// Copy data from abc.txt to pqr.txt.
// Delete old file and Lastly print the message “All operations performed successfully” on console.
// Perform using Synchronous file system module.

EventEmitting=require('events');
ee=new EventEmitting();
fs=require('fs');
ee.on("operation",()=>{
    fs.mkdirSync("Test")
    fs.writeFileSync("Test/abc.txt","This is my data");
    fs.appendFileSync("Test/abc.txt","\nData Appended Successfully!!");
    data=fs.readFileSync("Test/abc.txt","UTF-8");
    console.log(data);
    fs.copyFileSync("Test/abc.txt","Test/pqr.txt");
    fs.unlinkSync("Test/abc.txt");
    console.log("All operations performed successfully!!")
})
ee.emit("operation")