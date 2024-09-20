function submitQuiz() {
    var score = 0;
  
    // Obtener respuestas
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');
  
    // Verificar respuestas correctas
    if (q1 && q1.value === "A = \pi r^2") { score++; }
    if (q2 && q2.value === "a^2 + b^2 = c^2") { score++; }
    if (q3 && q3.value === "P = 4 \times lado") { score++; }
    if (q4 && q4.value === "V = lado^3") { score++; }
    if (q5 && q5.value === "180^\circ") { score++; }
  
    // Mostrar resultado
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Tu puntuación es: " + score + "/5";
  
    // Prevenir envío del formulario
    return false;
}