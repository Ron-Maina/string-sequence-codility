def solution(S):
    count = 0
    new_str = ""

    # checks S first
    if S[0] == S[len(S) - 1]:
        count += 1
        new_str = S[1:] + S[0]

        # if first and last letter in S are similar checks remaining iterations
        for i in range(len(S) - 1):
            if new_str[0] == new_str[len(new_str) - 1]:
                count += 1
                new_str = new_str[1:] + new_str[0]
            else:
                new_str = new_str[1:] + new_str[0]
        print(count) 

    # if first and last letter in S don't match checks the remaining iterations     
    else:
        for i in range(len(S)):
            new_str = S[1:] + S[0]
            
            if new_str[0] == new_str[len(new_str) - 1]:
                count += 1
                new_str = new_str[1:] + new_str[0]
            else:
                new_str = new_str[1:] + new_str[0]
        print(count)
    
solution("abbaa")
solution("abab")
solution("aaaa")
