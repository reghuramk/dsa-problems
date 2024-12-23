class ArrayAndHashingEasy {
  isAnagram(s, t) {
    const sortedStr1 = s.split("").sort().join("");
    const sortedStr2 = t.split("").sort().join("");

    return sortedStr1 === sortedStr2;
  }

  hasDuplicates(dataSet) {
    const dupArr = new Set();

    for (const item of dataSet) {
      if (dupArr.has(item)) {
        return true;
      } else {
        dupArr.add(item);
      }
    }

    return false;
  }

  validTwoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (map.has(target - nums[i])) {
        return [map.get(target - nums[i]), i];
      } else {
        map.set(nums[i], i);
      }
    }
    return [];
  }

  removeDuplicatesFromSortedArray(nums) {
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i - 1]) {
        nums[i] = nums[j];
        i++;
      }
    }

    return i;
  }

  removeDuplicatesFromSortedArrayAlternateApproach(nums) {
    const setKey = [...new Set(nums)];
    nums.length = 0;
    nums.push(...setKey);
    return nums.length;
  }

  removeElement(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }

    return k;
  }

  plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] + 1 !== 10) {
        digits[i] += 1;
        return digits;
      }
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }

  sortedArrayToBST(nums, left = 0, right = nums.length - 1) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = this.sortedArrayToBST(nums, left, mid - 1);
    node.right = this.sortedArrayToBST(nums, mid + 1, right);

    return node;
  }

  pascalTriangle(numRows) {
    const res = [[1]];

    for (let i = 0; i < numRows - 1; i++) {
      const dummyRow = [0, ...res[res.length - 1], 0];
      const row = [];

      for (let j = 0; j < dummyRow.length - 1; j++) {
        row.push(dummyRow[j] + dummyRow[j + 1]);
      }

      res.push(row);
    }

    return res;
  }

  searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  removeDuplicatesEntries(nums) {
    return [...new Set(nums)];
  }

  mergeSortedArray(nums1, m, nums2, n) {
    let midx = m - 1;
    let nidx = n - 1;
    let right = m + n - 1;

    while (nidx >= 0) {
      if (midx >= 0 && nums1[midx] > nums2[nidx]) {
        nums1[right] = nums1[midx];
        midx--;
      } else {
        nums1[right] = nums2[nidx];
        nidx--;
      }
      right--;
    }
  }

  maxProfit(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
      if (buyPrice > prices[i]) {
        buyPrice = prices[i];
      }

      profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
  }

  majorityElement(nums) {
    const hash = {};
    let res = 0;
    let majority = 0;

    for (let n of nums) {
      hash[n] = 1 + (hash[n] || 0);
      if (hash[n] > majority) {
        res = n;
        majority = hash[n];
      }
    }

    return res;
  }

  getRow(rowIndex) {
    let res = [1];
    let prev = 1;
    for(let k = 1; k <= rowIndex; k++) {
        let next_val = prev * (rowIndex - k + 1) / k;
        res.push(next_val);
        prev = next_val;
    }
    return res;
};
}

module.exports = ArrayAndHashingEasy;