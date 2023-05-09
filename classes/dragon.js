class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) {
    return dragons.map(dragon => dragon.name);
  }
}

//local testing
const puff = new Dragon("Puff", "green");
console.log(puff); //Dragon { name: 'Puff', color: 'green' }
console.log(puff.breathesFire()); //Puff breathes fire everywhere! BURN!!!!

const toothless = new Dragon("Toothless", "black");
console.log(toothless);//Dragon { name: 'Toothless', color: 'black' }
console.log(toothless.breathesFire());//Toothless breathes fire everywhere! BURN!!!!

console.log(Dragon.getDragons(puff, toothless));//[ 'Puff', 'Toothless' ]
//

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
