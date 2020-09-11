var 상대영웅 = document.getElementById('rival-hero');
var 내영웅 = document.getElementById('my-hero');
var 상대덱 = document.getElementById('rival-deck');
var 내덱 = document.getElementById('my-deck');
var 상대필드 = document.getElementById('rival-cards');
var 내필드 = document.getElementById('my-cards');
var 상대코스트 = document.getElementById('rival-cost');
var 내코스트 = document.getElementById('my-cost');
var 상대덱data = [];
var 내덱data = [];
var 상대영웅data;
var 내영웅data;
var 상대필드data = [];
var 내필드data = [];
var 턴 = true;

function 카드돔연결(데이터, 돔, 영웅){
    var 카드 = document.querySelector('.card hidden .card').cloneNode(true); // cloneNode로 기존 태그를 그대로 복사가능하다. 인자에 true까지 넣으면 내부까지 복사  
    카드.querySelector('.card-cost').textContent = 데이터.cost;
    카드.querySelector('.card-att').textContent = 데이터.att;
    카드.querySelector('.card-hp').textContent = 데이터.hp;
    if(영웅){
        카드.querySelector('.card-cost').style.display = 'none';
        var 이름 = document.createElement('div');
        이름.textContent = '영웅';
        카드.appendChild(이름)
    }
    카드.addEventListener('click', function(card){
        if(턴){ //내턴이면
            if (!데이터.mine){ // 상대 카드면
                return;
            }
            var 현재코스트 = Number(내코스트.textContent);
            if(현재코스트 < 데이터.cost){
                return;
            }
            var idx = 내덱data.indexOf(데이터); // 클릭을 한번 할때마다 화면을 싹 지우고 다시 그린다.
            내필드data.push(데이터);
            내덱data.splice(idx, 1); 
            내덱.innerHTML ='';
            내필드.innerHTML = '';
            내필드data.forEach(function(data){
                카드돔연결(data, 내필드);
            });
            내덱data.forEach(function(data){
                카드돔연결(data, 내덱);
            });
            내코스트.textContent = 현재코스트 - 데이터.cost;
        } else { //상대 턴인데
            if(데이터.mine){
                return;
            }
            var 현재코스트 = Number(상대코스트.textContent);
            if(현재코스트 < 데이터.cost){
                return;
            }
            var idx = 상대덱data.indexOf(데이터);
            상대덱data.splice(idx, 1);
            상대필드data.push(card);
            상대덱.innerHTML = '';
            상대필드.innerHTML ='';

            상대필드data.forEach(function(data){
                카드돔연결(data, 상대필드);
            });
            상대data.forEach(function(data){
                카드돔연결(data, 상대덱);
            });
            상대코스트.textContent = 현재코스트 - 데이터.cost;
        }
    });

    돔.appendChild(카드);
}

function 상대덱생성(개수){
    for (var i = 0; i < 개수; i++){
        상대덱data.push(카드공장());
    }
    상대덱data.forEach(function(data){
        카드돔연결(data, 상대덱)
    });
}

function 내덱생성(개수){
    for (var i = 0; i < 개수; i++){
        내덱data.push(카드공장(false, true));
    }
    내덱data.forEach(function(data){
        카드돔연결(data, 내덱);
    });
}

function 내영웅생성(){
    내영웅data = 카드공장(true, true);
    카드돔연결(내영웅data, 내영웅, true);
}

function 상대영웅생성(){
    상대영웅data = 카드공장(true);
    카드돔연결(상대영웅data, 상대영웅, true);
}

function Card(영웅, 내카드) {
    if(영웅){
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
    } else {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
        
    }
    
}

function 카드공장(영웅) {
    return new Card(영웅);
}

function 초기세팅 () {
    상대덱생성(5);
    내덱생성(5);
    내영웅생성();
    상대영웅생성();
}


초기세팅();