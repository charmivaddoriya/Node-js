//Write a Nodejs script to take "0 1 -9 20 33" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server.
fs=require('fs');
fs.writeFileSync("abc.txt","0 1 -9 20 33");
data=fs.readFileSync("abc.txt","utf-8");
arr=data.split(" ");
sortarr=arr.sort((a,b)=> a-b);
console.log("Sorted array:",sortarr);