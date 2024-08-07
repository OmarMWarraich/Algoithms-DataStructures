# Convert Integer to English words
#
#Convert a non-negative integer num to its English words representation.



# Example 1:
#
# Input: num = 123
# Output: "One Hundred Twenty Three"
#
# Example 2:
#
# Input: num = 12345
# Output: "Twelve Thousand Three Hundred Forty Five"
#
# Example 3:
#
# Input: num = 1234567
# Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
#
#
#
# Constraints:
#
#     0 <= num <= 231 - 1
#
#

def number_to_words(num)
  return "Zero" if num == 0
  billion = num / 1_000_000_000
  million = (num % 1_000_000_000) / 1_000_000
  thousand = (num % 1_000_000) / 1_000
  hundred = num % 1_000

  result = []
  result << convert(billion, "Billion") if billion.positive?
  result << convert(million, "Million") if million.positive?
  result << convert(thousand, "Thousand") if thousand.positive?
  result << convert(hundred, "") if hundred.positive?
  result.join(" ").strip
end

def convert(num, suffix)
  return "" if num == 0
  result = []
  if num >= 100
    result << ones[num / 100] + " Hundred"
    num %= 100
  end
  if num >= 20
    result << tens[num / 10]
    num %= 10
  end
  if num > 0
    result << ones[num]
  end
  result.join(" ") + " #{suffix}"
end

def ones
  %w[Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen]
end

def tens
  %w[Zero Ten Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety]
end

puts number_to_words(123)
puts number_to_words(12345)
puts number_to_words(20)
