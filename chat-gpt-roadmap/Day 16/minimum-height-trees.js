function findMinHeightTrees(n, edges) {
  if (n === 1) return [0];

  // Build adjacency list and degree count
  const adj = new Array(n).fill().map(() => []);
  const degree = new Array(n).fill(0);

  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  // Initialize queue with leaf nodes (degree = 1)
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      leaves.push(i);
    }
  }

  // Trim leaves until we reach centroids
  let remainingNodes = n;
  while (remainingNodes > 2) {
    remainingNodes -= leaves.length;
    const newLeaves = [];

    for (const leaf of leaves) {
      for (const neighbor of adj[leaf]) {
        degree[neighbor]--;
        if (degree[neighbor] === 1) {
          newLeaves.push(neighbor);
        }
      }
    }

    leaves = newLeaves;
  }

  return leaves;
}
const n = 6,
  edges = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
    // [2, 6],
  ];
console.log(findMinHeightTrees(n, edges));
