//Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 subjects about of 25 marks and displays the 
//total marks on console as an output.The calculate event fires another event name percentage which takes total marks as argument and percentage 
//should get displayed in console.
EventEmitting=require('events');
ee=new EventEmitting();
ee.on("calculate",(s1,s2,s3,s4,s5)=>{
    total=s1+s2+s3+s4+s5;
    console.log("Total Marks=",total);
    ee.emit("percentage",total,25*5);
})
ee.on("percentage",(total,Outof)=>{
    console.log("Percentage=",(total/Outof)*100+"%");
})
ee.emit("calculate",23,24,14,21,11);