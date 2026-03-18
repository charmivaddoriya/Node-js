//Create a Node.js program using the events module to demonstrate:
//Registering multiple event listeners for different events (myEvent1, myEvent2).
// Removing a specific event listener (removeListener) for myEvent2.
// Removing all listeners associated with myEvent1 (removeAllListeners).
// Triggering events and observing which listeners execute.

EventEmitting=require('events');
ee=new EventEmitting();
function listener1(){
    console.log("Listener 1");
}
function listener2(){
    console.log("Listener 2");
}
function listener3(){
    console.log("Listener 3");
}
function listener4(){
    console.log("Listener 4");
}
function listener5(){
    console.log("Listener 5");
}
function listener6(){
    console.log("Listener 6");
}
ee.on("myevent1",listener1);
ee.on("myevent2",listener2);
ee.on("myevent1",listener3);
ee.on("myevent2",listener4);
ee.on("myevent1",listener5);
ee.on("myevent2",listener6);
ee.removeListener("myevent2",listener2);
ee.removeAllListeners(["myevent1"]);
ee.emit("myevent1");
ee.emit("myevent2");