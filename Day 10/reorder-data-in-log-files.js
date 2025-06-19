/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const body = (s) => s.slice(s.indexOf(" ") + 1);
  const isNum = (c) => /\d/.test(c);

  const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));
    if (n !== 0) return n;
    return a.localeCompare(b);
  };

  const digitsLogs = [];
  const letterLogs = [];
  for (const log of logs) {
    if (isNum(body(log)[0])) {
      digitsLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }
  return [...letterLogs.sort(compare), ...digitsLogs];
};
console.log(
  reorderLogFiles([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ])
);
