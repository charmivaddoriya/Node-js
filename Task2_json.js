//Consider below JSON object and fetch values using for loop (for…in/for…of).
const sub ={"FSD": [
    {"Topic": "HTML","course": "Beginer","content": ["tags", "table", "form"],},
    {"Topic": "CSS","course": "Beginer","content": ["tags", "table", "form"]}
]};


for (x in sub){
    console.log("key:",x)
    for (y in sub[x]){
        console.log("Topic:",sub[x][y].Topic)
        console.log("course:",sub[x][y].course)
        console.log("content:",sub[x][y].content)
    }
}

for (x of sub.FSD){
    console.log("Topic:",x.Topic)
    console.log("course:",x.course)
    for (y of x.content){
        console.log("content:",y)
    }
}