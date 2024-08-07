# 2096. Step-By-Step Directions From a Binary Tree Node to Another
# Medium
# Topics
# Companies
# Hint
# You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

# Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

# 'L' means to go from a node to its left child node.
# 'R' means to go from a node to its right child node.
# 'U' means to go from a node to its parent node.
# Return the step-by-step directions of the shortest path from node s to node t.

# Note: You can only move from a node to its parent or child nodes. You cannot move to a node that is not a direct parent or child node.
#

# Example 1:
#
# Input: root = [1,2,3,null,4,5,6], startValue = 3, destValue = 6
#
# Output: "UURL"
#
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @param {Integer} start_value
# @param {Integer} dest_value
# @return {String}
#
#

class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end

def get_directions(root, start_value, dest_value)
  start_path = find_path(root, start_value)
  dest_path = find_path(root, dest_value)

  # Remove the common prefix path
  while !start_path.empty? && !dest_path.empty? && start_path[0] == dest_path[0]
    start_path.shift
    dest_path.shift
  end

  # Convert the remaining start path to 'U'
  up_moves = 'U' * start_path.size

  # Concatenate up moves with the destination path
  directions = up_moves + dest_path.join('')
  directions
end

def find_path(node, target)
  return [] if node.nil?
  return [""] if node.val == target

  left_path = find_path(node.left, target)
  unless left_path.empty?
    return ["L"] + left_path
  end

  right_path = find_path(node.right, target)
  unless right_path.empty?
    return ["R"] + right_path
  end

  []
end
# Example usage:
# root = TreeNode.new(1)
# root.left = TreeNode.new(2)
# root.right = TreeNode.new(3)
# puts get_directions(root, 2, 3)

get_directions([1,2,3,nil,4,5,6], 3, 6)
