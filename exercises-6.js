function angkaPalindrome(num) {
    //you can only write your code here!
  for (var i=0; i<num; i++){
    num++;
    var angka=String(num);
    var kedua="";
      for (var j=angka.length-1; j>=0; j--){
        kedua+=angka[j];
      }
      var hasil=0;

    if(angka===kedua){
      return hasil+=num;
    }
   
  }

}
    
  
  // //TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001