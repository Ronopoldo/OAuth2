async function generateCode() {
    const response = await fetch("https://ronopoldo.github.io/OAuth2/data/decodingTable.json");

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const hashTable = Object.keys(await response.json());
    console.log(hashTable);

    let output = "f";

    for (let i = 0; i < 16; i++) {
        const random1 = Math.floor(Math.random() * 4);
        const random2 = Math.floor(Math.random() * (hashTable.length - 4) + 4);

        output += hashTable[random1];
        output += hashTable[random2];
    }

    const lastSix = output.slice(-6);
    if (new Set(lastSix).size === 1) {
        output = output.slice(0, -1);
        output += hashTable[Math.floor(Math.random() * hashTable.length)];
    }

    return output;
}
