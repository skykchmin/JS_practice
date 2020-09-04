var 스크린 = document.querySelector('#screen');

스크린.addEventListener('click', function(){ // 이벤트에 콜백함수는 비동기이다. 
    var 시작시간;
    if(스크린.classList.contains('waiting')){ // classList.contains: 현재클래스를 파악가능하다 
        스크린.classList.remove('waiting'); // class는 여러 스타일을 한번에 적용할 수 있어서 좋다. 클래스가 여러개 일때 한번에 적용하기 쉽다
        스크린.classList.add('ready'); 
        스크린.textContent = '초록색이 되면 클릭하세요';
        setTimeout(function(){
            시작시간 = new Date();
            스크린.click();
        }, Math.floor(Math.random() * 1000) + 2000); 
    }else if(스크린.classList.contains('ready')){
        스크린.classList.remove('ready');
        스크린.classList.add('now');
        스크린.textContent = '클릭하세요!'
        
    }else if(스크린.classList.contains('now')){
        var 끝시간 = new Date();
        console.log('반응속도', 끝시간 - 시작시간, 'ms');
        스크린.classList.remove('ready');
        스크린.classList.add('now');
        스크린.textContent = '클릭해서 시작하세요'
    }
});

// var 끝시간 = new Date();
// console.log((끝시간 - 시작시간 ) / 1000);