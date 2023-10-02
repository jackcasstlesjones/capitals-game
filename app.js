let dataArray = [];

async function getData() {
  const results = await fetch("https://restcountries.com/v3.1/all", {
    mode: "cors",
  });
  const betterResults = await results.json();
  dataArray = betterResults;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

async function pickARandomCountry() {
  const myRandomNumber = randomNumber(dataArray.length);
  const randomCountry = dataArray.splice(myRandomNumber, 1);
  return randomCountry;
}

async function playGame() {
  await getData();
  const actualCountry = await pickARandomCountry();
  const secondCountry = await pickARandomCountry();
  const thirdCountry = await pickARandomCountry();

  console.log(actualCountry[0].name.common),
    console.log(
      actualCountry[0].capital[0],
      "|",
      secondCountry[0].capital[0],
      "|",
      thirdCountry[0].capital[0]
    );
}

playGame();
