var 값 = 'skykchmin'
var 복사 = 값; // 값을 복사하고 싶으면 변수에 따로따로 동작한다.
// 복사를 바꿔도 그대로 남아있는 것이다
// 원시값: 숫자, 문자, boolean에선 값이 복사가 되고, 객체일 때는 다르게 동작한다
// 객체, 배열, 함수를 통틀어서 객체라고 하는데 객체는 조금 다르게 동작한다. 

값 = false
복사 = 값
값
복사 
복사 = true
복사
값

var 사람 ={
    이름: 'skykchmin'
}

var 복제인간 = 사람; // 형태는 아까 값을 복사한 것이랑 똑같다. 
복제인간.이름 = '민경';
복제인간
사람 // 복제인간을 바꿧는데 사람이 따라서 바뀐다. 
// 이유: 객체는 대입하면 참조 관계가 되기 때문이다. 
// 참조: 연결되는 관계 

var 배열 = ['사과', '오렌지', '포도'];

var 복사 = 배열;
복사[0] = 귤
복사
배열 

var 함수 = function(){}
함수.abc = 'abc'
복사 = 함수
복사.abc = 'def'
함수.abc
