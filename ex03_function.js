
// [1] 명시적 함수 선언
// 가장 대중적인 함수 선언방법
// 호이스팅이 되기 때문에 어느 스코프에서든 호출가능하다.
function hello() {
    console.log('hello');
}

hello();  // 함수 호출


function hello2(name) {
    console.log(`hello2 ${name}`);
}

hello2('stark');

// [2] 익명함수 선언
// 이름이 없는 함수를 변수에 담은 방식
// 이름이 없는 함수긴 한데, 자바스크립트 엔진이 이름을 변수명으로 추정하여 넣는다.
// 변수 할당은 호이스팅 되지 않으므로, 할당 된 이후에만 실행 가능하다.
var hello3 = function() {
    console.log('hello3');
}

hello3();

var hello4 = function(name) {
    console.log(`hello4 ${name}`);
}

hello4('potts');