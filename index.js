document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".burgers");
  const responsiveMenu = document.querySelector(".responsive-nav");
  let clickedStatus = true;
  const Clicked = () => {
    clickedStatus = !clickedStatus;
    if (clickedStatus) {
      responsiveMenu.style.display = "none";
    } else {
      responsiveMenu.style.display = "flex";
    }
  };

  menu.addEventListener("click", Clicked);

  const parentDiv = document.querySelector(".email-time");
  const dateConstructor = new Date();

  const dayOfWeek = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  const day = dayOfWeek[dateConstructor.getDay()];
  let timeHours = dateConstructor.getUTCHours();
  let timeMinutes = dateConstructor.getUTCMinutes();
  timeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes;
  let Currenttime = `${timeHours}:${timeMinutes}`;
  const newDiv = document.createElement("p");
  newDiv.setAttribute("data-testid", "currentTimeUTC");
  const dayDiv = document.createElement("p");
  dayDiv.setAttribute("data-testid", "currentDay");
  dayDiv.textContent = `${day}`;
  newDiv.textContent = `- ${Currenttime} - `;
  parentDiv.appendChild(newDiv);
  parentDiv.appendChild(dayDiv);
  setInterval(() => {
    Currenttime = `${timeHours}:${timeMinutes + 1}`;
  }, 60000);
});
