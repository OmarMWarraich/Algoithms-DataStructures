# There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

# For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
# Given the two positive integers n and time, return the index of the person holding the pillow after time seconds

# @param {Integer} n
# @param {Integer} time
# @param {Integer}

# Starting index shall always

def pass_the_pillow(n, time)
  direction = 1
  index = 2
  i = 0

  while i < time-1 do
    direction *= -1 if index >= n
    direction *= -1 if index == 1
    index += direction
    i += 1
  end
  puts index
end

pass_the_pillow(4,5)
pass_the_pillow(4,10)
pass_the_pillow(18,38)
