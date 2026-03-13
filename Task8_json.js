//Create a JSON object with two divisions, where each division has a 'name' field containing an array of employee initials. The names within each division should be sorted alphabetically. Then, merge the two sorted arrays into a single list and display the final sorted list in the console.
var test = { "division1": {"name":["Z","B","H"]},
"division2": {"name" :["Y","A","G"]}
}
dv1=test.division1.name.sort()
dv2=test.division2.name.sort()
merge=dv1.concat(dv2).sort()
console.log(merge)