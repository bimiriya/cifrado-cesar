function caesarCyph() { // crear función para englobar las dos funciones
	 do {
    var frase = prompt('Indique el número de la operación que desee realizar:\n\n1) Cifrar\n2) Decifrar'); // pedir prompt con dos alternativas para darle al usuario la opción de cifrar o decifrar su texto
    if (frase !== ''); { // para evitar que ingrese campo vacío
      if (frase === '1') { // opción 1 permite al usuario cifrar texto
        cipher(); // primera función
      } else if (frase === '2') { // opción 2 permite al usuario decifrar su texto
        decipher(); // segunda función
      } else {
        alert('Ingrese una opción válida'); // en caso de que ingrese campo inválido = anything thats not '1' or '2'
      }
    }
  } while (frase === '' || (frase !== '1' && frase !== '2')); // mientras estas clausulas se cumplan, esta función se ejecutará sin problemas, si no arroja un alert+prompt nuevamente infinito
}

function cipher() {
  do {
    var frase = prompt('Ingrese su texto a encriptar').toUpperCase(); // convertir prompt a mayúscula para no tener problemas con el ascii
    if (frase.match(/[a-z]/gi)) { // si es que se encuentran "matches" de la A a la Z  --> gi para que incluya mayúsculas
      var emptyStr = '';
      for (var i = 0 ; i < frase.length ; i++) { // for para que busque de uno en uno
        var position = frase.charCodeAt(i); // charcodeat devuelve la posición de cada i en el ascii
        if (position !== String.fromCharCode(32)) { // no funciona, pero quería que si i encontraba la posición 32=' ' quería que no lo tomara en cuenta para no transformarlo
          var encoded = String.fromCharCode(((position - 65 + 33) % 26) + 65); // busca la nueva posición 33 espacios adelantado
        } emptyStr += encoded;
      }
    } else {
      alert('Por favor ingrese texto válido'); // por si el usuario ingresa un elemento que no sea letra de la A a la Z
    } return document.write('Su texto decifrado es: ' + emptyStr);
  } while (typeof frase !== 'string'); // hacer mientras los caracteres ingresados sean mientras sea un string
}

function decipher() {
  do {
    var frase = prompt('Ingrese su texto encriptado').toUpperCase();
    if (frase.match(/[a-z]/gi)) {
      var emptyStr = '';
      for (var j = 0 ; j < frase.length ; j++) {
        var position = frase.charCodeAt(j);
        var encoded = String.fromCharCode(((position - 65 - 7) % 26) + 65);
        emptyStr += encoded.replace(';', 'U'); // el código falla al decifrar desde la t a la z :(
        emptyStr = emptyStr.replace('<', 'V');
        emptyStr = emptyStr.replace('=', 'W');
        emptyStr = emptyStr.replace('>', 'X');
        emptyStr = emptyStr.replace('@', 'Z');
        emptyStr = emptyStr.replace(':', 'T');
        emptyStr = emptyStr.replace('?', 'Y');
      }
    } else {
      alert('Por favor ingrese texto válido');
    } return document.write('Su texto decifrado es: ' + emptyStr);
  } while (typeof frase !== 'string');
}

caesarCyph();