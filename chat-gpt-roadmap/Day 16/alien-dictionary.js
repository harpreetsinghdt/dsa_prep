// Topological Sort (Kahn's Algorithm)
function alienOrder(words) {
  // Build graph and in-degree map
  const graph = new Map();
  const inDegree = new Map();

  // Initialize data structures
  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) {
        graph.set(char, new Set());
        inDegree.set(char, 0);
      }
    }
  }

  // Build edges
  for (let i = 1; i < words.length; i++) {
    const word1 = words[i - 1];
    const word2 = words[i];
    const minLen = Math.min(word1.length, word2.length);

    // Check for invalid ordering (prefix comes after)
    if (word1.length > word2.length && word1.startsWith(word2)) {
      return "";
    }

    for (let j = 0; j < minLen; j++) {
      const char1 = word1[j];
      const char2 = word2[j];

      if (char1 !== char2) {
        if (!graph.get(char1).has(char2)) {
          graph.get(char1).add(char2);
          inDegree.set(char2, inDegree.get(char2) + 1);
        }
        break; // Only the first differing character matters
      }
    }
  }

  // Kahn's algorithm for topological sort
  const queue = [];
  let result = "";

  // Add nodes with 0 in-degree to queue
  for (const [char, degree] of inDegree) {
    if (degree === 0) {
      queue.push(char);
    }
  }

  while (queue.length) {
    const char = queue.shift();
    result += char;

    for (const neighbor of graph.get(char)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Check if topological sort includes all characters
  return result.length === graph.size ? result : "";
}
