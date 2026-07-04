function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    if(!(a>b)) {
        throw new Error("a must be greater than b");
    }
    return a - b;
}
add(5, 3);
add(10, 20);
add(15, 25);
add(100, 200);

subtract(10, 5);


