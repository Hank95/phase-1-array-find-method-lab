const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
  //...
];

function superbowlWin(arr) {
  console.log(arr);
  let win = arr.find((el) => el.result === "W");
  if (win === undefined) return;
  else return win.year;
}

console.log(superbowlWin(record));
