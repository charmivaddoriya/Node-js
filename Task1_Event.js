//Write a Node.js program using the events module to simulate a sequence of events: 
// When a "connection" event occurs, print "Connection successfully" and trigger a "data-received" event.
// When the "data-received" event occurs, print "Data received successfully".
// Finally, print "Thanks" at the end of execution.

EventEmitting=require('events');
ee=new EventEmitting();
ee.on("connection",()=>{
    console.log("Connection successfully");
    ee.emit("data-received")
})
ee.on("data-received",()=>{
    console.log("Data received successfully");
})
ee.emit("connection");
console.log("Thanks!")