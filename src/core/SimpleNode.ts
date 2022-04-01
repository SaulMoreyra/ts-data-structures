class SimpleNode<T extends Object> {
  private next: SimpleNode<T> | null;
  private value: T;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  setNext(next: SimpleNode<T>) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}

export default SimpleNode;
