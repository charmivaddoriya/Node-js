//Write node js script and json to perform below tasks. 
// 1.	Write below object in txt file named input.txt  
// {data:{a:15,b:20,c:[40,30]}}
// 2.	Read data from the same file and perform the below tasks.
// a.	addition of a and b.
// b.	subtraction of 2nd element of c and b. (Must be positive value)
// c.	multiplication of elements of c.
// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.
fs=require('fs');
inp={data:{a:15,b:20,c:[40,30]}}
fs.writeFileSync("input.txt",JSON.stringify(inp));
input=JSON.parse(fs.readFileSync("input.txt","utf-8"));
addition=input.data.a+input.data.b;
console.log("Addition=",addition);
subtraction=input.data.c[1]-input.data.b;
console.log("Subtraction=",subtraction);
multiplication=input.data.c[0]*input.data.c[1];
console.log("Multiplication=",multiplication);
fs.appendFileSync("input.txt",`\naddition of a and b=${addition}`);
fs.appendFileSync("input.txt",`\nsubtraction of 2nd element of c and b=${subtraction}`);
fs.appendFileSync("input.txt",`\nmultiplication of elements of c=${multiplication}`);