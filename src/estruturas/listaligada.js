const { defaultEquals, SingleNode } = require('./node');

module.exports = class ListaLigada {
    constructor(enqualsFn = defaultEquals) {
        this.count = 0;
        this.head = null;
        this.enqualsFn = enqualsFn;
    }
    push(element) {
        const node = new SingleNode(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node;
        }
        return undefined;
    }
    insertAt(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)

            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;

                node.next = current;
                previous.next = node
            }
            this.count++
            return true;
        }
        return false;
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < count && current != null; i++) {
            if (this.enqualsFn(element, current.element)) {
                return i;
            }
            current = current.next
        }
        return -1
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;

            if (index === 0) {
                this.head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new SingleNode(element);

            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }

            this.count++;
            return true;
        }

        return false;
    }

}