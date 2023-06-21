def validPalindrome(str):
    left = 0
    right = len(str) - 1
    while left < right:
        if str[left] != str[right]:
            return isPalindrome(str, left + 1, right) or isPalindrome(str, left, right - 1)
        left += 1
        right -= 1
    return True

def isPalindrome(str, left, right):
    while left < right:
        if str[left] != str[right]:
            return False
        left += 1
        right -= 1
    return True

print(validPalindrome("abcba"))
print(validPalindrome("foobof"))
print(validPalindrome("abccab"))