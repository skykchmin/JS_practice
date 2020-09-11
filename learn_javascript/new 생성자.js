// function 카드공장(name,att, hp){
//     return{
//         name: name,
//         att: att,
//         hp: hp,
//         type: '카드',
//         attack: function() {},
//         defend: function() {},
//     };
// }

var 프로토타입 = { // 공통되는 부분 
    type: '카드',
    attack: function() {},
    defend: function() {},
    };
    function 카드공장(name, att, hp){
        var 카드 = { // 달라지는 부분
            name: name,
            att: att,
            hp: hp,
        }
        카드.__proto__ = 프로토타입 // 객체이기 때문에 참조관계, 같은 부분은 같게가고
        return 카드;
}

// 만약 카드의 type을 3만개 바꿔야한다고 가정하면 일일이 바꿔야하는게 아니라 프로토타입을 이용해서 바꾼다
// 프로토타입은 참조 관계인데 
// 프로토타입.type = 장난감; 
// 이렇게 바꾸면 중복을 최소화 처리할 수 있다 
// 또한 객체의 속성을 바꿀 때에도 

// 프로토타입.width = 100
// 프로토타입.height = 300 

// 이렇게 바꿀 수 있다 

// 생성자를 안쓰고 싶을때 
var 프로토타입 = { // 공통되는 부분 
    type: '카드',
    }
    function 카드공장(name, att, hp){
        var 카드 = Object.create(프로토타입);
            카드.name = name,
            카드.att = att;
            카드.hp = hp;
    return 카드;
}

// 생성자를 쓰고 싶을때
var prototype = { type: '카드' };
function Card(name, att, hp){ //생성자는 함수이다 대문자로 놓고 
    this.name = name; 
    this.att = att;
    this.hp = hp;
}
Card.prototype = prototype;

var skykchmin = new Card('skykchmin', 5, 10); //new 키워드를 통해 생성자로 변하게 되면서 객체를 만들어 낸다.
// new를 붙이면 객체가 되었는데, new를 붙이지 않으면 undefined가 나온다
// 왜냐하면 함수에서 return 값이 없으면 undefined가 되기 때문에
// this는 기본적으로 window이고 strict모드에서는 undefined이다. 
// new를 붙이면 this가 window에서 새로 생성된 객체로 바뀐다 

