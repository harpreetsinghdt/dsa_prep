function dfs(node, visited, graph) {
  if (visited.has(node)) return;
  visited.add(node);
  for (let neighbor of graph[node]) {
    dfs(neighbor, visited, graph);
  }
}
