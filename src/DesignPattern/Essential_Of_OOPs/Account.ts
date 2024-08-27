// Encapsulation is all about bunddling the data and methods that operate on the data within one unit or class, and hiding the value or states of an object.
export class Account {
    private _balance: number = 0;

    public deposite(amount:number):void {
        this._balance += amount;
    }

    public withdraw(amount:number):void {
        if(this._balance < amount)
            throw new Error("Sorry! you don't have enough money!");
        this._balance -= amount;
    }
    
    public get balance(): number {
        return this._balance;
    }
    
    public set balance(balance: number) {
        if(balance < 0)
            throw new Error('Balance cannot be negative! or 0!');
        this._balance = balance;
    }
}

class Main{
    public static main():void {
        const account:Account = new Account();
        account.deposite(10);
        account.withdraw(5);
        console.log(`Balance = $${account.balance}`);
        
    }
}

Main.main();