// // Exercise - Shooting Game

// // ● Specifications :
//     ○ Create a shooting game between two player
//     ○ Each player has three properties : name, health and power
//     ○ Each player will take turns to shooting
//     ○ Before shooting, players get a chance to get random items (health +10 or power +10)
//     ○ The game will continue until one of the players has health < 0
// // ● Requirements : 
//     ○ Create ShootingGame & Player class
//     ○ ShootingGame class : 
//         ■ constructor(player1, player2) → player objects as a parameter
//         ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
//         ■ start() → start shooting games
//     ○ Player class :
//         ■ Property → name, health (default 100), power (default 10)
//         ■ hit(power) → subtract player health
//         ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
//         ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
//     ○ ShootingGame start() function flow :
//         ■ In every turn :
//             ● Show each player status before shooting
//             ● Get random item for each player before shooting
//             ● Show each player status after shooting
//             ■ Show winner name


class ShootingGame {
    constructor (Player1,Player2) {
        this.Player1 = Player1;
        this.Player2 = Player2;
    }
    getRandomItem() {
        const randomItem = (Math.floor(Math.random() *4));
        switch(randomItem) {
            case 1 : return {health : 10, power : 0}
            break;
            case 2 : return {health : 0, power : 10}
            break;
            case 3 : return {health : 10, power : 10}
            break;
            default: return {health : 0, power : 0}
        }
    }

    start() {
        this.Player1.showStatus()
        this.Player2.showStatus();
        console.log(`\n Item added to each Player \n`)
        this.Player1.useItem(this.getRandomItem());
        this.Player2.useItem(this.getRandomItem());
        // this.Player1.showStatus()
        // this.Player2.showStatus();
        while (this.Player2.health >= 0) {
            // console.log(this.Player2.name + " hit " + this.Player1.name);
            this.Player1.hit(this.Player2.power);
            // this.Player1.showStatus()
            if (this.Player1.health <= 0) break;
            // console.log(this.Player1.name + " hit " + this.Player2.name);
            this.Player2.hit(this.Player1.power);
            // this.Player2.showStatus();
        } 
        if (this.Player1.health == this.Player2.health) console.log("Tie")
        if (this.Player1.health > this.Player2.health) console.log(`Congrats ${this.Player1.name} You Are The Winner`)
        else if (this.Player1.health < this.Player2.health) console.log(`Congrats ${this.Player2.name} You Are The Winner`)
    }

}

class Player {
    health = 100;
    power = 10;
    
    constructor (name) {
        this.name = name;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`Player ${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }

}

const player1 = new Player('Randi');
const player2 = new Player('Totok');

const shootingFuncGame = new ShootingGame(player1,player2);

shootingFuncGame.start();

console.log(shootingFuncGame.getRandomItem());

// ● Specifications :
//     ○ Create a program to calculate total salary based on employee type
//     ○ There are two types of employee : full-time & part-time
//     ○ Salary for full-time employee : 
//         ■ IDR 100.000 / hour
//         ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
//     ○ Salary for part-time employee : 
//         ■ IDR 50.000 / hour
//         ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
//     ○ Create an Employee as a parent class
//     ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
//         ■ Create a method in that class to add working hour per day
//         ■ Create a method in that class to calculate total salary
//     ○ Use inheritance concept


class Employee {
    constructor (baseSalary,partTime) {
        
    }
}

class FulltimeEmployee {
    
}

class ParttimeEmployee {

}