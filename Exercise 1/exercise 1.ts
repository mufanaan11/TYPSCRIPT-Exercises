let productName: string = "Wireless Mouse";
let price: number = 29.99;
let discountAvailable: boolean = true;

productName = "Bluetooth Keyboard";
price = 49.99;
discountAvailable = false;

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(100, 0.2));

function printLength(x: unknown): void {
  if (typeof x === "string" || Array.isArray(x)) {
    console.log(x.length);
  } else {
    console.log("Cannot get length: value is not a string or array.");
  }
}

printLength("Hello");
printLength(123);
