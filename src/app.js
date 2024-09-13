import "./style.css";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const mostradorExcusa = document.getElementById("mostradorExcusa");

function generadorExcusa() {
  const parteWho = who[Math.floor(Math.random() * who.length)];
  const parteAction = action[Math.floor(Math.random() * action.length)];
  const parteWhat = what[Math.floor(Math.random() * what.length)];
  const parteWhen = when[Math.floor(Math.random() * when.length)];

  const excuse = `${parteWho} ${parteAction} ${parteWhat} ${parteWhen}`;
  mostradorExcusa.textContent = excuse;
}

window.onload = generadorExcusa;
