function regexSpecialChar() { 
    let str, res;
    let pattern; 
    // \(backslash)는 정규 표현식에서 숫자를 나타내는 '\d' 처럼 특별한 문자이다
    // \d는 숫자를 의미 
    str = "1234abcd"
    res = str.match(/\d/g)
    console.log(res);   //["1","2","3","4"]

    // \가 붙어 있는 메타 문자를 사용할 때에는 앞에 \를 하나 더 붙여 줘야 함
    // 다음은 문자 '\d'를 찾음 
    str = "1234abc\\df\\d"  // 문자열에서 역슬래시(\)는 '\\'로 사용 
    res = str.match(/\\d/gi)  // 'd'를 찾음
    console.log(res); //["\\d","\\d"]

    // \D 숫자가 아닌 문자에 일치
    str = "1234xbc\\df\\d"  // 문자열에서 역슬래시(\)는 '\\'로 사용 
    res = str.match(/\D/gi)  //  숫자가 아닌 문자
    console.log(res); //["x","b","c","\\","d","f","\\","d"]

    // \s 공백, tab
    str = "apple pear \t strawberry";
    res = str.match(/\s/g)  // 공백(space, tab를 찾음)
    console.log(res);  // [" "," ","\t"," "]

    // \S 공백이 아닌 문자
    str = "apple pear \t strawberry";
    res = str.match(/\S/g)
    console.log(res); // ["a","p","p","l","e","p","e","a","r","s","t","r","a","w","b","e","r","r","y"]

    // \w 	63개 문자(Word, 영문 대소문자 52개 + 숫자 10개 + _)에 일치
    str = "abcd01234ABCD,.";
    res = str.match(/\w/g)
    console.log(res);  // ["a","b","c","d","0","1","2","3","4","A","B","C","D"]

    // \W	63개 문자가 아닌 나머지 문자에 일치
    str = "abcd01234ABCD,.";
    res = str.match(/\W/g)
    console.log(res);  // [",","."]

    // 슬래시(/) 찾기 
    str = "abcd /e"
    res = str.match(/\//)
    console.log("슬래시 찾기");
    console.log(res); // ["/"]
    
    // 역슬래시(\) 찾기 
    str = "abcd \\s"
    res = str.match(/\\/)
    console.log("역슬래시")
    console.log(res[0]);// '/'

}

export default regexSpecialChar;