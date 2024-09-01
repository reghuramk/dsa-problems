const starPattern = (n) => {
  let pattern = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      pattern += " *";
    }
    pattern += "\n";
  }
  return pattern;
};

const rightTriangleStarPattern = (n) => {
  let pattern = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      pattern += " *";
    } // inner loop ends here, so j gets reinitialised
    pattern += "\n";
  }
  return pattern;
};

const rightInverseTriangleStarPattern = (n) => {
  let pattern = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
};

const rightTriangleNumPattern = (n) => {
  let number = 0;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      number += j;
    }
    number += "\n";
  }
  return number;
};

const rightTriangleNumRepetitivePattern = (n) => {
  let number = 0;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      number += i;
    }
    number += "\n";
  }
  return number;
};

const rightInverseTriangleNumPattern = (n) => {
  let number = "";
  for (i = 0; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
      number += j;
    }
    number += "\n";
  }
  return number;
};

const straightTriangleStarPattern = (n) => {
  let number = '';
  for (i = 0; i < n; i+=2) {
    for (j = 0; j <= i; j++) {
      number += "*";
    }
    number += "\n";
  }
  return number;
};

module.exports = {
  starPattern,
  rightTriangleNumPattern,
  rightTriangleStarPattern,
  straightTriangleStarPattern,
  rightInverseTriangleNumPattern,
  rightInverseTriangleStarPattern,
  rightTriangleNumRepetitivePattern,
};
