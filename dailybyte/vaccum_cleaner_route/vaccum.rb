def vaccum(str)
    x = 0
    y = 0
    str.each_char do |char|
        if char == "L"
            x -= 1
        elsif char == "R"
            x += 1
        elsif char == "U"
            y += 1
        elsif char == "D"
            y -= 1
        end
    end
    return x == 0 && y == 0
end

puts vaccum("LR") # true
puts vaccum("URURD") # false
puts vaccum("RUULLDRD") # true