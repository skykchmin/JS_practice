var 가로 = 4;
var 세로 = 3;
var 색깔들 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var 색깔후보 = 색깔들.slice();
var 색깔 = [];
var 클릭플래그 = true;
var 클릭카드 = [];
var 완성카드 = [];
var 시작시간;
function 셔플() { // 피셔예이츠 셔플
  for (var i = 0; 색깔후보.length > 0; i += 1) {
    색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
  }
}

function 카드세팅(가로, 세로) {
  클릭플래그 = false; // 맨처음에 클릭할 수 없게 만든다
  for (var i = 0; i < 가로 * 세로; i += 1) {
    var card = document.createElement('div');
    card.className = 'card';
    var cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    var cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    var cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.backgroundColor = 색깔[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    (function (c) { //클로저 해결방법: 즉시실행함수를 이벤트 리스너로 감싸면 c라는 새로운 function scope가 생기면서 card가 c로 복사되면서 클로저 문제를 해결한다. 
      card.addEventListener('click', function() { //비동기이고 반복문일 때 클로저 문제가 생길 수 잇다. 
        if (클릭플래그 && !완성카드.includes(c)) {
          c.classList.toggle('flipped');
          클릭카드.push(c);
          if (클릭카드.length === 2) { //클릭하는 숫자가 같은가
            if (클릭카드[0].querySelector('.card-back').style.backgroundColor === 클릭카드[1].querySelector('.card-back').style.backgroundColor) {
              완성카드.push(클릭카드[0]);
              완성카드.push(클릭카드[1]);
              클릭카드 = [];
              if (완성카드.length === 12) {
                var 끝시간 = new Date();
                alert('축하합니다! 성공! ' + (끝시간 - 시작시간) / 1000 + '초 걸렸습니다.');
                document.querySelector('#wrapper').innerHTML = '';
                색깔후보 = 색깔들.slice();
                색깔 = [];
                완성카드 = [];
                시작시간 = null;
                셔플();
                카드세팅(가로, 세로);
              }
            } else { // 두 카드의 색깔이 다르면
              클릭플래그 = false;
              setTimeout(function() {
                클릭카드[0].classList.remove('flipped');
                클릭카드[1].classList.remove('flipped');
                클릭플래그 = true;
                클릭카드 = [];
              }, 1000);
            }
          }
        }
      });
    })(card);
    document.querySelector('#wrapper').appendChild(card);
  }

  document.querySelectorAll('.card').forEach(function (card, index) { // 초반 카드 공개
    setTimeout(function() {
      card.classList.add('flipped');
    }, 1000 + 100 * index);
  });

  setTimeout(function() { // 카드 감추기
    document.querySelectorAll('.card').forEach(function (card) {
      card.classList.remove('flipped');
    });
    클릭플래그 = true;
    시작시간 = new Date();
  }, 5000);
}

셔플();
카드세팅(가로, 세로);

