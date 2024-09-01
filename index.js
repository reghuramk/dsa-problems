const express = require("express");
const app = express();

const arrayHashingEasy = require("./1.arrays&hashing/easy/index");
const arrayHashingMedium = require("./1.arrays&hashing/medium/index");
const restOfTheProblems = require("./2.rest/index");
const pattern = require("./3.pattern-problem/index");

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
  const result = pattern.starPattern(5);
  res.send(result);
});

app.get("/rightTriangleStarPattern", (req, res) => {
  const result = pattern.rightTriangleStarPattern(5);
  res.send(result);
});

app.get("/rightInverseTriangleStarPattern", (req, res) => {
  const result = pattern.rightInverseTriangleStarPattern(5);
  res.send(result);
});

app.get("/rightTriangleNumPattern", (req, res) => {
  const result = pattern.rightTriangleNumPattern(5);
  res.send(result);
});

app.get("/rightTriangleNumRepetitivePattern", (req, res) => {
  const result = pattern.rightTriangleNumRepetitivePattern(5);
  res.send(result);
});

app.get("/rightInverseTriangleNumPattern", (req, res) => {
  const result = pattern.rightInverseTriangleNumPattern(5);
  res.send(result);
});

app.get("/straightTriangleStarPattern", (req, res) => {
  const result = pattern.straightTriangleStarPattern(5);
  res.send(result);
});
