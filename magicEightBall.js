let userName = "";
userName === "Nicolas"
  ? console.log(`Hello, ${userName}!`)
  : console.log("Hello!");

const userQuestion = `${userName} asks: ¿Am i going to be a good programmer?`;
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

if (randomNumber === 1) {
  eightBall = "Do not count on it";
  console.log(eightBall);
} else if (randomNumber === 2) {
  eightBall = "My Sources say no";
  console.log(eightBall);
} else if (randomNumber === 3) {
  eightBall = "Outlook not so good";
  console.log(eightBall);
} else if (randomNumber === 4) {
  eightBall = "Cannot predict now";
  console.log(eightBall);
} else if (randomNumber === 5) {
  eightBall = "Reply hazy try again";
  console.log(eightBall);
} else if (randomNumber === 6) {
  eightBall = "Signs point to yes";
  console.log(eightBall);
} else if (randomNumber === 7) {
  eightBall = "It is decidedly so";
  console.log(eightBall);
} else if (randomNumber === 8) {
  eightBall = "It is certain";
  console.log(eightBall);
} else {
  console.log("Mehh");
}
