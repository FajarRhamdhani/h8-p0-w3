  function palindrome(kata) {
    // you can only write your code here!
    var word =[kata];
    for(var i=0; i<word.length; i++){
        var hasil="";
        for(var j=word[i].length-1; j>=0; j--){
            hasil +=word[i][j];
            
        }

    }
    if(hasil===kata){
        return true;
    }
    else
    {
        return false;
    }
  }
  
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false