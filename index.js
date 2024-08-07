const express = require('express')
const app = express()
const port = 3000
const groupAnagrams = require('./1.arrays&hashing/medium/index')
const findDuplicates = require('./1.arrays&hashing/easy/index')
const anagrams = require('./1.arrays&hashing/easy/index')
const twoSum = require('./1.arrays&hashing/easy/index')
const factorial = require('./2.rest/index')
const starPattern = require('./3.pattern-problem/index');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/findDuplicates', (req, res) => {
const result = findDuplicates.duplicates([1,2,3,1])
res.send(result)
})

app.get('/groupAnagrams', (req, res) => {
  const result = groupAnagrams.anagrams(["eat", "tea", "tan", "ate", "nat", "bat", "silent", "listen"])
  res.send(result)
})

app.get('/anagrams', (req, res) => {
  const result = anagrams.isAnagram('listen', 'silent')
  res.send(result)
})

app.get('/twoSum', (req, res) => {
  const result = twoSum.validTwoSum([2,7,11,15], 9)
  res.send(result)
})

app.get('/factorial', (req, res) => {
  const result = factorial.findFactorial(5)
  res.send(result.toString())
})

app.get('/starPattern', (req, res) => {
  const result = starPattern.nbynstarpattern(10)
  res.send(result)
})