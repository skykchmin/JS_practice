var body = document.body;

var numbercandidate = [1,2,3,4,5,6,7,8,9];
var numberarray = [];

for (var i =0; i< 4; i+=1){
    var 뽑은것 = numbercandidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    numberarray.push(뽑은것);
}

var result = document.createElement('h1');
body.append(result);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
input.type = 'number';
form.append(input);

var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);

form.addEventListener('submit', function callback(e){
    e.preventDefault();
    var answer = input.value;
    console.log(answer);
    if (answer === numberarray.join('')){
        result.textContent = '홈런';
        input.value ='';
        input.focus();

        numbercandidate = [1,2,3,4,5,6,7,8,9];
        numberarray = [];

        for (var i =0; i< 4; i+=1){
            var 뽑은것 = numbercandidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            numberarray.push(뽑은것);
        }
    } else {
        var answerarray = answer.split('');
        var strike = 0;
        var ball = 0;
        for (var i = 0; i < 3; i+=1){
            if(answerarray[i] === numberarray[i]){
                strike+= 1;
            } else if(answerarray[i].indexOf(answerarray[i]) > -1)
                ball+= 1;
        }
    }
});

// 문자.split(구분자) -> 배열
// 배열.join(구문자) -> 문자