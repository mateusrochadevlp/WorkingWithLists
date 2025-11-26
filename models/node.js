class DoublyNode {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}
class SingleNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
module.exports = { DoublyNode, SingleNode };
