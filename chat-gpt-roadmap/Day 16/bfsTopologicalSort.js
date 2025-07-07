// Kahn’s Algorithm (BFS-based Topo Sort)
function bfsTopologicalSort(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  console.log(graph);
  const inDegree = new Array(numCourses).fill(0);
  console.log(inDegree);
  for (const [v, u] of prerequisites) {
    // console.log(v, u);
    graph[u].push(v);
    inDegree[v]++;
    // console.log(inDegree);
  }
  console.log(graph);
  console.log(inDegree);

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  console.log(queue);

  const result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
    console.log(queue);
  }
  console.log(result);
  return result.length === numCourses ? result : [];
}
// const numCourses = 2,
//   prerequisites = [[1, 0]];
// const numCourses = 2,
//   prerequisites = [
//     [1, 0],
//     [0, 1],
//   ];
const numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
console.log(bfsTopologicalSort(numCourses, prerequisites));
