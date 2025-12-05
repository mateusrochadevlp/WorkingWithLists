const DoublyLinkedList = require('../estruturas/listaDuplamenteEncadeada');

module.exports = class windowsManager {
    constructor() {
        this.windows = new DoublyLinkedList()
        this.current = null
    }
    openWindow(title) {
        this.windows.push(title)
        this.current = this.windows.tail
    }
    closeCurrentWindow() {
        if (!this.current) return null

        let node = this.windows.head;
        let index = 0;

        while( node && node !== this.current) {
            node = node.next
            index++
        }
        const prev = this.current.prev
        const next = this.current.next

        this.windows.removeAt(index)
        
        if (next !== null && next !== undefined) {
            this.current = this.current.next
        } else if (prev !== null && prev !== undefined){
            this.current = this.current.prev
        } else {
            this.current = null
        }

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
    clearAll() {
        this.windows.clear()
        this.current = null
    }
}