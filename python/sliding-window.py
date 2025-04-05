class Solution:
    
    # Find the maximum profit from stock prices
    def maxProfit(prices):
        buy_price = prices[0]
        profit = 0

        for p in prices[1:]:
            if buy_price > p:
                buy_price = p
            
            profit = max(profit, p - buy_price)
        
        return profit
    
    # Find the length of the longest substring without repeating characters
    def lengthOfLongestSubstring(s):
        setlength = 0
        thiset = set()
        start = 0 

        for end in range(len(s)): 
            while s[end] in thiset:
                thiset.remove(s[start])
                start += 1
            
            thiset.add(s[end])
            setlength = max(setlength, end - start + 1)

        return setlength
    
    
sol = Solution
print(sol.maxProfit([7, 1, 5, 3, 6, 4])) # 5
print(sol.lengthOfLongestSubstring("abcabcbb")) # 3