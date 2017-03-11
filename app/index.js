

module.exports = {
    
    findMinMax : function(arr){
        if(!arr){
            return "No parameter! findMinMax accepts an array of numbers as the only parameter."
        }else if(!Array.isArray(arr)){
            return "Invalid input! Input should be an array.";
        }else if(!checkNum(arr)){
            return "Invalid input! Input should be an array of numbers.";            
        }else{
            arr.sort(function(a,b){
                return a-b;
            });
            if(arr.length === 0){
                return [];
            }else if (arr[0] === arr[arr.length -1]){
                return [arr[0]]
            }else{
                return [arr[0], arr[arr.length - 1]]
            }
        }


        function checkNum (a){
            var l = a.length;
            while(l){
                if (typeof a[l-1] !== 'number'){
                    return false;                    
                }
                l--;                
            }
            return true;
        }
    },

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