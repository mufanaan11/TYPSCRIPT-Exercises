interface User {
  readonly id: number;
  username: string;
  password: string;
  email?: string;
}

function login(user: User): void {
  console.log(user);
}

login({ id: 1, username: "mukhtarali", password: "secret123" });
login({ id: 2, username: "mukhtarali", password: "secret123", email: "mukhtar@example.com" });

const user: User = { id: 3, username: "mukhtarali", password: "secret123" };
console.log(user);
