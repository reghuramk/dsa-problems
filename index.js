const express = require('express')
const app = express()
const port = 3000
const groupAnagrams = require('./groupAnagram')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/groupAnagram', (req, res) => {

  const result = groupAnagrams.anagrams(["eat", "tea", "tan", "ate", "nat", "bat", "silent", "listen"])
  res.send(result)

})