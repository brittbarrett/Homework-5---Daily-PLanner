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
            <textarea class="form-control" aria-label="With textarea" id="time-val"></textarea>
            <div class="input-group-append">
                 <button class="btn btn-outline-secondary" type="button" id="button-addon2 time-btn">Submit</button>
            </div>
        </div>  */
  var timearr = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  for (var i = 0; i < 9; i++) {
    var d1 = $("<div>");
    //<div></div>
    d1.attr("class", "input-group");
    //<div class="input-group"></div>
    var d2 = $("<div>");
    //<div></div>
    d2.attr("class", "input-group-prepend");
    //<div class="input-group-prepend"></div>
    var span = $("<span>");
    //<span></span>
    span.attr("class", "input-group-text");
    //<span class="input-group-text" ></span>
    span.attr("id", "time");
    //<span class="input-group-text" id="time"></span>
    /// CODE  NOT WORKING, trying to make bar button colors
    //<span class="input-group-text" id="time">TIME</span>
    var textarea = $("<textarea>");
    // //<textarea></textarea>
    // if(currhour==timearr[i]){
    textarea.attr("class", "form-control");
    // }
    // if(currhour-timearr[i]<0){
    // }
    // if(currhour-timearr[i]>0){
    //     textarea.attr("class"," future form-control");
    // }
    //<textarea class="form-control"></textarea>
    textarea.attr("aria-label", "With textarea");
    //<textarea class="form-control" aria-label="With textarea"></textarea>
    textarea.attr("id", "time-val");
    //<textarea class="form-control" aria-label="With textarea" id="time-val"></textarea>
    var d3 = $("<div>");
    //<div></div>
    d3.attr("class", "input-group-append");
    //<div class="input-group-append"></div>
    var btn = $("<button>");
    //<button></button>
    //<button class="btn btn-outline-secondary" type="button" id="button-addon2 time-btn">Submit</button>
    btn.attr("class", "btn btn-outline-secondary");
    btn.attr("type", "button");
    btn.attr("id", "button-addon2 time-btn");
    btn.text("submit");
    d2.append(span);
    // <div class="input-group-prepend">
    //          <span class="input-group-text" id="time">Time</span>
    //     </div>
    d3.append(btn);
    // // <div class="input-group-append">
    //          <button class="btn btn-outline-secondary" type="button" id="button-addon2 time-btn">Submit</button>
    //     </div>
    d1.append(d2);
    // <div class="input-group">
    //     {/* <div class="input-group-prepend">
    //         <span class="input-group-text" id="time">Time</span>
    //     </div> */}
    // </div>
    d1.append(textarea);
    // <div class="input-group">
    //     <div class="input-group-prepend">
    //         <span class="input-group-text" id="time">Time</span>
    //     </div>
    //     <textarea class="form-control" aria-label="With textarea" id="time-val"></textarea>
    // </div>
    d1.append(d3);
    // <div class="input-group">
    //     <div class="input-group-prepend">
    //         <span class="input-group-text" id="time">Time</span>
    //     </div>
    //     <textarea class="form-control" aria-label="With textarea" id="time-val"></textarea>
    //  // <div class="input-group-append">
    //          <button class="btn btn-outline-secondary" type="button" id="button-addon2 time-btn">Submit</button>
    //     </div>
    // </div>
    if (timearr[i] <= 12) {
      if (timearr[i] == 12) {
        span.text(timearr[i] + "PM");
      } else {
        span.text(timearr[i] + "AM");
      }
    } else {
      span.text(timearr[i] - 12 + "PM");
    }
    $(".container").append(d1);
  }
}
