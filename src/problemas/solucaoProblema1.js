const DoublyLinkedList = require('../estruturas/listaDuplamenteEncadeada');

module.exports = class windowsManager {
    constructor() {
        this.windows = new DoublyLinkedList()
        this.current = null
    }
    openWindow(title) {
        this.windows.insert(title)
        this.current = this.windows.tail
    }
    closeCurrentWindow() {
        if (!this.current) return null;

        const next = this.current.next;
        const prev = this.current.prev;

        let node = this.windows.head;
        let index = 0;
        while (node && node !== this.current) {
            node = node.next;
            index++;
        }

        this.windows.removeAt(index);

        if (next) this.current = next;
        else if (prev) this.current = prev;
        else this.current = null;
    }

    nextWindow() {
        if (this.current && this.current.next) {
            this.current = this.current.next
        }
    }
    previousWindow() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev
        }
    }
    currentWindow() {
        if (this.current) {
            return this.current.element
        }
        return null
    }
    closeAll() {
        this.windows.clear()
        this.current = null
    }
}