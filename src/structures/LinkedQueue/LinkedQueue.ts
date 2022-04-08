import IStructure from "../../interfaces/IStructure";
import SimpleNode from "../../core/SimpleNode";

class LinkedQueue<T extends Object> implements IStructure<T> {
  private front: SimpleNode<T> | null;
  private back: SimpleNode<T> | null;
  private size: number;

  constructor() {
    this.back = null;
    this.front = null;
    this.size = 0;
  }

  enqueue(value: T) {
    const newNode = new SimpleNode(value);
    if (this.back === null) {
      this.back = newNode;
      this.front = newNode;
    } else {
      newNode.setNext(this.back);
      this.back.setPrev(newNode);
      this.back = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const currentFront = this.front;
    if (!currentFront) return null;
    this.size -= 1;
    if (!currentFront.getPrev()) return currentFront.getValue();
    this.front = currentFront.getPrev();
    this.front?.setNext(null);
    currentFront.setPrev(null);
    return currentFront.getValue();
  }

  static fromArray<K extends Object>(array: K[]) {
    const linkedQueue = new LinkedQueue();
    array.forEach((item) => linkedQueue.enqueue(item));
    return linkedQueue;
  }

  toArray() {
    if (!this.back) return [];
    let current = this.back;
    const content: T[] = [];
    while (current) {
      const value = current.getValue();
      content.push(value);
      current = current.getNext() as SimpleNode<T>;
    }
    return content;
  }
  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

export default LinkedQueue;
