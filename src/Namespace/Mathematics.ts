// Namespace in TypeScript
 namespace Maths {
    export namespace Trigonometric {
         const radian = 57.293578;
        
        export function sine(x:number):number {
            return Number(Math.sin(x/radian).toPrecision(4));
        }

        export function cosine(x:number):number {
            return Number(Math.cos(x/radian).toPrecision(4));
        }

        export function tangent(x:number):number {
            return Number(Math.tan(x/radian).toPrecision(4));
        }

        export function cotangent(x:number):number {
            return Number((1/Math.tan(x/radian)).toPrecision(4));
        }

        export function cosecant(x:number):number {
            return Number((1/Math.sin(x/radian)).toPrecision(4));
        }

        export function secant(x:number):number {
            return Number((1/Math.cos(x/radian)).toPrecision(4));
        }
    }
    
    export namespace Hyperbolic {
        export function sineH(x:number):number {
            return Math.sinh(x);
        }
        export function cosineH(x:number):number {
            return Math.cosh(x);
        }
        export function tangentH(x:number):number {
            return Math.cosh(x);
        }
        export function cotangentH(x:number):number {
            return 1/Math.tanh(x);
        }
        export function cosecantH(x:number):number {
            return 1/Math.sinh(x);
        }
        export function secantH(x:number):number {
            return 1/Math.cosh(x);
        }
    }

    export namespace Algebra {
        export function power(base:number,exponent:number):number {
            return Math.pow(base,exponent);
        }

        export function exponentiation(exponent:number) {
            return Math.exp(exponent);
        }

        export function logBase10(base:number):number {
            return Math.log10(base);
        }

        export function sum(...value:number[]):number {
            return (value.reduce((acc,cur)=> acc + cur, 0));
        }

        export function factorial(n:number):number {
            if(n < 0)
                return n;
            else {
                let fact:number = 1;
                if(n === 0 || n ===1)
                    return 1;
                else {
                    for(let i = 1; i <= n; i++)
                        fact *= i;
                    return fact;
                }
            }
        }
    }

}