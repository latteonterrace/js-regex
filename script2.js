function regexPattern() {
    // 패턴

    let str; 
    let res;
    // this와  매치
    str = "This is a.";
    res = str.match(/this/i);
    console.log(res);  //  ["This"]

    // 123과 매치 
    str = "010-1234-1234";
    res = str.match(/123/g);
    console.log(res);  // ["123","123"]

    // 010 이거나 011이거나 
    // | 는 or 임
    str = "010-1234-1234";
    res = str.match(/010|011/g);
    console.log(res);  //["010"]

    // [] 괄호안의 문자들 중 하나. or 처리 묶음 
    str = "010-1234-1234";
    res = str.match(/010/g)   // 010을 포함하하는
    console.log(res);    // ["010"]

    str = "0a1b0"
    res = str.match(/[01]/g) // 0 또는 1을 포함하는 
    console.log(res); //  ["0","1","0"]

    // 범위 지정 [a-zA-Z]
    str = "01234-abcd";
    res = str.match(/[a-z]/g) // a,b,c,d ....z 중에 하나. a에서 z까지
    console.log(res); //["a","b","c","d"]


    // 제외 
    // [^abc]  abc를 제외 , 괄호 안의 ^ 는 제외의 의미 
    str = "they a couple"
    res = str.match(/[^thac]/g) // thac 는 제외 
    console.log(res);  //["e","y"," "," ","o","u","p","l","e"]

    // ^ 특정 문자열로 시작 
    str = "Is this your books?"
    res = str.match(/^is/i)  // is로 시작
    console.log(res);  // ["Is"]

    // $ x특정 문자열로 끝남 
    str = "This is an apple."
    res = str.match(/apple.$/i)
    console.log(res);  //["apple."]


}

export default regexPattern;

