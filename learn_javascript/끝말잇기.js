var word = '민경'
while(true){
    var answer = prompt(word);
    if (word[word.length-1] === answer[0]){
        alert('딩동댕')
        word = answer;
    } else {
        alert('땡')
    }
}

// for (var word = '민경'; true;){
//     var answer = prompt(word);
//     if (word[word.length-1] === answer[0]){
//         alert('딩동댕')
//         word = answer;
//     } else {
//         alert('땡')
//     }
// }
