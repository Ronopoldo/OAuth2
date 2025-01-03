const button = document.getElementById('newCode');
button.addEventListener('click', async () => {
    const code = await generateCode();
    const textInput = document.getElementById('codeHash');
    textInput.value = code;
});

let intervalId = null;

const applyButton = document.getElementById('applyButton');
applyButton.addEventListener('click', async () => {
    const hashElement = document.getElementById('iternalCode');
    const hash = hashElement ? hashElement.value : '';
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => updateTextBox(hash), 100);
});

async function updateTextBox(hash) {
    const textBox = document.getElementById('codeBox');
    textBox.textContent = hash; // Устанавливаем текст в textBox
}



copyButton.addEventListener('click', () => {
    codeHash.select();
    codeHash.setSelectionRange(0, codeHash.value.length);
    document.execCommand('copy');
});
