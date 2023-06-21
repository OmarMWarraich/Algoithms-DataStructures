def capitalization(string):
    first = string[0]
    rest = string[1:]

    if first.isupper() and rest.islower():
        return True
    elif first.isupper() and rest.isupper():
        return True
    elif first.islower() and rest.islower():
        return True
    else:
        return False
    
print(capitalization("USA"))
print(capitalization("Calvin"))
print(capitalization("compUter"))
print(capitalization("coding"))