var message = "Aa MessAG XyZ";
var encMessage = '';
var decMessage = '';
var globalKey = 2;
var lg = console.log;
// data encryption operation
var encryption = (data, key) => {
  var value;
  for(let i = 0; i < data.length; i++){
    if(data.charAt(i) >= 'A' && data.charAt(i) <= 'Z') {
      value = (data.charCodeAt(i) - 65 + key ) % 26;
      value += 65;
    } 
    else if(data.charAt(i) >= 'a' && data.charAt(i) <= 'z') {
      value = (data.charCodeAt(i) - 97 + key ) % 26;
      value += 97;
    } else {
      value = data.charCodeAt(i);
    }
    encMessage += String.fromCharCode(value);
  }
  lg('Encoded message : ' + encMessage);
}
// decryption operation
var decryption = (data, key) => {
  var value = 0;
  for(let i = 0; i < data.length; i++){
    if(data.charAt(i) >= 'A' && data.charAt(i) <= 'Z') {
      value = (data.charCodeAt(i) - 65 - key ) % 26;
      if(value >= 0)
        value += "A".charCodeAt(0);
      else
      value = "Z".charCodeAt(0) - value + 1;
    } 
    else if(data.charAt(i) >= 'a' && data.charAt(i) <= 'z') {
      value = (data.charCodeAt(i) - 97 - key ) % 26;
      if(value >= 0)
        value += "a".charCodeAt(0);
      else
      value = "z".charCodeAt(0) - value + 1;
    } else {
      value = data.charCodeAt(i);
    }
    decMessage += String.fromCharCode(value);
  }
  lg('Decription message : ' + decMessage);
}
lg('Original message : ' + message);
encryption(message.toString(), globalKey);
decryption(encMessage, globalKey);