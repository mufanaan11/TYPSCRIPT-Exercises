"use strict";
function login(user) {
    console.log(user);
}
login({ id: 1, username: "mukhtarali", password: "secret123" });
login({ id: 2, username: "mukhtarali", password: "secret123", email: "mukhtar@example.com" });
const user = { id: 3, username: "mukhtarali", password: "secret123" };
console.log(user);
