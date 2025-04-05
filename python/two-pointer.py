import re

#

class Solution:
    
    # Check if a string is a palindrome
    def isPalindrome(s):
        s = re.sub('[^a-zA-Z0-9]', '', s).lower()
        left = 0
        right = len(s) - 1

        while left < right:
            if s[left] != s[right]:
                return False
            left+=1
            right-=1
        
        return True
    
    # Find the indices of two numbers in a sorted array that add up to a target
    def twoSum(numbers, target):

        left = 0
        right = len(numbers) - 1


        while left < right:
            total = numbers[left] + numbers[right]

            if total == target:
                return [left+ 1, right + 1]
            elif total > target:
                right-=1
            else:
                left+=1

        return []
    
    # Find all unique triplets in an array that sum to zero
    def threeSum(nums):
        res = []
        nums.sort()

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            
            j = i + 1
            k = len(nums) - 1

            while j < k:
                total = nums[i] + nums[j] + nums[k]

                if total > 0:
                    k -= 1
                elif total < 0:
                    j += 1
                else:
                    res.append([nums[i], nums[j], nums[k]])
                    j += 1

                    while nums[j] == nums[j-1] and j < k:
                        j += 1
        
        return res
    
    # Find the maximum area of a container formed by two lines
    def maxArea(height):
        max_area = 0
        left = 0
        right = len(height) - 1

        while left < right:
            max_area = max(max_area, (right - left) * min(height[left], height[right]))

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return max_area
    
    # Calculate the amount of water that can be trapped after raining
    def trap(height):
        left = 0
        right = len(height) - 1
        left_max = height[left]
        right_max = height[right]
        water = 0

        while left < right:
            if left_max < right_max:
                left += 1
                left_max = max(left_max, height[left])
                water += left_max - height[left]
            else:
                right -= 1
                right_max = max(right_max, height[right])
                water += right_max - height[right]
        
        return water


# Example usage:
sol = Solution
print(sol.isPalindrome("A man, a plan, a canal: Panama")) # True
print(sol.twoSum([2, 7, 11, 15], 9)) # [1, 2]
print(sol.threeSum([-1, 0, 1, 2, -1, -4])) # [[-1, -1, 2], [-1, 0, 1]]
print(sol.maxArea([1,8,6,2,5,4,8,3,7])) #  49
print(sol.trap([0,1,0,2,1,0,1,3,2,1,2,1])) # 6
