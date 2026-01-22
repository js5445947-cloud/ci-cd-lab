// logic.js
function determinarEstado(nota) {
  if (typeof nota !== 'number' || isNaN(nota)) return "ERROR: Debe ser un número";
  if (nota < 0 || nota > 100) return "ERROR: Nota inválida";
  if (nota >= 90) return "APROBADO";
  return "REPROBADO";
}

// Permite usar la función tanto en navegador como en Jest
if (typeof module !== 'undefined') {
  module.exports = { determinarEstado };
}
