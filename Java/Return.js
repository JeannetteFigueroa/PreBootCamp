function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

/* Console.log imprime -->  hello 
    Console.log imprime --> Dojo    
*/

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*  Se ejectuta --> Console.log("hello")
    Return de vuelve el 15
    Var toma el valor de la función hello --> 15
    Console.log imprime --> Result is 15

    Diagrama T

    Variable        Valores
    Result           15
*/ 

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

/* Console.log imprime --> num is 3
    Return se vuelve -- > 18
    Console.log imprime --> result is 18

     Diagrama T

    Variable        Valores
    Result             3, 18
    Num                3
*/

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

/* var num --> 15
    Console.log imprime --> 15
    Agregamos una nueva función
    Console.log imprime --> 10
    Console.log imprime --> 10
    Console.log imprime --> 15

     Diagrama T

    Variable        Valores
    Num               15
    Num2              10
    Result            10
*/

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

/* Console.log (15)
   Console.log (10)
   Console.log (20)
   Console.log (15) 
   
    Diagrama T

    Variable        Valores
    num               15
    Result            10
   */


function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

//Console.log imprime (result is 3)//
//Console.log imprime (result is 5)//
//Console.log imprime (result is 16)//

/*   Diagrama T

    Variable        Valores
    y                 n*2
    result             8
    */

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))

 /* Console.log imprime (5)
    Console.log imprime 3
    Console.log  imprime (8)
 */


 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))

 /* Console.log imprime (5)
    Console.log imprime (8)
    Console.log  imprime (13) 

    Diagrama T

    Variable        Valores
    Sum                 5
    Sum                 8
    Result              13
    */


 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);


function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);