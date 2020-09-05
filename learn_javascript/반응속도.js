var 스크린 = document.querySelector('#screen');
var 시작시간; // 시작시간이 setTimeout에 들어있기 때문에 스코프 떄문에 접근이 불가능하기 때문에 밖으로 빼내야한다.  
var 끝시간;
var 기록 = [];
var 타임아웃;

스크린.addEventListener('click', function(){ // 이벤트에 콜백함수는 비동기이다. 
    
    if(스크린.classList.contains('waiting')){ // classList.contains: 현재클래스를 파악가능하다 
        스크린.classList.remove('waiting'); // class는 여러 스타일을 한번에 적용할 수 있어서 좋다. 클래스가 여러개 일때 한번에 적용하기 쉽다
        스크린.classList.add('ready'); 
        스크린.textContent = '초록색이 되면 클릭하세요';
        타임아웃 = setTimeout(function(){
            시작시간 = new Date();
            스크린.click();
        }, Math.floor(Math.random() * 1000) + 2000); 
    }else if(스크린.classList.contains('ready')){
        if(!시작시간){ // 부정클릭
            clearTimeout(타임아웃);
            스크린.classList.remove('ready'); // class는 여러 스타일을 한번에 적용할 수 있어서 좋다. 클래스가 여러개 일때 한번에 적용하기 쉽다
            스크린.classList.add('waiting');
            스크린.textContent = '클릭해서 시작하세요'; 
        } else{
            스크린.classList.remove('ready');
            스크린.classList.add('now');
            스크린.textContent = '클릭하세요!'
        }
    }else if(스크린.classList.contains('now')){
        끝시간 = new Date();
        console.log('반응속도', 끝시간 - 시작시간, 'ms');
        기록.push(끝시간 - 시작시간);
        시작시간 = null;
        끝시간 = null;
        스크린.classList.remove('ready');
        스크린.classList.add('now');
        스크린.textContent = '클릭해서 시작하세요'
    }
});

// var 끝시간 = new Date();
// console.log((끝시간 - 시작시간 ) / 1000);