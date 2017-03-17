module.exports = {
    aritGeo: function(arr){
        if(!Array.isArray(arr)){
            return "Invalid input! aritGeo accepts only an array as a parameter";
        }else if(arr.length === 0){
            return 0;
        }else{
            if(arr.length === 1){
                return -1;
            }else if(!checkArit(arr) && !checkGeo(arr)){
                return -1;
            }else if(checkArit(arr)){
                return "Arithmetic";
            }else{
                return "Geometric";
            }

        }

        function checkArit(a){
            var len = a.length,
                commonDiff = a[1] - a[0];
            while(len >1){
                if(a[len-1] - a[len-2] !== commonDiff){
                    return false;
                }
                len--;
            }
            return true;
        }

        function checkGeo(a){
            var len = a.length,
                commonRatio = a[1] / a[0];
            while(len >1){
                if(a[len-1] / a[len-2] !== commonRatio){
                    return false;
                }
                len--;
            }
            return true;
        }
    }
}