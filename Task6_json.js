//  Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
// 1) the first element of the array as the object's key, and
// 2) the last element of the array as that key's value.
inp=['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
function transformFirstAndLast(inp){
    eobj={}
    eobj[inp[0]]=inp[inp.length-1]
    console.log(eobj)
}
transformFirstAndLast(inp)