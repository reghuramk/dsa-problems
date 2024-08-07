const express = require("express");
const app = express();

const arrayHashingEasy = require("./1.arrays&hashing/easy/index");
const arrayHashingMedium = require("./1.arrays&hashing/medium/index");
const restOfTheProblems = require("./2.rest/index");
const starPattern = require("./3.pattern-problem/index");

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/anagrams", (req, res) => {
  const result = arrayHashingEasy.isAnagram("listen", "silent");
  res.send(result);
});

app.get("/findDuplicates", (req, res) => {
  const result = arrayHashingEasy.hasDuplicates([1, 2, 3, 1]);
  res.send(result);
});

app.get("/twoSum", (req, res) => {
  const result = arrayHashingEasy.validTwoSum([2, 7, 11, 15], 9);
  res.send(result);
});

app.get("/groupAnagrams", (req, res) => {
  const result = arrayHashingMedium.groupAnagrams([
    "eat",
    "tea",
    "tan",
    "ate",
    "nat",
    "bat",
    "silent",
    "listen",
  ]);
  res.send(result);
});

app.get("/factorial", (req, res) => {
  const result = restOfTheProblems.findFactorial(5);
  res.send(result.toString());
});

app.get("/starPattern", (req, res) => {
  const result = starPattern.nbynstarpattern(5);
  res.send(result);
});

app.get("/starPatternTriangle", (req, res) => {
  const result = starPattern.trianglePattern(5);
  res.send(result);
});
