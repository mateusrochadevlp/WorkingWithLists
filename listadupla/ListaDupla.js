const SingleNode = require("../models/node");
const Lista = require("../listaordenada/listaordenada");

class DoublyLinkedList {
  constructor(enqualsFn = defaultEnquals) {
    this.list = new Lista(enqualsFn);
    this.prev = null;
  }
}
