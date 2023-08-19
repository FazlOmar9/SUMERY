async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        {
            headers: { Authorization: `Bearer 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` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

async function getAns() {
    let text = document.getElementsByTagName("textarea")[0].value;
    let outputbox = document.getElementById("summary");
    let spinner = document.getElementById("spinner");
    let response = document.getElementById("response");
    response.style.display = "none";
    outputbox.style.display = "block";
    spinner.style.display = "block";
    let result = await query({ inputs: text, parameters: { min_length: 70, max_length: 125 } });
    spinner.style.display = "none";
    response.style.display = "block";
    response.innerHTML = result[0]["summary_text"];
}
