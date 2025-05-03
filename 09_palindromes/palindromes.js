const palindromes = function (str) {
  let res = str
    .toLowerCase()
    .split("")
    .filter(
      (symbol) =>
        (symbol.charCodeAt(0) >= 97 && symbol.charCodeAt(0) <= 122) ||
        (symbol.charCodeAt(0) >= 48 && symbol.charCodeAt(0) <= 57)
    );
  return res.join("") === res.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
