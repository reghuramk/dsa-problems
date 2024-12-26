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

  threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }

      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
        let total = nums[i] + nums[j] + nums[k];

        if (total > 0) {
          k--;
        } else if (total < 0) {
          j++;
        } else {
          res.push([nums[i], nums[j], nums[k]]);
          j++;

          while (nums[j] === nums[j - 1] && j < k) {
            j++;
          }
        }
      }
    }
    return res;
  }
}

module.exports = ArrayAndHashingMedium;
