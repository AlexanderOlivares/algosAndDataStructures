# Code Wars - Ascend, Descend, Repeat?
# tests in test_csAscendDescendRepat.py

#  QUESTION:
# You are given three integer inputs: length, minimum, and maximum.

# Return a string that:

# Starts at minimum
# Ascends one at a time until reaching the maximum, then
# Decends one at a time until reaching the minimum
# repeat until the string is the appropriate length

#########################
# SOLUTION #1
#########################

def ascend_descend(length, minimum, maximum):
    if maximum < minimum or length == 0:
        return ""
    if maximum == minimum:
        return str(maximum)*length
    res = str(minimum)
    cur = minimum
    ascend = True
    while len(res) < length:
        if cur == maximum:
            ascend = False
        if cur == minimum:
            ascend = True
        if ascend:
            cur += 1
        else:
            cur -= 1
        res += str(cur)
    return res[:length]
