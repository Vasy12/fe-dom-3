"use strict";

const buttons = document.getElementsByTagName("button");

const btnClickHandler = (event) => {
  console.dir(event.target.dataset);
};

for (const btn of buttons) {
  btn.onclick = btnClickHandler;
}
