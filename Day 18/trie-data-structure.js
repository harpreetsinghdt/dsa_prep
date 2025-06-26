class TrieNode {
  constructor() {
    this.children = {}; // Key: character, Value: TrieNode
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the trie
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  // Check if a word starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  // Delete a word from the trie
  delete(word) {
    const deleteHelper = (node, word, index) => {
      console.log(index, "===", word.length);
      if (index === word.length) {
        // If word doesn't exist in trie
        if (!node.isEndOfWord) {
          return false;
        }

        node.isEndOfWord = false;

        // If node has no children, it can be deleted
        return Object.keys(node.children).length === 0;
      }

      const char = word[index];
      const childNode = node.children[char];

      console.log(char);
      console.log(childNode);
      if (!childNode) {
        return false; // Word doesn't exist
      }

      const shouldDeleteChild = deleteHelper(childNode, word, index + 1);

      if (shouldDeleteChild) {
        delete node.children[char];
        // Only delete if current node is not end of another word
        return Object.keys(node.children).length === 0 && !node.isEndOfWord;
      }

      return false;
    };

    deleteHelper(this.root, word, 0);
  }
}

// Usage example:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");

// console.log(trie.search("apple")); // true
trie.delete("apple");
// console.log(trie.search("apple")); // false
// console.log(trie.search("app")); // true
// console.log(trie.startsWith("app")); // true
