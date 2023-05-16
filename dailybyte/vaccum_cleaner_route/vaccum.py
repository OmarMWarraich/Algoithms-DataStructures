def vaccum_cleaner_route(route):
    x = 0
    y = 0
    for direction in route:
        if direction == "L":
            x -= 1
        elif direction == "R":
            x += 1
        elif direction == "U":
            y += 1
        elif direction == "D":
            y -= 1
    return x == 0 and y == 0


print(vaccum_cleaner_route("LR"))
print(vaccum_cleaner_route("URURD"))
print(vaccum_cleaner_route("RUULLDRD"))