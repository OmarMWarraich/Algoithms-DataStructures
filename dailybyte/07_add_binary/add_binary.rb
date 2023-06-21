def add_binary(a, b)
  (a.to_i(2) + b.to_i(2)).to_s(2)
end

puts add_binary("11", "1") # "100"
puts add_binary("1010", "1011") # "10101"
puts add_binary("1", "1") # "10"