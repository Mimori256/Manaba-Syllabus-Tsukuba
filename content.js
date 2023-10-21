window.onload = function () {
  //Url check
  let pattern = new RegExp("https://manaba.tsukuba.ac.jp/ct/course_[0-9]+$");
  if (pattern.test(location.href) === true) {
    const courseCode = document.getElementsByClassName("coursecode")[0].innerText;
    const now = new Date();
    const currentYear =  now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    let nendo;
    if (currentMonth < 4) {
      nendo = String(currentYear - 1);
    } else {
      nendo = String(currentYear);
    }
    const link = `https://kdb.tsukuba.ac.jp/syllabi/${nendo}/${courseCode}/jpn/`;
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

    button.style.borderStyle = "solid";
    button.style.borderColor = "#AAAAAA";
    button.style.color = "#0000FF";
    button.style.cursor = "pointer";
    button.style.marginLeft = margin;
  }
};

