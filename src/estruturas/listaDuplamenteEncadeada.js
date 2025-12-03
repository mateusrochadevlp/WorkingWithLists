const {DoublyNode} = require ('./src/estruturas/node')

module.exports = class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    // Insere no fim
    push(element) {
        const node = new DoublyNode(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.count++;
    }
}