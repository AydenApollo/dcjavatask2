

function madLib (name, subject) {
    name = 'Anushka';
    subject = 'art';
    return console.log(`${name}'s favorite subject in school is ${subject}.`)
} 
madLib();

function tipAmount (x, y) {
    return x * y
}
const good = .2;
const fair = .15;
const poor = .1;

console.log(tipAmount(100, good));
console.log(tipAmount(40, fair));


function call3Times (fun) {
    console.log('Hello World!');
    console.log('Hello World!');
    console.log('Hello World!');
    return fun
}
call3Times();





function printNumbers (){
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let n = 1;
    while (n < 11) {
        console.log(n);
        n++;
    }
}
printNumbers();



function printSquare() {
    var columns = 5;
    var rows = 5;
for (var i=1; i<=columns; i++){
    for (var j=1; j<=rows; j++) {
        console.log('*');
        break;
    }
 }

}
printSquare();

function printBox() {
    var columns1 = 6;
    var rows1 = 4;
for (var i=1; i<=columns1; i++){
    for (var j=1; i<=rows1; j++) {
        console.log('*');
        break;
    }
}
}
printBox(); // couldn't get the '*' to spring in squre or box. Just got *



