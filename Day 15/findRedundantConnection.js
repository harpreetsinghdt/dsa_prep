// Detect Cycle in Undirected Graph
function findRedundantConnection(edges) {
  const graph = new Map();

  function hasCycle(u, v, visited) {
    if (u === v) return true;
    visited.add(u);
    for (const neighbor of graph.get(u) || []) {
      if (!visited.has(neighbor)) {
        if (hasCycle(neighbor, v, visited)) {
          return true;
        }
      }
    }
    return false;
  }

  for (const [u, v] of edges) {
    const visited = new Set();
    if (graph.has(u) && graph.has(v) && hasCycle(u, v, visited)) {
      return [u, v];
    }
    // Add edge to graph
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  return [];
}
const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];
console.log(findRedundantConnection(edges));
