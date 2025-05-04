const fibonacci = function (n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (n < 0) {
    return "OOPS";
  }

  let f_i1 = 1;
  let f_i2 = 0;
  for (let i = 2; i <= n; i++) {
    let f_i = f_i1 + f_i2;
    f_i2 = f_i1;
    f_i1 = f_i;
  }
  return f_i1;
};

// Do not edit below this line
module.exports = fibonacci;
