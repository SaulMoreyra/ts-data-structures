import IStructure from "../../interfaces/IStructure";
import SimpleNode from "../../core/SimpleNode";

class LinkedStack<T extends Object> implements IStructure<T> {
  private cursor: SimpleNode<T> | null;
  private size: number;

  constructor() {
    this.cursor = null;
    this.size = 0;
  }

  static fromArray<K extends Object>(array: K[]) {
    const linkedStack = new LinkedStack();
    array.forEach((item) => linkedStack.push(item));
    return linkedStack;
  }

  push(value: T) {
    const newNode = new SimpleNode(value);
    if (!this.cursor) this.cursor = newNode;
    else newNode.setNext(this.cursor);
    this.cursor = newNode;
    this.size += 1;
  }

  pop(): T | null {
    if (!this.cursor) return null;
    const deletedValue = this.cursor.getValue();
    this.cursor = this.cursor.getNext();
    this.size -= 1;
    return deletedValue;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  toArray() {
    if (!this.cursor) return [];
    let current = this.cursor;
    const content: T[] = [];
    while (current) {
      const value = current.getValue();
      content.push(value);
      current = current.getNext() as SimpleNode<T>;
    }
    return content;
  }
}

export default LinkedStack;
