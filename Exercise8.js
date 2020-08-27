// <!-- Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched" -->

const number = Math.ceil(Math.random() * 10);
console.log(number);

const randomnumber = prompt('숫자를 맞춰보세요');
if(randomnumber == number){
    console.log("맞췄습니다");
}
else{
    console.log('틀렸습니다 ' + randomnumber);
}
