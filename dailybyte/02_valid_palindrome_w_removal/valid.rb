def validPalindrome(str)
    i = 0
    j = str.length - 1
    while i < j
        if str[i] != str[j]
        return is_palindrome(str, i + 1, j) || is_palindrome(str, i, j - 1)
        end
        i += 1
        j -= 1
    end
    true
    end

def is_palindrome(str, i, j)
    while i < j
        return false if str[i] != str[j]
        i += 1
        j -= 1
    end
    true
end

puts validPalindrome("abcba") # true
puts validPalindrome("foobof") # true
puts validPalindrome("abccab") # false