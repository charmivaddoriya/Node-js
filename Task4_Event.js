//Write node js script to handle events as asked below.
//1) Check the radius is negative or not. If negative then display message “Radius” must be positive” else calculate the perimeter of circle. 
// 2) Check side is negative or not. If negative then display message “Side must be positive” else calculate the perimeter of square. 

EventEmitting=require('events');
ee=new EventEmitting();
ee.on("Circle",(rad)=>{
    if (rad<0)
        console.log("Radius must be positive");
    else
        console.log("Perimeter of Circle is=",2*3.14*rad);
})
ee.on("Square",(side)=>{
    if (side<0)
        console.log("Sides must be positive");
    else
        console.log("Perimeter of Square is=",4*side);
})
ee.emit("Circle",-20);
ee.emit("Square",20)