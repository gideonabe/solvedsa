def sameFrequency(x, y):
  notTrue = "False"
  if x < 0 or y < 0: 
    print("False: One or both numbers are negative")
    return

  strX = str(x)
  strY = str(y)

  if len(strX) != len(strY):
    print("False: Numbers have different number of digits")
    return

  def NoChar(string):
    charCount = {}

    for char in string:
      charCount[char] = charCount.get(char, 0) + 1
    return charCount

  NoCharX = NoChar(strX)
  NoCharY = NoChar(strY)

  for char in NoCharX:
    if NoCharX[char] != NoCharY.get(char, 0):
      print(f"False: Mismatch found for digit '{char}")
      return

  print("True: Both numbers have same frequency of digits")

sameFrequency(214, 512)
sameFrequency(401, 410) 
sameFrequency(182, 281) 
sameFrequency(34, 14) 
sameFrequency(22, 222)