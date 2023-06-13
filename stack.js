/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  constructor() {
    this._array = [];
  }
  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val)
    if (this.size === 0) {
      this.top = newNode
      this._array.push(newNode)
      this.size++;
      return undefined
    } else {
      newNode.next = this._array[this.size - 1]
      this._array.push(newNode)
      this.top = newNode
      this.size++;
      return undefined
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let removedNode = this._array.pop()
    this.size--;
    return removedNode.val
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.size
  }
}

module.exports = Stack;
