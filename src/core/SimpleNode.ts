class SimpleNode<T extends Object> {
  private next: SimpleNode<T> | null;
  private prev: SimpleNode<T> | null;
  private value: T;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  setNext(next: SimpleNode<T> | null) {
    this.next = next;
  }

  setPrev(prev: SimpleNode<T> | null) {
    this.prev = prev;
  }

  getPrev() {
    return this.prev;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}

export default SimpleNode;
