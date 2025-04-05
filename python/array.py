import heapq
from collections import defaultdict

# This file contains solutions to various problems related to arrays and strings.
# The solutions are implemented as methods within a class named Solution.
# Each method corresponds to a specific problem and provides a solution using Python.

class Solution:
    # Check if an array contains any duplicates
    def containsDuplicate(nums):
        return len(nums) != len(set(nums))
    
    # Check if two strings are anagrams of each other
    def isAnagram(s, t):
        return sorted(s) == sorted(t)
    
    # Find two numbers in an array that add up to a specific target
    def twoSum(nums, target):
        dict = {}
        for index, num in enumerate(nums):
            complement = target - num
            if complement in dict:
                return [dict[complement], index]
            else:
                dict[num] = index
        return []
    
    # Group anagrams from a list of strings
    def groupAnagrams(strs):
        
        dict = {}

        for s in strs:
            sortedwrd = ''.join(sorted(s))
            if sortedwrd not in dict:
                dict[sortedwrd] = [s]
            else:
                dict[sortedwrd].append(s)  

        return list(dict.values())
    
    # Find the k most frequent elements in an array
    def topKFrequent(nums, k):
        heap = []
        counter = {}
        for n in nums:
            counter[n] = 1 + counter.get(n, 0)

        for j, v in counter.items():
            heapq.heappush(heap, (-v, j))
        
        res = []

        while len(res) < k:
            res.append(heapq.heappop(heap)[1])
        
        return res
    
    # Encode a list of strings into a single string
    def encode(strData):
        ans = []

        for str in strData:
            ans.append('{:4}'.format(len(str)) + str)
        return ''.join(ans)

    def decode(str):
        ans = []

        i,n = 0, len(str)

        while i < n:
            size = int(str[i : i + 4])
            i+=4
            ans.append(str[i : i + size])
            i+=size
        return ans
    
    # Find the product of all elements in an array except for the current element
    def productExceptSelf(nums):
        ans = [1] * len(nums)
        prefix = 1

        for i in range(len(nums)):
            ans[i] = prefix 
            prefix = prefix * nums[i]
        
        suffix = 1

        for i in range(len(nums) - 1, -1, -1):
            ans[i] = ans[i] * suffix
            suffix = suffix * nums[i]

        return ans
    
    # Check if a Sudoku board is valid
    def isValidSudoku(board):
        rows = defaultdict(set)
        columns = defaultdict(set)
        box = defaultdict(set)

        for r in range(9):
            for c in range(9):
                num = board[r][c]
                boxtuple = (r // 3, c // 3)

                if num == '.':
                    continue
                
                if num in rows[r] or num in columns[c] or num in box[boxtuple]:
                    return False
                
                rows[r].add(num)
                columns[c].add(num)
                box[boxtuple].add(num)
        
        return True
    
    # Find the length of the longest consecutive sequence in an array
    def longestConsecutive(nums):
        numset = set(nums)
        longest = 0

        for n in numset:
            if n - 1 not in numset:
                length = 1

                while n + length in numset:
                    length = length + 1
                
                longest = max(longest, length)
        
        return longest
    
    
# Example usage:
sol = Solution
print(sol.containsDuplicate([1, 2, 3, 1])) # True
print(sol.isAnagram("anagram", "nagaram")) # True
print(sol.twoSum([2, 7, 11, 15], 9)) # [0, 1]
print(sol.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) # [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]
print(sol.topKFrequent([1, 1, 1, 2, 2, 3], 2)) # [1, 2]
print(sol.encode(["hello", "world"])) # '0005hello0005world'
print(sol.decode(sol.encode(["quick", "fox", "jumped", "over", "the", "fence"]))) # ['quick', 'fox', 'jumped', 'over', 'the', 'fence']
print(sol.productExceptSelf([1, 2, 3, 4])) # [24, 12, 8, 6]
print(sol.isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", "6", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])) # True