import flatpickr from "../../node_modules/flatpickr/";
import "../../node_modules/flatpickr/dist/flatpickr.min.css";

const data = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const field = document.querySelectorAll(".field");
const days = document.querySelector(".value[data-days]");
const hours = document.querySelector(".value[data-hours]");
const minutes = document.querySelector(".value[data-minutes]");
const seconds = document.querySelector(".value[data-seconds]");

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let selectedDate = selectedDates[0].getTime();
        let date = new Date();
        let todayDate = date.getTime();
    
        if (selectedDate < todayDate) {
          alert('Please choose a date in the future');
          startBtn.disabled = true;
        } else {
          startBtn.disabled = false;
          const countdown = event => {
            event.preventDefault();
            const currentCounter = setInterval(() => {
              let ms = selectedDate - new Date().getTime();
              startBtn.disabled = true;
              convertMs(ms);
    
              days.textContent = addLeadingZero(String(convertMs(ms).days));
              hours.textContent = addLeadingZero(String(convertMs(ms).hours));
              minutes.textContent = addLeadingZero(String(convertMs(ms).minutes));
              seconds.textContent = addLeadingZero(String(convertMs(ms).seconds));
    
              if (
                convertMs(ms).days === 0 &&
                convertMs(ms).hours === 0 &&
                convertMs(ms).minutes === 0 &&
                convertMs(ms).seconds === 0
              ) {
                console.log("Counter stop");
                clearInterval(currentCounter);
              }
            }, 1000);
          };
    
          startBtn.addEventListener('click', countdown);
        }
    }
  };

  flatpickr(data, options);

  function addLeadingZero(value) {
    if (value < 10) {
      return value.padStart(2, '0');
    } else {
      return value;
    }
  }
  