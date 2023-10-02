class Game {
  constructor() {
    this.dataArray = [];
    this.capitalsArray = [];
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

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  async playGame() {
    await this.getData();
    const actualCountry = await this.pickARandomCountry();
    const secondCountry = await this.pickARandomCountry();
    const thirdCountry = await this.pickARandomCountry();
    this.capitalsArray.push(
      actualCountry[0].capital[0],
      secondCountry[0].capital[0],
      thirdCountry[0].capital[0]
    );
    this.shuffle(this.capitalsArray);
    console.log(actualCountry[0].name.common);
    newUIhelper.render(this.capitalsArray, actualCountry[0].name.common);
  }
}

class UIHelper {
  constructor() {
    this.buttonsDiv = document.getElementById("buttons-div");
    this.countryName = document.getElementById("country-name");
  }

  render(array, countryName) {
    this.renderCapitalButtons(array);
    this.renderCountryName(countryName);
  }

  renderCountryName(name) {
    this.countryName.textContent = name;
  }

  renderCapitalButtons(array) {
    array.forEach((arrayElement) => {
      const button = this.createButtonElement();
      button.textContent = arrayElement;
      this.buttonsDiv.appendChild(button);
    });
  }

  createButtonElement() {
    const button = document.createElement("button");
    console.log(button);
    button.classList.add("capital-button");
    return button;
  }
}

const newUIhelper = new UIHelper();
const newGame = new Game();

newGame.playGame();
