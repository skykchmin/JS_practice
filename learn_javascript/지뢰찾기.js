document.querySelector('#exec').addEventListener('click', function(){
    var hor = parseInt(document.querySelector('#hor').nodeValue);
    var ver = parseInt(document.querySelector('#ver').nodeValue);
    var mine = parseInt(document.querySelector('#mine').nodeValue);


    // 지뢰 위치 뽑기 
    var 후보군 = Array(hor * ver)
        .fill() // undefined가 100개가 차게되고
        .map(function(요소, 인덱스){ // 1대 1로 짝지어줌
            return 인덱스 + 1; 
        });
    var 셔플 = []; // 빈배열 하나 만들어두고 
    while (후보군.length > 0){ // 값을 하나 뽑는다. 
        var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
        셔플.push(이동값);
    }

    // 지뢰 테이블 만들기
    var dataset = [];

    var tbody = document.querySelector('#table tbody');
    for(var i = 0; i < ver; i+=1){
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for(var j=0; i < hor; j+=1){
            arr.push(1);
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    console.log(dataset);
    
    for (var k =0; k< 셔플.length; k++){ // ex) 60
        var 세로 = Math.floor(셔플[k] / 10); // 7 -> 6
        var 가로 = 셔플[k] % 10 - 1; // 0 -> 0
        console.log(세로, 가로);
        tbody.children[세로].children[가로].textContent = 'X'; //태그에서는 children으로 자식태그를 접근할 수 있다 tr, td
        dataset[세로][가로]= 'X'; // 데이터랑 화면이랑 일치시켜야한다. 

        console.log(dataset);
    }
})