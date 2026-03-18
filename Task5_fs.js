//Write a Node.Js program for following action 
//Write a file having five numbers in array form separated by white space in .txt file.
//Append sorted array of these 5 numbers in same file along with message: “Sorted array:” in new line.
//Find maximum number from that and append with message “maximum number=” in same file. (your code should compatible for any random numbers including sign)
fs=require('fs');
fs.writeFileSync("sort.txt","2 4 -2 5 -99");
data=fs.readFileSync("sort.txt","utf-8");
arr=data.split(" ");
sort_arr=arr.sort((a,b)=> a-b);
fs.appendFileSync("sort.txt",`\nSorted Array:${sort_arr}`);
max_arr=arr.sort((a,b)=> b-a)[0];
fs.appendFileSync("sort.txt",`\nMaximum number=${max_arr}`);