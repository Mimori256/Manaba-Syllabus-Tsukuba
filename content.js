window.onload = function () {
  //Url check
  let pattern = new RegExp("https://manaba.tsukuba.ac.jp/ct/course_[0-9]+$");
  if (pattern.test(location.href) === true) {
    const courseCode = document.getElementsByClassName("coursecode")[0].innerText;
    console.log(courseCode);
    const link = "https://kdb.tsukuba.ac.jp/syllabi/2023/" + courseCode + "/jpn/";
    const courseNameLength = document.getElementById("coursename").title.length;
    let button = document.createElement("button");
  
    button.innerText = "シラバス";
    button.onclick = function () {
      window.open(link, "_blank");
    };
  
    let header = document.getElementsByClassName(
      "pageheader-course-coursename"
    )[0];
    header.appendChild(button);
  
    //Define style
    const marginRem = 20 - (courseNameLength / 1.5);
    let margin = "";
  
    if (marginRem < 0) {
      margin = "0rem";
    } else {
      margin = String(marginRem) + "rem";
    }
  
  
    document.querySelector("button").style.marginLeft = margin;
    document.querySelector("button").style.color = "#0000FF";
    document.querySelector("button").style.borderStyle = "solid";
    document.querySelector("button").style.borderColor = "#AAAAAA";
  }
};

