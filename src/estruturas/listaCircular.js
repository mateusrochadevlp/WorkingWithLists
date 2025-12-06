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

            this.currentNode = node;
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

    getCurrent() {
        if (!this.currentNode) return null;
        return this.currentNode.element;
    }

    moveNext() {
        if (!this.currentNode) return null;
        this.currentNode = this.currentNode.next;
        return this.currentNode.element;
    }

    movePrevious() {
        if (!this.currentNode) return null;

        let previous = this.head;

        while (previous.next !== this.currentNode) {
            previous = previous.next;
        }

        this.currentNode = previous;
        return this.currentNode.element;
    }
    getElementAt(index) {
        if (index < 0 || index >= this.count) return null;
        let current = this.head;

        for (let i = 0; i < index; i++) current = current.next;

        return current;
    }
    remove(element) {
        const index = this.indexOf(element);
        if (index === -1) return false;
        
        return this.removeAt(index);
    }

}

