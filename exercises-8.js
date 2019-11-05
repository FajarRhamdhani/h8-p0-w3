function pasanganTerbesar(num) {
    // you can only write your code here!
    var angka=String(num)
    var maxNum=0;
    for (var i=0; i<angka.length; i++){
        if(i===0){
            maxNum=Number(angka[i]+angka[i+1]);
        }
        else{
            if(Number(angka[i]+angka[i+1])>maxNum){
                maxNum=Number(angka[i]+angka[i+1]);
            }
        }
        
    }
    return maxNum;
    
    
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

