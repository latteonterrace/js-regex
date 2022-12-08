function regexReplace() {
    let str, pattern, res; 

    // String 객체의 replace 메소드도 정규표현식을 활용하는데, 캡쳐링 그룹을 사용하면 패턴 확인과 함께 
    // 원하는 부분만 교체하는 기능을 구현할 수 있다. 
    // $1은 첫 번째 캡쳐링 그룹으로 둘러싼 영역에해당한다. 만약 두 번째 캡쳐링 그룹이 있다면 
    // 해당 문자열은 $2가 될 것이다. 
    str = "myhome.github.com"
    pattern =/^\w+(\.github\.com)$/
    res = str.match(pattern);
    console.log(res);  //["myhome.github.com",".github.com"] 
    res = str.replace(pattern, 'www$1')
    console.log(res); //www.github.com


    // non-capturing group 
    // 그룹 시작 부분에 ?: 기호를 추가하면 non-capturing 그룹이 된다. 캡쳐링 그룹이 결과 배열에 추가되는 것과는 달리 non-capturing 그룹은 결과 배열에 추가되지 않는다. 
    // 아래는 두 개의 캡쳐링 그룹을 사용해서 단어의 위치를 변경하는 예제다.
    res = 'javascript'.replace(/(java)(script)/, `$2-$1`) // script-java
    // java와 script를 캡쳐링 그룹으로 지정했기에 패턴을 사용해서 위치를 바꿀 수 있었다
    console.log(res);  // script-java

    // 캡쳐링 그룹의 시작 부분에 ?:을 추가하면 non-capturing 그룹이 되어 결과 배열에 
    // 추가되지 않으며, 결과적으로 $2에 해당하는 패턴을 찾을 수 없어 다른 결과가 나온다.
    res = 'javascript'.replace(/(java)(?:script)/, `$2-$1`) 
    console.log(res); // "$2-java"

    // str="https://www.youtube.com/watch?v=xO8QCKNtxag";
    // str="https://youtu.be/xO8QCKNtxag"
    // var youtubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    // res = str.match(youtubeRegex)
    // console.log(res);
    // console.log(res[7]);


}
export default regexReplace;