// Current day in jumbotron
var displayDay = moment().format("dddd, MMMM D YYYY");
console.log(displayDay);
$("#currentDay").append(displayDay);
// Create Calendar/Planner
console.log(moment().format("dddd, MMMM Do YYYY h:mm HH"));
var currDay = moment().format("dddd, MMMM Do YYYY h:mm HH");
console.log(currDay);
var currHour = parseInt(currDay.split(" ")[4].split(":")[0]);
console.log("Current hour: " + currHour);
// add color
// adding ids to the buttons so they can be stored
// then add the empty array for user input and push the id value of the text field into the empty array
// then run conditional statements to run through which color needs to be at what time in the array
var timeArray = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];
var userArray = ["", "", "", "", "", "", "", "", ""];
var getList = localStorage.getItem(userArray);
if (getList !== null) {
  JSON.parse(getList);
}
// function saveData () {
//     localStorage.setItem('userArry', userArray);
// }
//   Create elements on page
for (var i = 0; i < 9; i++) {
  var div1 = $("<div>");
  div1.attr("class", "input-group time-block");
  //<div class="input-group"></div>
  var div2 = $("<div>");
  div2.attr("class", "input-group-prepend hour");
  //<div class="input-group-prepend"></div>
  var span = $("<span>");
  span.attr("class", "input-group-text");
  //<span class="input-group-text" ></span>
  span.attr("id", "time");
  //<span class="input-group-text" id="time"></span>
  var textArea = $("<textarea>");
  textArea.attr("class", "form-control row description past");
  //<textarea class="form-control"></textarea>
  textArea.attr("aria-label", "With textarea");
  //<textarea class="form-control" aria-label="With textarea"></textarea>
  textArea.attr("id", `${i}`);
  //<textarea class="form-control" aria-label="With textarea" id="time-val"></textarea>
  var div3 = $("<div>");
  div3.attr("class", "input-group-append").value;
  //<div class="input-group-append"></div>
  var btn = $("<button>");
  btn.attr("class", "btn btn-outline-secondary saveBtn");
  btn.attr("type", "button");
  btn.attr("id", `${i}`);
  // btn.attr("id", "userSave");
  btn.text("Save");
  //<button class="btn btn-outline-secondary" type="button" id="button-addon2 time-btn">Submit</button>
  // Append divs:
  div2.append(span);
  div3.append(btn);
  div1.append(div2);
  div1.append(textArea);
  div1.append(div3);
  // AM or PM
  if (timeArray[i] <= 12) {
    if (timeArray[i] == 12) {
      span.text(timeArray[i] + "PM");
    } else {
      span.text(timeArray[i] + "AM");
    }
  } else {
    span.text(timeArray[i] - 12 + "PM");
  }
  $(".container").append(div1);
}
console.log(textArea.val() + "working");
//   Save button event listener - WORKING BUT TRYING SOMETHING DIFFERENT
$("button").on("click", function () {
  var info = $(this).parent("div").prev().val();
  console.log(info);
  localStorage.setItem("userArray", JSON.stringify(userArray));
  console.log($(this).val);
});
//   Time blocks change depending on current time - NOT WORKING
function futureBlockColor() {
  var futureTime = currHour + 1;
  //   var futureColor = $("textarea").css("background-color", "green")
  if (futureTime > currHour) {
    $("textarea").removeClass("past").addClass("future");
  }
}
futureBlockColor();
