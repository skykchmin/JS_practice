var 상대영웅 = document.getElementById('rival-hero');
var 내영웅 = document.getElementById('my-hero');
var 상대덱 = document.getElementById('rival-deck');
var 내덱 = document.getElementById('my-deck');
var 상대덱data = [];
var 내덱data = [];


function 상대덱생성(개수){
    for (var i = 0; i < 개수; i++){
        상대덱data.push(카드공장());
    }
    상대덱data.forEach(function(data){
        var 카드 = document.querySelector('.card hidden .card').cloneNode(true); // cloneNode로 기존 태그를 그대로 복사가능하다. 인자에 true까지 넣으면 내부까지 복사  
        카드.querySelector('.card-cost').textContent = data.cost;
        카드.querySelector('.card-att').textContent = data.att;
        카드.querySelector('.card-hp').textContent = data.hp;
        상대덱.appendChild(카드)
    });
}

function 내덱생성(){
    for (var i = 0; i < 개수; i++){
        내덱data.push(카드공장());
    }
    내덱data.forEach(function(data){
        var 카드 = document.querySelector('.card hidden .card').cloneNode(true); // cloneNode로 기존 태그를 그대로 복사가능하다. 인자에 true까지 넣으면 내부까지 복사  
        카드.querySelector('.card-cost').textContent = data.cost;
        카드.querySelector('.card-att').textContent = data.att;
        카드.querySelector('.card-hp').textContent = data.hp;
        내덱.appendChild(카드)
    });
}

function 내영웅생성(){
    카드공장();
}

function 상대영웅생성(){
    카드공장();
}

function 초기세팅 () {
    상대덱생성(5);
    내덱생성(5);
    내영웅생성();
    상대영웅생성();
}

function Card() {
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = (this.att+this.hp) / 2; 
}

function 카드공장() {
    
    return new Card();
}

초기세팅();