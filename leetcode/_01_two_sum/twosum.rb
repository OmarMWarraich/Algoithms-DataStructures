#
#
# Given an array of integers nums and integer target,
# return indices of the two numbers such that they
# add up to target.
#
# Assumption:- Each inpput would have exactly one solution.
# Same element can not be used twice.
#
# Answer can be in any order.
#
# Ex:-
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
#

def two_sum(nums, target)
  hash = {}
  nums.each_with_index do |num, index|
    diff = target - num
    if hash[diff]
      return [hash[diff], index]
    end
    hash[num] = index
  end
end

puts two_sum([2,7,11,15], 9)
