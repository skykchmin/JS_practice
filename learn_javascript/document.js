// window는 브라우저, document는 페이지(탭)
// document는 html과 js의 번역 
var body = document.body;
var word = document.createElement('div'); // document 객체의 메서드를 사용해 HTML을 만들 수 있다.
word.textContent = '민경';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
form.body.append(input);

var button = document.createElement('button');
button.textContent = '입력!';
form.body.append(button);

var result = document.createElement('div');
document.body.append(result);

form.addEventListener('click', function callback(e){ // 콜백함수
    e.preventDefault();
    
    if(word.textContent[word.textContent.length - 1] === input.value[0]){
        result.textContent = '딩동댕';
        word.textContent = input.value;
        input.value = ''; // 태그안에는 value이다
        input.focus();
    } else {
        result.textContent = '땡'
    }
});