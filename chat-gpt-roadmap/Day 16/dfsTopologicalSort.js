// DFS-Based Topological Sort
function dfsTopoSort(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  console.log(graph);
  for (let [v, u] of prerequisites) graph[u].push(v);
  console.log(graph);
  const visited = new Set();
  const visiting = new Set(); // For cycle detection
  const result = [];

  function dfs(node) {
    if (visiting.has(node)) return false; // cycle
    if (visited.has(node)) return true;

    visiting.add(node);
    for (let neighbor of graph[node]) {
      if (!dfs(neighbor)) return false;
    }
    visiting.delete(node);
    visited.add(node);
    result.push(node);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return result.reverse();
}
const numCourses = 5,
  prerequisites = [
    [3, 2],
    [1, 0],
    [3, 1],
    [2, 1],
    [2, 0],
    [2, 3],
    [3, 0],
  ];
console.log(dfsTopoSort(numCourses, prerequisites));
