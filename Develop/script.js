createCal();
console.log(moment().format("dddd, MMMM Do YYYY h:mm HH"));
var day = moment().format("dddd, MMMM Do YYYY h:mm HH");
console.log(day);
var currhour = parseInt(day.split(" ")[4].split(":")[0]);
console.log("curr hr: " + currhour);
function createCal() {
  /* <div class="input-group">
            <div class="input-group-prepend">
                 <span class="input-group-text" id="time">Time</span>
            </div>
            <textarea class="user-input" aria-label="With textarea" id="time-value"></textarea>
            <div class="input-group-append">
                 <button class="btn btn-outline-secondary" type="button" id="button-addon2 time-btn">Submit</button>
            </div>
        </div>  */
  var timearr = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  //   Creating divs for the rows of the day planner
  for (var i = 0; i < 9; i++) {
    // first div
    var div1 = $("<div>");
    div1.attr("class", "input-group");

    // second div
    var div2 = $("<div>");
    div2.attr("class", "input-group-prepend");

    // span element
    var span = $("<span>");
    span.attr("class", "input-group-text");
    span.attr("id", "time");

    // user input variable
    var textArea = $("<textarea>");
    textArea.attr("class", "user-input");
    textArea.attr("aria-label", "With textarea");
    textArea.attr("id", "time-value");

    // thiird div
    var div3 = $("<div>");
    div3.attr("class", "input-group-append");

    // save button
    var saveBtn = $("<button>");
    saveBtn.attr("class", "btn btn-outline-secondary");
    saveBtn.attr("type", "button");
    saveBtn.attr("id", "button-addon2 time-btn");
  }
}
