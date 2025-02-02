const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let prevNum = "";
const arrOper = ["+", "-", "/", "*", ".", "(", ")"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      if (display.value === "") return;
      const lastEl = display.value.slice(-1);
      if (arrOper.includes(lastEl)) {
        alert("Неверно введенные данные");
        return;
      }

      display.value = eval(display.value);
      prevNum = display.value;
      return;
    }
    if (button.textContent === "<=") {
      display.value = display.value.slice(0, -1);
			return
    }
    if (button.textContent === "c") {
      display.value = "";
      return;
    }
    if (prevNum !== "") {
      display.value = "";
      display.value += button.textContent;
      prevNum = "";
      return;
    }
    display.value += button.textContent;
  });
});
