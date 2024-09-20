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
    if (q1 && q1.value === "HyperText Markup Language") { score++; }
    if (q2 && q2.value === "&lt;a&gt;") { score++; }
    if (q3 && q3.value === "&lt;img&gt;") { score++; }
    if (q4 && q4.value === "Mostrar texto alternativo si la imagen no se carga") { score++; }
    if (q5 && q5.value === "&lt;ol&gt;") { score++; }
    if (q6 && q6.value === "&lt;p&gt;") { score++; }
    if (q7 && q7.value === "&lt;table&gt;") { score++; }
  
    // Mostrar resultado
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Tu puntuación es: " + score + "/7";
  
    // Prevenir envío del formulario
    return false;
  }