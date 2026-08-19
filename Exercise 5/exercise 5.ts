function echo<T>(input: T): T {
  return input;
}

console.log(echo("hello"));
console.log(echo(42));
console.log(echo([1, 2, 3]));
console.log(echo({ username: "mukhtarali" }));

interface ApiResult<T> {
  status: string;
  data: T;
}

const stringResult: ApiResult<string> = { 
  status: "ok", 
  data: "hello" 
};

const userResult: ApiResult<{ id: number; name: string }> = {
  status: "ok",
  data: { id: 1, name: "Mukhtar Ali" },
};

console.log(stringResult);
console.log(userResult);

function first<T>(items: T[]): T {
  return items[0];
}

console.log(first([10, 20, 30]));
console.log(first(["a", "b", "c"]));
console.log(first([{ id: 1 }, { id: 2 }]));
