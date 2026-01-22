// logic.js
function determinarEstado(nota) {
  // Validar que sea un número
  if (isNaN(nota)) {
    return "ERROR: Debe ser un número";
  }
  
  // Validar rango de notas (0-100)
  if (nota < 0 || nota > 100) {
    return "ERROR: Nota inválida";
  }
  
  // Determinar aprobado o reprobado
  if (nota >= 70) {
    return "APROBADO";
  } else {
    return "REPROBADO";
  }
}

// Permite usar la función tanto en navegador como en Jest
if (typeof module !== 'undefined') {
  module.exports = { determinarEstado };
}