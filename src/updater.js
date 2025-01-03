async function updateTextBox(hash) {

    const now = new Date();
    const unixTime = now.getTime();
    const roundedUnixTime = Math.floor(unixTime / 10000) * 10000;
    const progress = document.getElementById('myProgress');
    const textBox = document.getElementById('codeBox');
    textBox.textContent = await encode(roundedUnixTime / 10000, hash);
    const difference = unixTime - roundedUnixTime; // Разница между округленным и настоящим временем


    progress.value = difference / 100;

}
// f262a28163d15042c2d1f2608390f0d04 - хороший
// f206060637141e0e16042d0c3b053f3e2e - порочный
// f23b0d290f3c291d3a253e25290d1c2925