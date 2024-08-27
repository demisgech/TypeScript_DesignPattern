import { TaxCalculator } from "./TaxCalculator";

export class TaxCalculator2024 implements TaxCalculator  {
    public calculateTax():number {
        return 1;
    }
 
    public calculateInsurance():number {
        return 0;
    }
}