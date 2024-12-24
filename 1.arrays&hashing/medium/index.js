class ArrayAndHashingMedium {
  groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
      const sorted = str.split("").sort().join("");
      if (map.has(sorted)) {
        map.set(sorted, [...map.get(sorted), str]);
      } else {
        map.set(sorted, [str]);
      }
    }

    return Array.from(map.values());
  }

  maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
      maxArea = Math.max(
        maxArea,
        (right - left) * Math.min(height[left], height[right])
      );

      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }

    return maxArea;
  }
}

module.exports = ArrayAndHashingMedium;
