function encryptString(e) {
    
    e.preventDefault();
    
    let shiftingOfTheCipher = document.getElementById('shifting-of-the-cipher').value;
    const cipher = document.getElementById('to-encrypt').value;
    
    let alphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ż', 'ź'];

    alphabet = Array.from(
        alphabet
        .toString()
        .toUpperCase()
        .replace(/,/g, "")
    );

    let alphabetShifted = [...alphabet];

    if (shiftingOfTheCipher > alphabet.length) {
        shiftingOfTheCipher = Math.floor(Math.random() * alphabet.length + 1);
    }

    alphabetShifted = alphabetShifted.concat(alphabetShifted.splice(0, shiftingOfTheCipher));

    const toEncrypt = Array.from(cipher.toUpperCase());
    let encryptedArray = [];


    for (var i = 0; i <= toEncrypt.length; i++) {

        for (var j = 0; j <= alphabet.length; j++) {

            if (toEncrypt[i] == alphabet[j]) {
                encryptedArray.push(alphabetShifted[j]);
                break;
            } else if (toEncrypt[i] == ' ') {
                encryptedArray.push(toEncrypt[i]);
                break;
            }
        }
    }

    const encryptedText = encryptedArray.toString().replace(/,/g, "");
    const encryptedTextToInput = document.getElementById('encrypted-text');
    encryptedTextToInput.value = encryptedText;
}

const encryptButton = document.getElementById('to-encrypt-btn');
encryptButton.addEventListener('click', encryptString);
