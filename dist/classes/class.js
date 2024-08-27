"use strict";
class Account {
    id;
    owner;
    _balance;
    nickname;
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    set balance(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount!");
        this._balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance)
            throw new Error("You do not have enough amount.");
        this._balance -= amount;
    }
}
const account = new Account(1, 'Demis', 100);
account.deposite(1000);
console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);
account.balance = 100;
console.log(account.balance);
class SeatAssignment {
}
const seats = new SeatAssignment();
seats.A1 = "Demis";
seats.A2 = "Dereje";
seats['A3'] = 'Abebe';
seats['A4'] = 'Kebede';
class Ride {
    static _activeRides = 0;
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
const ride3 = new Ride();
ride3.start();
console.log(Ride.activeRides);
class Mathematics {
    static sin(x) {
        return Math.sin(x);
    }
}
const math = new Mathematics();
console.log(Mathematics.sin(Math.PI * 90 / 180));
console.log(Math.sinh(90));
//# sourceMappingURL=class.js.map