//Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair. 
inp=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
function fromListToObject(inp){
    eobj={}
    for (i=0;i<inp.length;i++) {
        eobj[inp[i][0]]=inp[i][1]
    }
    console.log(eobj)
}
fromListToObject(inp)