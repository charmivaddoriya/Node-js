//Write a node js script to write the text “This is data” to new.txt file. After that append the text “that is data” to same ne .txt file. 
//After that read the file and print file concept on console. After finishing read operation, print the line “Thanks for using my program” on 
//console. All read/write operations are asynchronous. (using Event)

EventEmitting=require('events');
ee=new EventEmitting();
fs=require('fs');
ee.on("operations",()=>{
    fs.writeFile("new.txt","This is data",(err)=>{
        if (err)
            throw err;
        fs.appendFile("new.txt","\nthat is data",(err)=>{
            if (err)
                throw err;
            fs.readFile("new.txt","UTF-8",(err,data)=>{
                if (err)
                    throw err;
                console.log(data);
                console.log("Thanks for using my program")
            });
            
        })
    })
})
ee.emit("operations")