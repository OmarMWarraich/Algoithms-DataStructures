def longestCommonPrefix(arr)
    return "" if arr.empty?
    return arr[0] if arr.length == 1
    
    prefix = arr[0]
    arr[1..-1].each do |word|
        while word.index(prefix) != 0
        prefix = prefix[0..-2]
        end
    end
    prefix
end


puts longestCommonPrefix(["colorado", "color", "cold"]) # "col"
puts longestCommonPrefix(["a", "b", "c"]) # ""
puts longestCommonPrefix(["spot", "spotty", "spotted"]) # "spot"