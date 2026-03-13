//  Write a JS to store an array of objects having name and age. display name and age of person with highest age.
const person =[{name: "PQR", age: 38},
    {name: "ABC", age: 35},
    {name: "XYZ", age: 47}
]
ha=person.sort((a,b)=>b.age-a.age)[0]
console.log(ha)