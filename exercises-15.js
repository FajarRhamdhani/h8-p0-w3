function groupAnimals(animals) {
    // you can only write your code here!
    var kelompok=[];
    var hasil=[];
    animals.sort();
    var pembanding=animals[0][0];
    for(var i=0; i<animals.length; i++){
      if(animals[i][0]===pembanding){
      kelompok.push(animals[i]);
      
      }
      else{
        hasil.push(kelompok);
        kelompok=[];
        pembanding=animals[i][0];
        kelompok.push(animals[i]);
      }
      // kelompok.push(animals[i]);
    }
    hasil.push(kelompok);
    return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  //[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]