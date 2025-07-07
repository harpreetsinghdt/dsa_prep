/**
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 */
class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}
function cloneGraph(node) {
  if (!node) return null;

  const visited = new Map();

  function dfs(original) {
    if (visited.has(original)) {
      return visited.get(original);
    }

    const clone = new Node(original.val);
    visited.set(original, clone);

    for (const neighbor of original.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}
const adjList = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];
const node = new Node(adjList);
console.log(node);
console.log(cloneGraph(node));
