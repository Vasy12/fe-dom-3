"use strict";

const btnClickHandler = ({ target, currentTarget }) => {
  alert();
};

for (const btn of document.getElementsByTagName("button")) {
  btn.addEventListener("click", btnClickHandler);
}
