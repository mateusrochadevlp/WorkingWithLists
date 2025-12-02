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
function defaultEquals(a, b) {
return a === b;
}
module.exports = { DoublyNode, SingleNode, defaultEquals };