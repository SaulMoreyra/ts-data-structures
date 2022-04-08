interface IStructure<T extends Object> {
  toArray: () => T[];
  getSize: () => number;
  isEmpty: () => boolean;
}

export default IStructure;
