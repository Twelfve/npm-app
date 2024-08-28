const sumar = require('../index');
const assert = require('assert');

describe("Probar la suma de dos numeros", () => {
    // Afirmar que 5 + 5 = 10
    it("Cinco mas cinco es diez", () => {
        assert.equal(10, sumar(5, 5));
    });
    // Afirmar que 5 + 5 != 55
    it("Cinco mas cinco no es cincuenta y cinco", () => {
        assert.notEqual(55, sumar(5, 5));
    });
});

