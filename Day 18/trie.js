// Trie node class
class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isLeaf = false;
  }
}

// Trie class
class Trie {
  constructor() {
    this.node = new TrieNode();
  }

  // Insert a key into the trie
  insert(key) {
    let node = this.node;
    for (let c of key) {
      let index = c.charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[index] === null) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.isLeaf = true;
  }

  // Search a key in the trie
  search(key) {
    let node = this.node;
    for (let c of key) {
      let index = c.charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[index] === null) {
        return false;
      }
      node = node.children[index];
    }
    return node.isLeaf;
  }

  // Check if a prefix exists in the trie
  isPrefix(prefix) {
    let node = this.node;
    for (let c of prefix) {
      let index = c.charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[index] === null) {
        return false;
      }
      node = node.children[index];
    }
    return true;
  }
}
const trie = new Trie();
// console.log(trie);
// const arr = ["and", "ant", "do", "dad"];
// for (let s of arr) {
//   trie.insert(s);
// }

trie.insert("and");
trie.insert("an");
trie.insert("do");
trie.insert("dad");
// console.log(trie.node.children[0].children[13].children[3]);
// console.log(trie.node);

// One by one search strings
const searchKeys = ["do", "gee", "bat"];
console.log(
  searchKeys.map((s) => (trie.search(s) ? "true" : "false")).join(" ")
);

// console.log(trie.search("do"));
// console.log(trie.search("gee"));
// console.log(trie.search("bat"));
// console.log(trie.search("an"));

console.log(trie.isPrefix("an"));
// One by one search for prefixes
const prefixKeys = ["ge", "ba", "do", "de"];
console.log(
  prefixKeys.map((s) => (trie.isPrefix(s) ? "true" : "false")).join(" ")
);
