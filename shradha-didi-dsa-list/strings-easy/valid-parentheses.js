const isValid = (s) => {
  let stack = [];
  let map = { ")": "(", "}": "{", "]": "[" };
  for (let char of s) {
    console.log("char=", char);
    if (char in map) {
      console.log(char, map[char]);
      const top = stack.length ? stack.pop() : "#";
      console.log("top", top);
      if (map[char] !== top) {
        return false;
      }
    } else {
      console.log(char, map[char], "pushed to stack");
      stack.push(char);
      console.log(stack, "stack");
    }
  }
  return stack.length === 0;
};
// const s = "()[]{}";
// const s = "(]";
const s = "([])";
console.log(isValid(s));
