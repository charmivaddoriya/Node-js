//Write a NodeJs script to create two listeners for a common event. Call their respective callbacks. Print no. of events associated with an emitter.
//Remove one of the listener and  print no of remaining listeners.

EventEmitting=require('events');
ee=new EventEmitting();
function listener1(){
    console.log("Listner 1");
}
function listener2(){
    console.log("Listner 2");
}
ee.on("common",listener1)
ee.on("common",listener2)
ee.emit("common");
console.log("No. of events=",ee.listenerCount("common"));
ee.removeListener("common",listener1);
console.log("No. of events after removing=",ee.listenerCount("common"));