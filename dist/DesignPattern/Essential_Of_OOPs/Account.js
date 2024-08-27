"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    _balance = 0;
    deposite(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (this._balance < amount)
            throw new Error("Sorry! you don't have enough money!");
        this._balance -= amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        if (balance < 0)
            throw new Error('Balance cannot be negative! or 0!');
        this._balance = balance;
    }
}
exports.Account = Account;
class Main {
    static main() {
        const account = new Account();
        account.deposite(10);
        account.withdraw(5);
        console.log(`Balance = $${account.balance}`);
    }
}
Main.main();
//# sourceMappingURL=Account.js.map