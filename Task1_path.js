//Write node.js script to check whether the file extension is  .txt or not.
path=require('path');
file="abc.txt";
ext=path.extname(file);
if (ext === ".txt") {
    console.log("File is a .txt file");
} else {
    console.log("File is NOT a .txt file");
}