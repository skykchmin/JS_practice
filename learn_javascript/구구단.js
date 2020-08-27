// while (true){
//     var number1 = Math.ceil(Math.random() * 9) + 1
//     var number2 = Math.ceil(Math.random() * 9) + 1
    
//     var result = number1 * number2
//     var condition = true;

//     while(condition){
//         var answer = prompt(String(number1) + '곱하기' + String(number2) + '는?')
//         if (result === Number(answer)){
//             alert('딩동댕')
//             condition = false;
//         } else{
//             alert('땡')
//         }
//     }
// }

var number1 = Math.ceil(Math.random() * 9) + 1
var number2 = Math.ceil(Math.random() * 9) + 1

var result = number1 * number2
var condition = true;

var body = document.body;
var word = document.createElement('div'); // document 객체의 메서드를 사용해 HTML을 만들 수 있다.
word.textContent = String(number1) + '곱하기' + String(number2) + '는?';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
input.type = 'number';
form.body.append(input);

var button = document.createElement('button');
button.textContent = '입력!';
form.body.append(button);

var result = document.createElement('div');
document.body.append(result);


form.addEventListener('click', function callback(e){ // 콜백함수
    e.preventDefault();
    
    if(result === Number(input.value)){
        result.textContent = '딩동댕';
        number1 = Math.ceil(Math.random() * 9) + 1
        number2 = Math.ceil(Math.random() * 9) + 1
        result = number1 * number2;
        word.textContent = String(number1) + '곱하기' + String(number2) + '는?';
        input.focus();
    } else {
        result.textContent = '땡'
        input.value ='';
        input.focus();
    }
});