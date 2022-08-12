// Classes Of Chance (js-5-classes-properties-and-methods)
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  brag() {
    console.log(
      "My car is a " + this.year + " " + this.brand + " " + this.model + "!"
    );
  }
}

// const myCoolCar = new Car("Ford", "Mustang", 2022);
// myCoolCar.brag();
// My car is a 2022 Ford Mustang!

class Calculator {
  addNums(num1, num2) {
    return num1 + num2;
  }
}

// const calc = new Calculator();
// calc.addNums(7, 33);
//  40

class Casino {
  constructor(name, isFakeCoin = false, timesPlayed = 0) {
    this.name = name;
    this.timesPlayed = timesPlayed;
    this.isFakeCoin = isFakeCoin;
  }

  playGame(betAmount) {
    let winnings = betAmount * (this.timesPlayed + 1);
    if (Math.random() > 0.5) {
      console.log(this.name, "WINS");
    } else {
      console.log("Player WINS! $", winnings);
    }
    this.timesPlayed += 1;
  }

  rollDie(d) {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${roll}`);
  }
}

// TESTS

const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);

// EXTRA BONUS TESTS

const myEBCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myEBCasino);
myEBCasino.rollDie();
myEBCasino.rollDie();
myEBCasino.rollDie();
myEBCasino.rollDie();
myEBCasino.rollDie();
