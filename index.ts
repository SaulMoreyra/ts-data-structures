import LinkedStack from "./src/structures/LinkedStack/LinkedStack";

function main(): void {
  const stack = new LinkedStack<Number>();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.pop();
  stack.pop();
  stack.push(5);
  stack.push(6);
  stack.push(7);

  const data = stack.toString();
  console.log(data);
}

main();
