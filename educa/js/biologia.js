function submitQuiz() {
    var score = 0;
  
    // Obtener respuestas
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');
    var q6 = document.querySelector('input[name="q6"]:checked');
    var q7 = document.querySelector('input[name="q7"]:checked');
  
    // Verificar respuestas correctas
    if (q1 && q1.value === "ADN") { score++; }
    if (q2 && q2.value === "Mitocondria") { score++; }
    if (q3 && q3.value === "Fotosíntesis") { score++; }
    if (q4 && q4.value === "Vegetal") { score++; }
    if (q5 && q5.value === "ATP") { score++; }
    if (q6 && q6.value === "Membrana nuclear") { score++; }
    if (q7 && q7.value === "Mitosis") { score++; }
  
    // Mostrar resultado
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Tu puntuación es: " + score + "/7";
  
    // Prevenir envío del formulario
    return false;
  }