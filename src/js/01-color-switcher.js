function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startBtn = document.querySelector("button[data-start]");
  const stopBtn = document.querySelector("button[data-stop]");
  const body = document.querySelector("body");

  startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    console.log(`START Interval: ${Math.random()}`);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}, 1000);
  });

  stopBtn.addEventListener("click", () => {
      clearInterval(timerId);
      console.log(`STOP!!! Interval with ID ${timerId}`);
       stopBtn.disabled = true;
       startBtn.disabled = false;
  });