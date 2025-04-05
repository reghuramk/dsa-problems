const express = require("express");
const app = express();

import ArrayAndHashingEasy from "./1.arrays&hashing/easy";
import ArrayAndHashingMedium from "./1.arrays&hashing/medium/index";
const restOfTheProblems = require("./2.rest/index");
const pattern = require("./3.pattern-problem/index");

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/anagrams", (req, res) => {
  const result = ArrayAndHashingEasy.isAnagram("listen", "silent");
  res.send(result);
});

app.get("/findDuplicates", (req, res) => {
  const result = ArrayAndHashingEasy.hasDuplicates([1, 2, 3, 1]);
  res.send(result);
});

app.get("/twoSum", (req, res) => {
  const result = ArrayAndHashingEasy.validTwoSum([2, 7, 11, 15], 9);
  res.send(result);
});

app.get("/removeDuplicatesFromSortedArray", (req, res) => {
  const result = ArrayAndHashingEasy.removeDuplicatesFromSortedArray([
    2, 7, 11, 15,
  ]);
  res.send(result);
});

app.get("/removeElement", (req, res) => {
  const result = ArrayAndHashingEasy.removeElement([3, 2, 2, 3], 3);
  res.send(result);
});

app.get("/sortedArrayToBST", (req, res) => {
  const result = ArrayAndHashingEasy.sortedArrayToBST([-10, -3, 0, 5, 9]);
  res.send(result);
});

app.get("/pascalTriangle", (req, res) => {
  const result = ArrayAndHashingEasy.pascalTriangle(5);
  res.send(result);
});

app.get("/maxProfit", (req, res) => {
  const result = ArrayAndHashingEasy.maxProfit([7, 1, 5, 3, 6, 4]);
  res.send(result);
});

app.get("/mergeSorteDArray", (req, res) => {
  const result = ArrayAndHashingEasy.mergeSorteDArray([1, 2, 3, 0, 0, 0]);
  res.send(result);
});

app.get("/removeDuplicatesEntries", (req, res) => {
  const result = ArrayAndHashingEasy.removeDuplicatesEntries([
    1, 2, 3, 0, 0, 0,
  ]);
  res.send(result);
});

app.get("/searchInsert", (req, res) => {
  const result = ArrayAndHashingEasy.searchInsert([1, 3, 5, 6], 2);
  res.send(result);
});

app.get("/removeDuplicatesFromSortedArrayAlternateApproach", (req, res) => {
  const result =
    ArrayAndHashingEasy.removeDuplicatesFromSortedArrayAlternateApproach([
      1, 2, 3, 0, 0, 0,
    ]);
  res.send(result);
});

app.get("/plusOne", (req, res) => {
  const result = ArrayAndHashingEasy.plusOne([1, 2, 3, 0, 0, 0]);
  res.send(result);
});

app.get("/majorityElement", (req, res) => {
  const result = ArrayAndHashingEasy.majorityElement([3, 2, 3]);
  res.send(result);
});

app.get("/getRow", (req, res) => {
  const result = ArrayAndHashingEasy.getRow(3);
  res.send(result);
});

app.get("/groupAnagrams", (req, res) => {
  const result = ArrayAndHashingMedium.groupAnagrams([
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

app.get("/getMaxArea", (req, res) => {
  const result = ArrayAndHashingMedium.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  res.send(result);
});

app.get("/getThreeSum", (req, res) => {
  const result = ArrayAndHashingMedium.threeSum([-1,0,1,2,-1,-4]);
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
