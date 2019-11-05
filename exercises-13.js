function targetTerdekat(arr) {
    // you can only write your code here!
    var angkaO=[];
    var angkaX=[];
    var hasil=[];
    var selisih=0;
    for (var i=0; i<arr.length; i++){
      if(arr[i]==="o"){
        angkaO.push(i);
      }
      else if(arr[i]==="x"){
      angkaX.push(i);
      }
    }
      for (var i=0; i<angkaO.length; i++){
      for (var j=0; j<angkaX.length; j++){
      selisih = angkaO[i]-angkaX[j];
      hasil.push(Math.abs(selisih));
      }
    }
    if (hasil[0]===undefined){
      return 0
    }
    return hasil[0]
  }


  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2