"use strict";
const faqBoxClass = document.getElementsByClassName("box");

// fucntion to reset previous opened question
function resetClass() {
  for (const ele of faqBoxClass) {
    ele.classList.remove("open");
  }
}

// adding onclick event on question row
for (const ele of faqBoxClass) {
  ele.children[0].onclick = () => {
    if (ele.classList.contains("open")) {
      ele.classList.remove("open");
    } else {
      resetClass();
      ele.classList.add("open");
    }
  };
}
