function isAnagram(s, t) {
  const sortedStr1 = s.split("").sort().join("");
  const sortedStr2 = t.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

const duplicates = (dataSet) => {
  const dupArr = new Set();

  for (const item of dataSet) {
    if (dupArr.has(item)) {
      return true;
    } else {
      dupArr.add(item);
    }
  }

  return false;
};

const validTwoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

module.exports = { isAnagram, validTwoSum, duplicates };
