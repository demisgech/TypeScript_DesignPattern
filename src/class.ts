
class Account {
    // readonly id:number;
    // public owner:string;
    // private _balance:number;
    nickname?: string;
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    set balance(balance:number) {
        this._balance = balance;
    }
    get balance(): number {
        return this._balance;
    }

    deposite(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount!");

        this._balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance)
            throw new Error("You do not have enough amount.");
        this._balance -= amount;
    }
}

const account = new Account(1, 'Demis', 100);
account.deposite(1000);
console.log(account.balance);


console.log(typeof account);
console.log(account instanceof Account); // True

account.balance = 100;
console.log(account.balance);


class SeatAssignment {
    // index signiture propertity
    [seatNumber:string]:string;
}

const seats = new SeatAssignment();
// Dot notation
seats.A1 = "Demis";
seats.A2 = "Dereje";
//Bracket notation
seats['A3'] = 'Abebe';
seats['A4'] = 'Kebede';

class Ride {
    // Static member declaration
   private static _activeRides:number = 0;
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }

   static get activeRides(){
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
    static sin(x:number):number {
        return Math.sin(x);
    }
}
const math = new Mathematics()
console.log(Mathematics.sin(Math.PI*90/180));
console.log(Math.sinh(90));
