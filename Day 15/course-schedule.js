/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
*/
function canFinish(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill().map(() => []);
  const visited = new Array(numCourses).fill(0); // 0=unvisited, 1=visiting, 2=visited

  // Build graph
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  function hasCycle(node) {
    if (visited[node] === 1) return true; // Cycle detected
    if (visited[node] === 2) return false; // Already processed

    visited[node] = 1; // Mark as visiting
    for (const neighbor of graph[node]) {
      if (hasCycle(neighbor)) {
        return true;
      }
    }
    visited[node] = 2; // Mark as visited

    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false;
    }
  }

  return true;
}
const numCourses = 2,
  prerequisites = [[1, 0]];
const numCourses1 = 2,
  prerequisites1 = [
    [1, 0],
    [0, 1],
  ];
console.log(canFinish(numCourses, prerequisites));
console.log(canFinish(numCourses1, prerequisites1));
