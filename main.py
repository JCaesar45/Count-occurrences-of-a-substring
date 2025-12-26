def countSubstring(string, substring):
    count = 0
    start = 0
    
    while True:
        index = string.find(substring, start)
        if index == -1:
            break
        count += 1
        start = index + len(substring)  # move past this match to avoid overlapping
    
    return count
