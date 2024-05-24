function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, "0"); //padStart con toString para agregar el 0 antes de cada hora segundo o minuto
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").innerText = timeString;
}

updateClock();
setInterval(updateClock, 1000);
