//Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. And object as well as calculated  data in shape.txt	
fs=require('fs');
const shape=[{name:"circle",diameter:8},{name:"square",side:10}];
fs.writeFileSync("shape.txt",JSON.stringify(shape));
data=JSON.parse(fs.readFileSync("shape.txt","utf-8"));
radius=data[0].diameter;
peri_circle=2*3.14*radius;
console.log(peri_circle);
side=data[1].side;
peri_squ=4*side;
console.log(peri_squ);
fs.appendFileSync("shape.txt", `\nPerimeter of circle=${peri_circle}`)
fs.appendFileSync("shape.txt", `\nPerimeter of square=${peri_squ}`)