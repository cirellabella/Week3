//in js, the global object is the window obj
//this means it is global

x = 2;
console.log(x);
console.log(window);
console.log(this);

let y = 5;
console.log(y);
console.log(this);

//you can tell how big the window is by using the innerwidth and
//innerwidth properties

console.log(window.innderwidth);
console.log(window.innderheight);
//notice what happens- do not declare variables by adding them to the 
//window obj

innerheight = 10;
console.log(innerHeight);

//info about the browser
console.log(navigator);

console.log(location);