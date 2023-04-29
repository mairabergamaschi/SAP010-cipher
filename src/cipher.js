const cipher = {
  encode: function (offset, string) {
    /* eslint-disable */
    if (!offset || !string) {
      throw TypeError("Argumentos invalidos");
    }
    const validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let finalText = "";
    for (let i = 0; i < validChars.length; i++) {
      const element = validChars[i];
      //identificar se e letra
      const isValidChar = validChars.indexOf(element) !== -1;
      if (isValidChar) {
        const newCharIndex = (i + offset) % validChars.length;
        const newChar = validChars[newCharIndex];
        finalText = finalText + newChar;
      } else {
        finalText = finalText + element;
      }
    }
    return finalText;
    /* eslint-enable */
  },
  decode: function (offset, string) {
    console.log(offset);
    console.log(string);

  },

};

export default cipher;

