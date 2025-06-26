function replaceWords(dictionary, sentence) {
  // Sort the dictionary by the length of the roots to check the shortest roots first
  dictionary.sort((a, b) => a.length - b.length);
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    for (const root of dictionary) {
      if (words[i].startsWith(root)) {
        words[i] = root;
        break; // Once the shortest root is found, move to the next word
      }
    }
  }
  return words.join(" ");
}
const dictionary = ["matt", "cat", "bat", "rat"],
  sentence = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary, sentence));
