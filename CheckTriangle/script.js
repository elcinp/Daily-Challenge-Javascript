let a  = parseInt(prompt("first side length of triangle"))
let b  = parseInt(prompt("second side length of triangle"))
let c  = parseInt(prompt("third side length of triangle"))


function checkTriangle(a,b,c) {
    if (a + b === c || b +c === a || a+c === b)
        return "It's a degenerate triangle which has zero area and looks like a single line."
    else if (a + b <= c || a + c <= b || b + c <= a)
        return "Sorry,it's not a triangle";
    else
        return (a === b && b === c) && 'It\'s an equilateral triangle' ||
        (a === b || a === c || b === c) && 'It\'s an isosceles triangle' ||
        'It\'s a scalene triangle';
}

console.log(checkTriangle(a,b,c));
  