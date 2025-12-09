const { DoublyNode } = require('./node')

module.exports = class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    insert(element) {
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
    remove(node) {
        if (!node) return null;
        if (node.prev) node.prev.next = node.next;
        else this.head = node.next;
        if (node.next) node.next.prev = node.prev;
        else this.tail = node.prev;
        this.count--;
        return node.value;
    }
    getNext(node) { return node ? node.next : null; }

    getPrev(node) { return node ? node.prev : null; }

    ////////////////////////////////////////////////////////////////////////////
    removeByValue(element) {
        let node = this.head

        while (node) {
            if (node.element === element) {
                return this.remove(node)
            }
            node = node.next
        }
        return null
    }

    getElementAt(index) {
        if (index < 0 || index >= this.count) return undefined;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    removeAt(index) {
        if (index < 0 || index >= this.count) return undefined;

        let current;

        if (index === 0) {
            current = this.head
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null
            } else {
                this.tail = null
            }
        }
        else if (index === this.count - 1) {
            current = this.tail
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null
            }
        } else {
            current = this.getElementAt(index)
            const previous = current.prev;
            const next = current.next;
            previous.next = next;
            next.prev = previous;
        }
        this.count--;
        return current.element;
    }

    insertAt(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count
    }
}
