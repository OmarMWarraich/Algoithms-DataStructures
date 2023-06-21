def longestCommonPrefix(arr):
    if not arr:
        return ""
    if len(arr) == 1:
        return arr[0]
    arr.sort()
    result = ""
    for i in range(len(arr[0])):
        if arr[0][i] == arr[-1][i]:
            result += arr[0][i]
        else:
            break
    return result

print(longestCommonPrefix(["colorado", "color", "cold"]))
print(longestCommonPrefix(["a", "b", "c"]))
print(longestCommonPrefix(["spot", "spotty", "spotted"]))
    
    