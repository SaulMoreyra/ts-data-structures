import LinkedQueue from "./LinkedQueue";

describe("Should insert and remove values", () => {
  test("insert fisrt value", () => {
    const queue = new LinkedQueue();
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
  });

  test("insert multiples values", () => {
    const queue = new LinkedQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.getSize()).toBe(4);
  });

  test("remove fist value", () => {
    const queue = new LinkedQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    let firstValue = queue.dequeue();
    expect(firstValue).toBe(1);
    expect(queue.getSize()).toBe(3);
    firstValue = queue.dequeue();
    expect(firstValue).toBe(2);
    expect(queue.getSize()).toBe(2);
  });

  test("convert array to linked queue", () => {
    const array = [1, 2, 3, 5, 6];
    const queue = LinkedQueue.fromArray(array);
    expect(queue.getSize()).toBe(array.length);
    const fistValue = queue.dequeue();
    expect(fistValue).toBe(array[0]);
  });

  test("convert linked queue to array", () => {
    const queue = new LinkedQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    const queueArray = queue.toArray();
    expect(queueArray instanceof Array).toBeTruthy();
    expect(queue.getSize()).toBe(queue.getSize());
  });
});
