function minMeetingRooms(intervals) {
  console.log(intervals);
  if (!intervals || intervals.length === 0) return 0;
  const starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
  const ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b);
  console.log(starts, ends);
  let rooms = 0;
  let endPointer = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[endPointer]) {
      rooms++;
    } else {
      endPointer++;
    }
  }
  return rooms;
}
console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [1, 20],
    [6, 12],
    [3, 9],
  ])
);
