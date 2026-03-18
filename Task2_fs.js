//Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console.
fs=require('fs');
students=[{"name":"abc","age":20},{"name":"pqr","age":30}];
fs.writeFileSync("student.txt",JSON.stringify(students));
data=fs.readFileSync("student.txt","utf-8");
data_student=JSON.parse(data);
console.log(data_student)