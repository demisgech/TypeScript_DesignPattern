"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaxCalculator2024_1 = require("./TaxCalculator2024");
class Main {
    static main() {
        const calculator = this.getCalculator();
        const tax = calculator.calculateTax();
        console.log(`Tax = ${tax}`);
    }
    static getCalculator() {
        return new TaxCalculator2024_1.TaxCalculator2024();
    }
}
Main.main();
//# sourceMappingURL=Main.js.map