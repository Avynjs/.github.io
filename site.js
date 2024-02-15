const welcomeElement = document.getElementById('welcome'); // AI Generated


const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let h1Text;

if (isMorning) {
  h1Text = "Good morning";
} else if (isAfternoon) {
  h1Text = "Good afternoon";
} else {
  h1Text = "Good evening";
}

const h1Element = welcomeElement.querySelector('h1'); // AI Generated
h1Element.innerHTML = `<h1>${h1Text}</h1>`; // AI Generated
