"use strict";
function echo(input) {
    return input;
}
console.log(echo("hello"));
console.log(echo(42));
console.log(echo([1, 2, 3]));
console.log(echo({ username: "mukhtarali" }));
const stringResult = {
    status: "ok",
    data: "hello"
};
const userResult = {
    status: "ok",
    data: { id: 1, name: "Mukhtar Ali" },
};
console.log(stringResult);
console.log(userResult);
function first(items) {
    return items[0];
}
console.log(first([10, 20, 30]));
console.log(first(["a", "b", "c"]));
console.log(first([{ id: 1 }, { id: 2 }]));
