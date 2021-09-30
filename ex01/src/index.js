let myArr = [];
// Only change code below this line
function* multipication(x) {
    for (i = 0; i < x; i++) {
        myArr.push(x *= 2);
        yield x;
    }
}
let num = multipication(3);
for (i = 1; i <=3; i++) {
    console.log(num.next().value);
}
// Only change code above this line
module.exports = multipication;