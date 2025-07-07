function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [word, steps] = queue.shift();

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const next =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        console.log("slice=", word.slice(0, i));
        console.log("next=", next);
        if (wordSet.has(next)) {
          if (next === endWord) return steps + 1;
          queue.push([next, steps + 1]);
          console.log("push=", [next, steps + 1]);
          wordSet.delete(next); // avoid revisiting
        }
      }
    }
  }

  return 0;
}
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList));
