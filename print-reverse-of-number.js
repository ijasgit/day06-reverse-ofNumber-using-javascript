let num, rem;
num = 124;
sum=0;
while (num > 0) {
  rem= num % 10;
 sum=(sum*10)+rem;
//console.log(+rem);
  num = num - rem;
  num = num / 10;
}
console.log(+sum);

