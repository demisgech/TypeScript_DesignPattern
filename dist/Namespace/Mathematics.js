"use strict";
var Maths;
(function (Maths) {
    let Trigonometric;
    (function (Trigonometric) {
        const radian = 57.293578;
        function sine(x) {
            return Number(Math.sin(x / radian).toPrecision(4));
        }
        Trigonometric.sine = sine;
        function cosine(x) {
            return Number(Math.cos(x / radian).toPrecision(4));
        }
        Trigonometric.cosine = cosine;
        function tangent(x) {
            return Number(Math.tan(x / radian).toPrecision(4));
        }
        Trigonometric.tangent = tangent;
        function cotangent(x) {
            return Number((1 / Math.tan(x / radian)).toPrecision(4));
        }
        Trigonometric.cotangent = cotangent;
        function cosecant(x) {
            return Number((1 / Math.sin(x / radian)).toPrecision(4));
        }
        Trigonometric.cosecant = cosecant;
        function secant(x) {
            return Number((1 / Math.cos(x / radian)).toPrecision(4));
        }
        Trigonometric.secant = secant;
    })(Trigonometric = Maths.Trigonometric || (Maths.Trigonometric = {}));
    let Hyperbolic;
    (function (Hyperbolic) {
        function sineH(x) {
            return Math.sinh(x);
        }
        Hyperbolic.sineH = sineH;
        function cosineH(x) {
            return Math.cosh(x);
        }
        Hyperbolic.cosineH = cosineH;
        function tangentH(x) {
            return Math.cosh(x);
        }
        Hyperbolic.tangentH = tangentH;
        function cotangentH(x) {
            return 1 / Math.tanh(x);
        }
        Hyperbolic.cotangentH = cotangentH;
        function cosecantH(x) {
            return 1 / Math.sinh(x);
        }
        Hyperbolic.cosecantH = cosecantH;
        function secantH(x) {
            return 1 / Math.cosh(x);
        }
        Hyperbolic.secantH = secantH;
    })(Hyperbolic = Maths.Hyperbolic || (Maths.Hyperbolic = {}));
    let Algebra;
    (function (Algebra) {
        function power(base, exponent) {
            return Math.pow(base, exponent);
        }
        Algebra.power = power;
        function exponentiation(exponent) {
            return Math.exp(exponent);
        }
        Algebra.exponentiation = exponentiation;
        function logBase10(base) {
            return Math.log10(base);
        }
        Algebra.logBase10 = logBase10;
        function sum(...value) {
            return (value.reduce((acc, cur) => acc + cur, 0));
        }
        Algebra.sum = sum;
        function factorial(n) {
            if (n < 0)
                return n;
            else {
                let fact = 1;
                if (n === 0 || n === 1)
                    return 1;
                else {
                    for (let i = 1; i <= n; i++)
                        fact *= i;
                    return fact;
                }
            }
        }
        Algebra.factorial = factorial;
    })(Algebra = Maths.Algebra || (Maths.Algebra = {}));
})(Maths || (Maths = {}));
//# sourceMappingURL=Mathematics.js.map