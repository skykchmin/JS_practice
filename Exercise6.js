function LeapYear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(LeapYear(2016));
console.log(LeapYear(2000));
console.log(LeapYear(1700));
console.log(LeapYear(1800));
console.log(LeapYear(100));