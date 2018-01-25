function caesarCyph() {
  do {
    var choice = prompt('Choose task:\n\n1) Cipher\n2) Decipher');
    if (choice !== '') {
      if (choice === '1') {
        do {
          var phrase = prompt('Enter message to be encrypted');
          if (phrase !== '') {
            cipher(phrase.toUpperCase());
          } else {
            alert('Please enter message to be encrypted');
          }
        } while (phrase === '');
      } else if (choice === '2') {
        do {
          var phrase = prompt('Enter message to be deciphered');
          if (phrase !== '') {
            decipher(phrase.toUpperCase());
          } else {
            alert('Please enter message to be deciphered');
          }
        } while (phrase === '');
      } else {
        alert('Please enter a valid option');
      }
    }
  } while (choice === '' || choice !== '1' && choice !== '2');
}

caesarCyph();

function cipher(code) {
  var decrypt = '';
  for (var i = 0 ; i < code.length ; i++) {
    if (code.charCodeAt(i) >= 65 && code.charCodeAt(i) <= 90) {
      var pos = (code.charCodeAt(i) - 65 + 33) % 26 + 65;
      decrypt += String.fromCharCode(pos);
    }
  }
  document.write('Your encoded message is: ' + decrypt);
}

function decipher(code) {
  var decrypt = '';
  for (var i = 0 ; i < code.length ; i++) {
    if (code.charCodeAt(i) >= 65 && code.charCodeAt(i) <= 90) {
      var pos = (code.charCodeAt(i) - 65 - 7 + 52) % 26 + 65;
      decrypt += String.fromCharCode(pos);
    }
  }
  document.write('Your decoded message is: ' + decrypt.charAt(0) + decrypt.slice(1).toLowerCase());
}