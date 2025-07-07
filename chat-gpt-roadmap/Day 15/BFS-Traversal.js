function bfs(start, graph) {
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length) {
    const node = queue.shift();
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
