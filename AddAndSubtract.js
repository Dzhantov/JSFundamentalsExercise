function addAndSubtract(num1, num2, num3){

    function sum(num1, num2){
        return num1 + num2;
    }
    function subtract(resultSum, num3){
        return resultSum - num3;
    }

    let resultSum = sum(num1, num2);
    let resultFinal = subtract(resultSum, num3);

    console.log(resultFinal);
    
}