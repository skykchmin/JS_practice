var tetris = document.querySelector('#tetris');
var blockDict = {
    
}

var tetrisData = [

];

function 칸만들기(){
    var fragment = document.createDocumentFragment();
    for(var i =0; i< 20; i++){
        var tr = document.createElement('tr');
        var arr = [];
        tetrisData.push(arr);
        fragment.appendChild(tr);
        for(var j =0; j<10; j++){
            var td = document.createElement('td');
            tr.appendChild(td);
            arr.push(0);
        }
    }
    console.log(tetris, fragment);
    tetris.appendChild(fragment);

}

window.addEventListener('keydown', function(e){
    console.log(e);
    switch(e.code){
        case 'ArrowRight': // 오른쪽 이동
            break;
        case 'ArrowLeft': // 왼쪽 이동
            break;
        case 'ArrowDown': // 아래쪽 이동
            break;
        default:
            break;
    }
    
});

window.addEventListener('keyup', function(e){
    console.log(e);
    switch(e.code){
        case 'Space': // 한방에 내리기
            break;
        case 'ArrowUp': //방향전환
            break;
        default:
            break;
    }
    
});



칸만들기();
