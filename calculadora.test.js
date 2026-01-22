// calculadora.test.js
function sumar(a, b) {
  return a + b;
}

test('suma 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(99); // ❌ Cambiado de 5 a 99 para romper el test
});