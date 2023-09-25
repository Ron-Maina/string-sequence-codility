function solution(S){
    let count = 0
    let new_str = ''
    if (S.charAt(0) === S.charAt(S.length - 1)){
        count += 1
        new_str = S.slice(1) + S.charAt(0)
        for (let i=0; i < (S.length - 1); i++){
            if (new_str.charAt(0) === new_str.charAt(new_str.length - 1)){
                count += 1;
                new_str =  new_str.slice(1) + new_str.charAt(0)
            }else{
                new_str =  new_str.slice(1) + new_str.charAt(0)
            }
        }    
    }
    else{
        new_str = S.slice(1) + S.charAt(0)
        for (let i=0; i < (S.length - 1); i++){

            if (new_str.charAt(0) === new_str.charAt(new_str.length - 1)){
                count += 1;
                new_str =  new_str.slice(1) + new_str.charAt(0)
            }else{
                new_str =  new_str.slice(1) + new_str.charAt(0)
            }
        }
    }
    console.log(count)

}
solution("abbaa")
solution("abab")
solution("aaaa")
solution("aabbab")