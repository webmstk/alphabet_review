function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");
  str = str.split("");
  if(str[0]!='a'){
    return undefined;
  }

  for(i = 0; i<=str.length; i++ ){
    if(alphabet[i]!=str[i]){
      return alphabet[i];
    }
  }
  return "You enter all 'Alphabet'";
}

function returnAlphabet(){
  var result = "";
  var alphabet = $('#alphabet').val();
  //alert(alphabet);
  $('#result').text('Missing Letters-> ('+String(fearNotLetter(alphabet)+')'));
  return result;
}
