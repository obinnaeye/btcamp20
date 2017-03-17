

module.exports = {    

    fizzBuzz : function (num){
        if (num === undefined){
            return "No input! fizzBuzz accepts a number as the parameter";
        }else if(typeof num !== "number"){
            return "Invalid input! fizzBuzz accepts only a number as the parameter";
        }else{
            if(num%3 ===0 && num%5 === 0){
                return "FizzBuzz";
            }else if(num % 3 === 0 ){
                return "Fizz";
            }else if(num % 5 === 0){
                return "Buzz";
            }else{
                return num;
            }
        }
    }
}