var obj = { a:1, b:2, c:3 }
Object.keys(obj); // 객체의 key들을 뽑아내어 배열을 만든다음에
var obj2 = {};
Object.keys(obj).forEach(function(key){
    obj2[key] = obj[key]
})

var obj = { a:1, b:{c:3} };
var obj2 = {};

obj2.a = obj.a; // a는 원시값이니까 복사가 되고
obj2.b = obj.b; // b는 객체이니까 참조관계가 된다 

obj2 = JSON.parse(JSON.stringify(obj)) // stringfy에 들어가는 것은 복사할 대상 객체