def  base10_to_base2(n):
    if n == 0:
        return 0
    else:
        return (n % 2) + 10 * base10_to_base2(int(n / 2))
