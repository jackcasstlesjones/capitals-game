async function getData() {
  const results = await fetch("https://restcountries.com/v3.1/all", {
    mode: "cors",
  });
  const betterResults = await results.json();
  return betterResults;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

async function pickARandomCountry() {
  const myData = await getData();
  const myRandomNumber = randomNumber(myData.length);
  const randomCountry = myData[myRandomNumber];
  return randomCountry;
}

async function playGame() {
  const actualCountry = await pickARandomCountry();
  const secondCountry = await pickARandomCountry();
  const thirdCountry = await pickARandomCountry();

  console.log(actualCountry.name.common),
    console.log(
      actualCountry.capital[0],
      "|",
      secondCountry.capital[0],
      "|",
      thirdCountry.capital[0]
    );
}

playGame();

pickARandomCountry();
