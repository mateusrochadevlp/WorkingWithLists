const Playlist = require('../problemas/solucaoProblema2.js');

const playlist = new Playlist();

console.log("=== TESTE 1: Inserção de músicas ===");
console.log(playlist.addSong("Música A"));
console.log(playlist.addSong("Música B"));
console.log(playlist.addSong("Música C"));

console.log("\n=== TESTE 2: Avançar circularmente ===");
console.log(playlist.currentSong());
console.log(playlist.nextSong());
console.log(playlist.nextSong());
console.log(playlist.nextSong());


console.log("\n=== TESTE 3: Retroceder circularmente ===");
console.log(playlist.previousSong());
console.log(playlist.previousSong());
console.log(playlist.previousSong());
console.log(playlist.previousSong());

console.log("\n=== TESTE 4: Remoção da música atual ===");
console.log(playlist.currentSong());
console.log(playlist.removeSong(playlist.list.getCurrent()));
console.log(playlist.currentSong());
console.log(`Tamanho: ${playlist.size()}`);

console.log("\n=== TESTE 5: Remover primeira música ===");
console.log(playlist.removeSong("Música A"));
console.log(playlist.currentSong());
console.log(`Tamanho: ${playlist.size()}`);

console.log("\n=== TESTE 6: Remover última música ===");
console.log(playlist.removeSong("Música B"));
console.log(`Tamanho: ${playlist.size()}`);
console.log(`Lista vazia : ${playlist.isEmpty()}`);
console.log(playlist.currentSong());

console.log("\n=== TESTE 7: Lista com 1 música ===");
console.log(playlist.addSong("Música Única"));
console.log(playlist.currentSong());
console.log(playlist.nextSong());
console.log(playlist.previousSong());

console.log("\n=== TESTE 8: Lista vazia e clear() ===");
console.log(playlist.clear());
console.log(`Tamanho: ${playlist.size()}`);
console.log(`Lista vazia: ${playlist.isEmpty()}`);
console.log(playlist.currentSong());

console.log("\n=== TESTE 9: Avançar e retroceder circularmente ===");
console.log(playlist.addSong("M1"));
console.log(playlist.addSong("M2"));
console.log(playlist.addSong("M3"));
console.log(playlist.currentSong());
console.log(playlist.previousSong());
console.log(playlist.nextSong());

console.log(playlist.list.tail.next === playlist.list.head)