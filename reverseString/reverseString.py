# Create a function that reverses a string

# Solution 1 - Using slicing
""" def reverseString(string):
    return string[::-1] """

# Solution 2 - Using reversed() and join()
""" def reverseString(string):
    return "".join(reversed(string)) """

# Solution 3 - Using a for loop
""" def reverseString(string):
    reversedString = ""
    for i in range(len(string)):
        reversedString += string[len(string) - 1 - i]
    return reversedString """

# Solution 4 - Using a while loop
""" def reverseString(string):
    reversedString = ""
    i = len(string) - 1
    while i >= 0:
        reversedString += string[i]
        i -= 1
    return reversedString """

# Solution 5 - Using recursion
""" def reverseString(string):
    if len(string) == 0:
        return ""
    else:
        return reverseString(string[1:]) + string[0] """

# Solution 6 - Using a stack
def reverseString(string):
    stack = []
    reversedString = ""
    for i in range(len(string)):
        stack.append(string[i])
    for i in range(len(string)):
        reversedString += stack.pop()
    return reversedString


print(reverseString("Hello World!"))
print(reverseString("12345!"))
print(reverseString("Hello World!12345!"))
