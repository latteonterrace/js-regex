function regexExec() {
    let str, res;
    let pattern; 

    str = `<img src="/res/agile.png">`
    // src=" + 임의의 문자(.)  0개 이상 "로 
    res = str.match(/src=".*"/)
    console.log(res); // ["src=\"/res/agile.png\""]

    str = "010-8888-5555"
    // 0에서 9 숫자가 3번 이상 이고, 대시(-) 로 연결된 것
    res = str.match(/[0-9]{3,}-[0-9]{3,}-[0-9]{3,}/)
    console.log(res) // ["010-8888-5555"]

}
export default regexExec;