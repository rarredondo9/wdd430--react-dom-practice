// 1) Implicit any - added ':string' as the return type 
function greet(name: string): string {
  return `Hello, ${name.toUpperCase()}`;
}

// 2) Wrong return type - returns a number by adding up items
function total(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

// 3) Property does not exist on type - added price to the type and the object
type Product = { id: number; title: string; price: number };
const p: Product = { id: 1, title: "Notebook", price: 9.99 };
console.log(p.price);

// 4) Unsafe union usage - check if id is a string before using ToUpperCase
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 5) Optional property used without a check - check that email exists before using it
type User = { name: string; email?: string };
function emailDomain(user: User) {
  if (user.email) {
    return user.email.split("@")[1];
  }
  return null
}

