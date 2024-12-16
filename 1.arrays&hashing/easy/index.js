const isAnagram = (s, t) => {
  const sortedStr1 = s.split("").sort().join("");
  const sortedStr2 = t.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

const hasDuplicates = (dataSet) => {
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

const removeDuplicates = (nums) => {
  let i = 1;

  for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i - 1]) {
          nums[i] = nums[j];
          i++;
      }
  }

  return i;    
};

const removeElement = (nums, val) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[k] = nums[i];
          k++;
      }
  }

  return k;    
};

const sortedArrayToBST = (nums, left = 0, right = nums.length - 1) =>  {
  if (left > right) 
      return null;
  
  const mid = Math.floor((left + right) / 2);
  const node = new TreeNode(nums[mid]);
  
  node.left = sortedArrayToBST(nums, left, mid - 1);
  node.right = sortedArrayToBST(nums, mid + 1, right);
  
  return node;
}

const mergeSorteDArray = (nums1, m, nums2, n) => {
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
};

module.exports = { isAnagram, validTwoSum, hasDuplicates, removeDuplicates, removeElement, sortedArrayToBST, mergeSorteDArray };
