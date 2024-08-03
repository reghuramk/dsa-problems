function isAnagram(s, t) {
 
    const sortedStr1 = s.split('').sort().join('');
    const sortedStr2 = t.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
}

module.exports = { isAnagram }