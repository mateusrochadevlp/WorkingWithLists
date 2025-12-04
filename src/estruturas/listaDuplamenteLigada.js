class DoublyNode {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

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

    // Insere em uma posição específica
    insert(element, index) {
        if (index < 0 || index > this.count) return false;

        const node = new DoublyNode(element);

        if (index === 0) {
            // início
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }

        } else if (index === this.count) {
            // fim
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;

        } else {
            // meio
            const previous = this.getElementAt(index - 1);
            const nextNode = previous.next;

            node.next = nextNode;
            node.prev = previous;

            previous.next = node;
            nextNode.prev = node;
        }

        this.count++;
        return true;
    }

    // Obtém nó pelo índice
    getElementAt(index) {
        if (index < 0 || index >= this.count) return undefined;

        let current;

        // otimização
        if (index < this.count / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) current = current.next;
        } else {
            current = this.tail;
            for (let i = this.count - 1; i > index; i--) current = current.prev;
        }

        return current;
    }

    // Remove em uma posição
    removeAt(index) {
        if (index < 0 || index >= this.count) return undefined;

        let current;

        if (index === 0) {
            current = this.head;
            this.head = this.head.next;

            if (this.head) this.head.prev = null;
            else this.tail = null; // era o único

        } else if (index === this.count - 1) {
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;

        } else {
            current = this.getElementAt(index);
            const previous = current.prev;
            const nextNode = current.next;

            previous.next = nextNode;
            nextNode.prev = previous;
        }

        this.count--;
        return current.element;
    }

    // Remove um elemento específico
    remove(element) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.element === element) {
                return this.removeAt(index);
            }
            index++;
            current = current.next;
        }

        return undefined;
    }

    // Busca índice
    indexOf(element) {
        let current = this.head;
        let i = 0;

        while (current) {
            if (current.element === element) return i;
            current = current.next;
            i++;
        }

        return -1;
    }

    // Tamanho
    size() {
        return this.count;
    }

    // Vazio?
    isEmpty() {
        return this.size() === 0;
    }

    // Converter para string
    toString() {
        if (!this.head) return "";

        let objString = `${this.head.element}`;
        let current = this.head.next;

        while (current) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }

        return objString;
    }

    // String reversa
    reverseToString() {
        if (!this.tail) return "";

        let objString = `${this.tail.element}`;
        let current = this.tail.prev;

        while (current) {
            objString = `${objString}, ${current.element}`;
            current = current.prev;
        }

        return objString;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
};
