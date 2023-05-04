const cipher = {
  cipher: function (offset, string, action) {
    if (!offset || !string) {
      throw TypeError("Argumentos invalidos");
    } 
    const validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let finalText = "";
    for (let i = 0; i < string.length; i++) {
      const element = string[i];
      //identificar se e letra
      const elementInValidCharsIndex = validChars.indexOf(
        element.toUpperCase()
      );
      const isValidChar = elementInValidCharsIndex !== -1;

      if (isValidChar) {
        let newIndex = undefined;
        if (action === "encode") {
          newIndex = elementInValidCharsIndex + offset;
        } else {
          newIndex = elementInValidCharsIndex - offset;
        }
        const newCharIndex = this.mod(newIndex, validChars.length);
        let newChar = validChars[newCharIndex];
        if (element === element.toLowerCase()) {
          newChar = newChar.toLowerCase();
        }
        finalText = finalText + newChar;
      } else {
        finalText = finalText + element;
      }
    }
    return finalText;
  },
  mod: function (n, m) {
    return ((n % m) + m) % m;
  },
  encode: function (offset, string) {
    return this.cipher(offset, string, "encode");
  },
  decode: function (offset, string) {
    return this.cipher(offset, string, "decode");
  },
};

export default cipher;
