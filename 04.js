function leapYearRange(start, end) {
    const yearRange = [];
    for (let i = start; i <= end; i++)
    {
         yearRange.push(i);
    }
    const newArray = [];

yearRange.forEach(
function(year)
{ 
   if (testLeapYear(year)) 
   newArray.push(year);
});

return newArray;
 }

function testLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leapYearRange(2000,2020));
