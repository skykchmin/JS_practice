var today = new Date();
var month = today.getMonth()+1;
var day = today.getDay();
var year = today.getFullYear();


if (month < 10){
    month = '0' + month;
}

if (day<10){
    day = '0' + day;
}

today = month + '-' + day + '-' + year;
console.log(today);

