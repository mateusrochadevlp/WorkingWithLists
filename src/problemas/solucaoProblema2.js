const CircularLinkedList = require('../estruturas/listaCircular.js');

module.exports = class Playlist {
    constructor() {
        this.list = new CircularLinkedList();
    }

    addSong(name) {
        this.list.insert(name);
        return `Adicionando música: ${name}`;
    }

    removeSong(name) {
        const removed = this.list.remove(name);
        if (removed) return `Removendo música: ${removed}`;
        return `Música não encontrada: ${name}`;
    }

    nextSong() {
        const song = this.list.moveNext();
        if (!song) return 'Lista vazia, não há próxima música';
        return `Avançando para próxima música: ${song}`;
    }

    previousSong() {
        const song = this.list.movePrevious();
        if (!song) return 'Lista vazia, não há música anterior';
        return `Retornando para música: ${song}`;
    }

    currentSong() {
        const song = this.list.getCurrent();
        if (!song) return 'Lista vazia, nenhuma música tocando';
        return `Música atual: ${song}`;
    }

    clear() {
        this.list.clear();
        return 'Playlist limpa';
    }

    size() {
        return this.list.size();
    }

    isEmpty() {
        return this.list.isEmpty();
    }
}
