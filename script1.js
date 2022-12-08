
function regexBasic() {
    // test 
    let regex = /apple/;    // apple이라는 단어가 있는지 
    let tested = false;
    tested = regex.test("This is an apple.");
    console.log(tested); // true


    // match 
    let str = "This is an apple. That is not an apple.";
    let res = str.match(regex);  // 문자열에서 정규식에 해당하는 항목들을 배열로 반환
    console.log(res);  // ["apple"]

    // match 
    regex = /apple/g; // global 플래그 적용 
    res = str.match(regex);  // 두 개 나온다
    console.log(res); // ["apple","apple"]


    // replace
    res = str.replace(regex, "banana"); // apple을 banana로 변경
    console.log(res);

}

export default regexBasic;


