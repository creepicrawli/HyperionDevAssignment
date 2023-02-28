from collections import defaultdict


def groupAnagrams(strs):
    result = defaultdict(list)
    for i in strs:
        x = "".join(sorted(i))
        result[x].append(i)
    return list(result.values())


print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
print(groupAnagrams(["say", "tip", "dog", "bird", "road", "door", "yas",
      "god", "pit", "pti", "dirb", "ribd", "ogd", "doar", "rodo", "rood"]))

# 1. In the sorted() function call on line 5, the parameter i needs to be passed to it so that it sorts the characters
#    of the current string being processed.

# 2. On line 3, the "result" dictionary is being created with a value of an empty list.
#    This is one way to get the job done, and well done on finding a solution. however, we want our programs
#    to be as simple as possible, and the less operations, the better. This can be simplified
#    by using the defaultdict class from the collections module (which we need to import at the top of our file). Feel free to let me know if you would like to know more
#    about python libraries and modules!

# 3. Then one more adjustment that can make our program simpler. You may have seen a best practise somewhere
#    or a special case with classes and object instances but, the Solution class and its instance ob1
#    are not necessary, as the function can be defined as a standalone function.
