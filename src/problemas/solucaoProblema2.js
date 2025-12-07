const CircularLinkedList = require('../estruturas/listaCircular.js');

module.exports = class Playlist {
    constructor() {
        this.list = new CircularLinkedList();
    }

    addSong(name) {
        this.list.insert(name);
    }

    removeSong(name) {
        return this.list.remove(name);
    }

    nextSong() {
        return this.list.moveNext();
    }

    previousSong() {
        return this.list.movePrevious();
    }

    currentSong() {
        return this.list.getCurrent();
    }
}
