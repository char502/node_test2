var moment = require("moment");

console.log("Hello from JavaScript!");

document.getElementById("clickme").onclick = function printTime() {
  document.getElementById("demo").innerHTML =
    "You clicked the button at: " + moment().format("h:mm:ss a");
};

// console.log(
//   moment()
//     .startOf("day")
//     .fromNow()
// );
