def add_binary(a, b):
    return bin(int(a, 2) + int(b, 2))[2:]

print(add_binary("100", "1"))
print(add_binary("11", "1"))
print(add_binary("1", "0"))