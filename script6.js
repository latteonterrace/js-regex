function regexCapture() {
    let str, res;
    let pattern; 

    str  = "https://myhome.github.com";
    // xxx.gibhug.com 찾음 
    pattern = /https?:\/\/\w+\.github\.com/
    // search() method   에서는 일치를 검색하는데 표현식을 사용하며, 일치하는 위치를 반환합니다.
    res = str.search(pattern);
    console.log(res);  // 0 
    res = str.match(pattern); 
    console.log(res);   // ["https://myhome.github.com"]

    // 서브 도메인 영역을 괄호로 둘러싸서 캐처링 그룹을 만들면
    // 결과는 달라진다 
    str  = "https://myhome.github.com";
    pattern = /https?:\/\/(\w+)\.github\.com/
    res = str.search(pattern);
    console.log(res); // 0 
    res = str.match(pattern);
    // 두번재에 capture된 것이 들어감
    console.log(res);  //["https://myhome.github.com","myhome"]
    console.log(res[0]);  //https://myhome.github.com
    console.log(res[1]);  //myhome

    str  = "https://myhome.github.com";
    pattern = /https?:\/\/(\w+)(\.github)\.com/
    res = str.match(pattern);
    console.log(res);  // ["https://myhome.github.com","myhome",".github"]

    // g 플래그가 설정된 전역 정규 표현식을 이용하면 match()메서드는 조금 다른 값을 반환한다.
    // 전역 정규 표현식은 지역(local)정규 표현식과 달리 첫 번째 매치되는 문자열만 찾지 않고 모두 매치되는 문자열을 찾는다. 
    // 이 때 각 매치 결과 내에 포함된 캡처는 반환하지 않는다.
    // 캡처가 중요한 경우라면 exec() 메서드를 활용하여 전역 정규 표현식을 이용해서 캡처를 사용할 수 있다.
    // g 전역 검색 플래그가 없는 경우에는 최초 검색 결과 한번만 반환하는 반면,
    // 역 검색 플래그가 있는 경우에는 모든 검색 결과를 배열로 반환
    
    str = "1st, 2nd, 3rd"
    pattern = /\d/g 
    // exec()는 global 플래그를 설정해도 일치하는 첫번째 값 반환 
    res = pattern.exec(str);
    console.log(res);  // ["1"]


    // match는 global 플래그가 있으면 모두 반환
    res = str.match(pattern);
    console.log(res);  // ["1","2","3"]

    // exec()를 여러번 호출하며 일치하는 패턴을 차례로 출력
    // exec를 두 번 호출
    str = "1st, 2nd, 3rd"
    pattern = /\d/g 
    // exec()는 global 플래그를 설정해도 일치하는 첫번째 값 반환 
    res = pattern.exec(str);
    console.log(res);  // ["1"]
    res = pattern.exec(str);
    console.log(res);  // ["2"]
    
}
export default regexCapture;