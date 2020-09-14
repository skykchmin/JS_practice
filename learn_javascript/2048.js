var 테이블 = document.getElementById('table');
var 데이터 = [];

function 초기화(){
    var fragment = document.createDocumentFragment();
    [1, 2, 3, 4].forEach(function(){
        var 열데이터 = [];
        데이터.push(열데이터);
        var tr = document.createElement('tr');
        [1,2, 3, 4].forEach(function(){
            열데이터.push(0);
            var td = document.createElement('td');
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });
    테이블.appendChild(fragment);
}

초기화();