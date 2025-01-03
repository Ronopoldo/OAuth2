async function encode(timestamp, hash) {
    const response = await fetch("https://ronopoldo.github.io/OAuth2/data/decodingTable.json");

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const hashTable = await response.json();
    let t = timestamp + Number("0." + timestamp.toString().slice(-2)) ** Number(timestamp.toString().slice(-1))
    let encodedString = "";

    for (const char of hash) {
        if (hashTable[char] !== undefined) {
            encodedString += hashTable[char];
        } else {
            throw new Error();
        }
    }

    console.log(encodedString, timestamp, t)

    return ("000000" + eval(encodedString).toString()).replace(/\./g, '').slice(-6);

}