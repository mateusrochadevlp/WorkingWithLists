const DoublyLinkedList = require('../estruturas/listaDuplamenteEncadeada.js');
const windowsManager = require('../problemas/solucaoProblema1.js');

console.log("==== TESTE: Abertura de Janelas ====");

const wm = new windowsManager();

wm.openWindow("Janela A");
wm.openWindow("Janela B");
wm.openWindow("Janela C");

console.log("Tamanho:", wm.windows.size());
console.log("Atual:", wm.currentWindow());

console.log("\n==== TESTE: Trocar de janela para frente ====");
wm.currentNode = wm.windows.head;
console.log("Inicial:", wm.currentWindow());
wm.nextWindow();
wm.nextWindow();

console.log("\n==== TESTE: Trocar de janela para trás ====");
wm.previousWindow();
wm.previousWindow();

console.log("\n==== TESTE: Fechar janela atual (caso obrigatório) ====");
wm.windows.clear();
wm.openWindow("A");
wm.openWindow("B");
wm.openWindow("C");

wm.currentNode = wm.windows.head.next;
console.log("Ativa antes:", wm.currentWindow());
wm.closeCurrentWindow();

console.log("Tamanho:", wm.windows.size());

console.log("\nTeste fechar primeira janela");
wm.currentNode = wm.windows.head;
wm.closeCurrentWindow();

console.log("\nTeste fechar última janela");
wm.closeCurrentWindow();

console.log("\n==== TESTE: Fechar todas as janelas ====");
wm.openWindow("X");
wm.openWindow("Y");
wm.openWindow("Z\n");

wm.closeAll();

console.log("Atual:", wm.currentWindow());
wm.nextWindow();
wm.previousWindow();

console.log("\n==== TESTES DE MÉTODOS ACESSÓRIOS ====");

wm.openWindow("Nova");
console.log("size:", wm.windows.size());
console.log("isEmpty:", wm.windows.isEmpty());
wm.windows.clear();
console.log("isEmpty após clear:", wm.windows.isEmpty());
