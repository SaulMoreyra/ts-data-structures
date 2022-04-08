import LinkedStack from "./LinkedStack";

describe("Should insert and remove values", () => {
  test("insert fisrt value", () => {
    const stack = new LinkedStack();
    stack.push("Hola");
    expect(stack.getSize()).toBe(1);
  });

  test("remove first value", () => {
    const stack = new LinkedStack();
    stack.push("Hola");
    const value = stack.pop();
    expect(value?.toString()).toBe("Hola");
    expect(stack.getSize()).toBe(0);
  });

  test("remove after empty stack", () => {
    const stack = new LinkedStack();
    expect(stack.getSize()).toBe(0);
    const value = stack.pop();
    expect(value).toBeNull();
    expect(stack.getSize()).toBe(0);
  });

  test("convert to array", () => {
    const stack = new LinkedStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    const array = stack.toArray();
    expect(array instanceof Array).toBeTruthy();
  });

  test("convert array to linked stack", () => {
    const array = [1, 3, 4, 5];
    const stack = LinkedStack.fromArray(array);
    expect(stack instanceof LinkedStack).toBeTruthy();
    const lastItem = stack.pop();
    expect(lastItem).toBe(array.pop());
  });

  test("empty should return correct form", () => {
    const stack = new LinkedStack();
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(3);
    expect(stack.isEmpty()).toBeFalsy();
  });
});
