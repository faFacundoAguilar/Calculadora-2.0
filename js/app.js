let screen = document.querySelector("#result");

VanillaTilt.init(document.querySelector(".container"), {
  max: 11,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});

function getData(ref) {
  screen.value += ref.value;
}

function clean() {
  screen.value = "";
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    console.log(error);
    setTimeout(() => {
      clean();
    }, 1500);
  }
}