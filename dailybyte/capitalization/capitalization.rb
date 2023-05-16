def capitalization(str)
    first = str[0]
    rest = str[1..-1]

    if first == first.upcase && rest == rest.downcase
        return true
    end
    if first == first.downcase && rest == rest.downcase
        return true
    end
    if first == first.upcase && rest == rest.upcase
        return true
    end
    return false
end

puts capitalization("USA") # true
puts capitalization("Calvin") # true
puts capitalization("compUter") # false
puts capitalization("coding") # true