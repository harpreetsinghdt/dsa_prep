// the number of connected components in an undirected graph,
function countComponents(n, edges) {
  const adj = new Array(n).fill().map(() => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  console.log(adj);

  const visited = new Array(n).fill(false);
  console.log(visited);
  let count = 0;

  function dfs(node) {
    visited[node] = true;
    for (const neighbor of adj[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }
  return count;
}
let n = 5,
  edges = [
    [0, 1],
    [1, 2],
    [3, 4],
  ];
console.log(n, edges);
console.log(countComponents(n, edges));
