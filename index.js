const allbtns = document.querySelectorAll(".btnn");
const eqlbtn = document.querySelector(".equal-btn");
const clearbtn = document.querySelector(".clear-btn");
const screen = document.querySelector(".scr");
const dee = document.querySelector(".del");
const modal = document.querySelector(".modal");
const blck = document.querySelector(".blackout");
const closemodal = document.querySelector(".close__modal");

let final;
let arr = [];
const calc = (inp) => {
  if (inp === "=") {
    screen.value = eval(screen.value);
    arr = [];
    arr.push(screen.value);
  } else {
    const val = inp.textContent;
    if (val === "=") {
      try {
        screen.value = eval(screen.value);
        arr = [];
        arr.push(screen.value);
      } catch (err) {
        modal.style.display = "block";
        blck.style.display = "block";
        screen.value = "";
      }
    } else {
      isequ = false;
      arr.push(val);
      final = arr.join("");
      screen.value = final;
    }
  }
};

allbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc(btn);
  });
});

clearbtn.addEventListener("click", () => {
  arr = [];
  screen.value = arr;
  screen.focus();
});
dee.addEventListener("click", () => {
  arr.pop();
  screen.value = arr.join("");
  screen.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    console.log("press enter");
    screen.focus();

    calc("=");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.code !== "Enter") {
    screen.focus();
    screen.setSelectionRange(screen.value.length, screen.value.length);
  }
});

blck.addEventListener("click", () => {
  modal.style.display = "none";
  blck.style.display = "none";
});
closemodal.addEventListener("click", () => {
  modal.style.display = "none";
  blck.style.display = "none";
});
