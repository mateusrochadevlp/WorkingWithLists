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
     getElementAt(index) {
  if (index < 0 || index >= this.count) return undefined;

  let current;
  if (index < this.count / 2) {
    current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
  } else {
    current = this.tail;
    for (let i = this.count - 1; i > index; i--) {
      current = current.prev; 
    }
  }

  return current;
}
    insert(element, index) {
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
}
