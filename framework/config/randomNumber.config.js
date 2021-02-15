function randomNumber(digits) {
  return Math.floor(Math.random() * 10 ** digits).toString();
}

function randomMonth() {
  return (Math.floor(Math.random() * (13 - 1)) + 1).toString();
}

function randomYear() {
  return (Math.floor(Math.random() * (2042 - 2022)) + 2022).toString();
}

export { randomNumber, randomMonth, randomYear };
