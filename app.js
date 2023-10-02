class Game {
  constructor() {
    this.dataArray = [];
  }

  async getData() {
    const results = await fetch("https://restcountries.com/v3.1/all", {
      mode: "cors",
    });
    const betterResults = await results.json();
    this.dataArray = betterResults;
  }

  randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  async pickARandomCountry() {
    const myRandomNumber = this.randomNumber(this.dataArray.length);
    const randomCountry = this.dataArray.splice(myRandomNumber, 1);
    return randomCountry;
  }

  async playGame() {
    await this.getData();
    const actualCountry = await this.pickARandomCountry();
    const secondCountry = await this.pickARandomCountry();
    const thirdCountry = await this.pickARandomCountry();

    console.log(actualCountry[0].name.common),
      console.log(
        actualCountry[0].capital[0],
        "|",
        secondCountry[0].capital[0],
        "|",
        thirdCountry[0].capital[0]
      );
  }
}

const newGame = new Game();

newGame.playGame();
