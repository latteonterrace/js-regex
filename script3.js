function regexPatternOccr(){ 
    let str, res; 
    
    // ? 없거나 최대 1개 
    str = "this is an appl"; 
    res = str.match(/apple?/g);  // apple이 한 번 나오거나 없거나
    console.log(res);  //["appl"] // e가 없거나 한 번

    str = "htts://naver.com";
    res = str.match(/http?/); // p가 없거나 한 번
    console.log(res); // ["htt"]

    str = "http://naver.com";
    res = str.match(/http?/); // p가 없거나 한 번
    console.log(res); // ["http"]


    // * 없거나, 있거나, 여러개 반복
    str = "hello mark"
    res = str.match(/hel*o/) // 1이 0번 이상
    console.log(res);
    str = "hellllllllo mark heo"
    res = str.match(/hel*o/g)
    console.log(res);  // ["hellllllllo","heo"]

    // + 최소 한 개 , 여러개 
    str = "abc adb abbb"
    res = str.match(/ab+/g)   // b가 한 번 이상 
    console.log(res);  // ["ab","abbb"]

    // *?  없거나, 있거나  그리고 없거나 최대 한 개 
    str = "appple aple ale"
    res = str.match(/ap*?le/g)  // p가 없거나, 있거나, 최대 한 개 
    console.log(res);   // "appple","aple","ale"]


    // +? 최소 한 개 그리고 없거나 최대 한 개 
    str = "appple aple ale"
    res = str.match(/ap+?le/g)  //  p가 한 개 이상
    console.log(res);   // ["appple","aple"]

    // {n} n 개 
    str = "apple aple ale"
    res = str.match(/ap{2}le/g)  //  p가 2개
    console.log(res);   // ["apple"]


    // {n,} 최소 n 개 이상 
    str = "apple aple appple apppple ale"
    res = str.match(/ap{2,}le/g)  //  p가 2개 이상
    console.log(res);   // ["apple","appple","apppple"]

    // {min, max} 최소 min 이상,최대 max 이하 
    str = "apple aple appple apppple ale"
    res = str.match(/ap{2,3}le/g)  //  p가 2개 이상, 3개 이하
    console.log(res);   // ["apple","appple"]


}
export default  regexPatternOccr;