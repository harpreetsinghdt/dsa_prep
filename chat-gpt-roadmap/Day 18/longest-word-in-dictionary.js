function longestWord(words) {
  const wordSet = new Set(words);
  console.log(wordSet);
  // Sort by length descending, then lexicographical order
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    } else {
      return a.localeCompare(b);
    }
  });
  console.log(words);
  for (const word of words) {
    let valid = true;
    for (let i = 1; i < word.length; i++) {
      const prefix = word.substring(0, i);
      if (!wordSet.has(prefix)) {
        valid = false;
        break;
      }
    }
    if (valid) {
      return word;
    }
  }
  return "";
}
const words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
console.log(longestWord(words));
