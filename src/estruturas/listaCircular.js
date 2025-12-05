const { SingleNode } = require('./node')

module.exports = class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    insert(element) {
        const node = new SingleNode(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            node.next = this.head;
        } else {
            this.tail.next = node;
            node.next = this.head;
            this.tail = node;
        }
        this.count++;
    }

    indexOf(element) {
        if (!this.head) return -1;

        let current = this.head;
        let index = 0;

        do {
            if (current.element === element) return index;
            current = current.next;
            index++;
        } while (current !== this.head);

        return -1;
    }
