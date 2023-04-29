# Create a function that reverses a string

# Soultion 1 - Using Ruby's built in reverse method
#def reverseString(str)
#    str.reverse
#    end

# Solution 2 - Using a for loop
#def reverseString(str)
#    reversed = ""
#    for i in 0..str.length-1
#        reversed = str[i] + reversed
#    end
#    return reversed
#end

# Solution 3 - Using a while loop
#def reverseString(str)
#    reversed = ""
#    i = 0
#    while i < str.length
#        reversed = str[i] + reversed
#        i += 1
#    end
#    return reversed
#end

# Solution 4 - Using recursion
#def reverseString(str)
#    if str.length == 0
#        return ""
#    else
#        return reverseString(str[1..-1]) + str[0]
#    end
#end

# Solution 5 - Using map

#def reverseString(str)
#    str.split("").map.with_index { |char, i| str[str.length - i - 1] }.join("")
#end

# Solution 6 - Using inject

#def reverseString(str)
#    str.split("").inject { |reversed, char| char + reversed }
#end

# Solution 7 - Using each_char

#def reverseString(str)
#    reversed = ""
#    str.each_char { |char| reversed = char + reversed }
#    reversed
#end

# Solution 8 - Using reduce

def reverseString(str)
    str.split("").reduce { |reversed, char| char + reversed }
end




puts reverseString("Hello World")
puts reverseString("Hello")
puts reverseString("123456789")