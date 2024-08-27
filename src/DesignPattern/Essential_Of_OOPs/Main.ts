import { TaxCalculator } from "./TaxCalculator";
import { TaxCalculator2024 } from "./TaxCalculator2024";

class Main {
    public static main():void {
        const calculator:TaxCalculator = this.getCalculator();
        const tax = calculator.calculateTax();
        console.log(`Tax = ${ tax}`);
    }

    public static getCalculator():TaxCalculator {
        return new TaxCalculator2024();
    }
}

Main.main();