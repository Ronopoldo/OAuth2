async function generateCode() {
    const response = await fetch("https://ronopoldo.github.io/OAuth2/data/decodingTable.json");

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const hashTable = Object.keys(await response.json());
    // const hashTable = Object.keys(hashTable)
    console.log(hashTable)

    let output = "f"
    for (let i = 0; i < 16; i++) {
        output+=hashTable[Math.floor(Math.random() * 4)];
        output+=hashTable[Math.floor(Math.random() * (15 - 4 + 1)) + 4];
    }

    return output
}
