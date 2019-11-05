function balikString(kata){
    var word=[kata];
    for (var i=0; i<word.length; i++){
    var hasil="";
        for (var j=word[i].length-1; j>=0; j--){
            hasil+=word[i][j];
    }
}
    return hasil;
}

console.log(balikString("hello world!"));
//input "hello world!"
//output
//"!dlrow olleh"

