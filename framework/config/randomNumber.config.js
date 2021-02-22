function randomNumber(digits) {
  const helper = 10 ** digits * 0.9 - 1;
  return Math.floor(Math.random() * helper + 10 ** (digits - 1)).toString();
}

function randomMonth() {
  return (Math.floor(Math.random() * (13 - 1)) + 1).toString();
}

function randomYear() {
  return (Math.floor(Math.random() * (2042 - 2022)) + 2022).toString();
}

export { randomNumber, randomMonth, randomYear };
