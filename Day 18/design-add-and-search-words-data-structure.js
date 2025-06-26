class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    return this._searchHelper(this.root, word, 0);
  }

  _searchHelper(node, word, index) {
    if (index === word.length) {
      return node.isEndOfWord;
    }
    const char = word[index];
    if (char === ".") {
      for (const childChar in node.children) {
        if (this._searchHelper(node.children[childChar], word, index + 1)) {
          return true;
        }
      }
      return false;
    } else {
      if (!node.children[char]) {
        return false;
      }
      return this._searchHelper(node.children[char], word, index + 1);
    }
  }
}

// Usage example:
const obj = new WordDictionary();
obj.addWord("bad");
obj.addWord("dad");
obj.addWord("mad");
console.log(obj.search("pad")); // false
console.log(obj.search("bad")); // true
console.log(obj.search(".ad")); // true
console.log(obj.search("b..")); // true
