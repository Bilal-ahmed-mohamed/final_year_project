document.getElementById("newsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const inputText = document.getElementById("newsInput").value;
    const resultDiv = document.getElementById("result");

    // Simulated result
    const isFake = Math.random() > 0.5 ? "Fake News" : "Real News";
    resultDiv.innerHTML = `<p>The news is likely: <strong>${isFake}</strong></p>`;
});
