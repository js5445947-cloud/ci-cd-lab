const { determinarEstado } = require('./logic');

describe('Pruebas de Lógica de Evaluación', () => {

  test('Debe aprobar con nota mayor o igual a 70', () => {
    expect(determinarEstado(80)).toBe("APROBADO");
    expect(determinarEstado(70)).toBe("APROBADO");
  });

  test('Debe reprobar con nota menor a 70', () => {
    expect(determinarEstado(50)).toBe("REPROBADO");
    expect(determinarEstado(69.9)).toBe("REPROBADO");
  });

  test('Debe detectar notas inválidas', () => {
    expect(determinarEstado(150)).toBe("ERROR: Nota inválida");
    expect(determinarEstado(-10)).toBe("ERROR: Nota inválida");
  });

  test('Debe manejar valores no numéricos', () => {
    expect(determinarEstado(NaN)).toBe("ERROR: Debe ser un número");
  });

});
