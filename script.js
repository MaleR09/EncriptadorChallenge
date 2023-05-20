function encriptarTexto() {
    let textarea = document.getElementById("MiTextArea");
    let texto = textarea.value.toLowerCase();
    let textoSinAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let textoEncriptado = textoSinAcentos.replaceAll(/[aeiou]/g, function(match) {
      if (match === 'a') {
        return 'ai';
      } else if (match === 'e') {
        return 'enter';
      } else if (match === 'i') {
        return 'imes';
      } else if (match === 'o') {
        return 'ober';
      } else if (match === 'u') {
        return 'ufat';
      }
    });
    document.getElementById("resultado").innerHTML = textoEncriptado;
    document.getElementById("imagenResultado").classList.add("imagen-oculta");


    
}

  function desencriptarTexto() {
    let textarea = document.getElementById("MiTextArea");
    let textoEncriptado = textarea.value;

    let textoDesencriptado = textoEncriptado.replaceAll(/(ai|enter|imes|ober|ufat)/g, function(match) {
      if (match === 'ai') {
        return 'a';
      } else if (match === 'enter') {
        return 'e';
      } else if (match === 'imes') {
        return 'i';
      } else if (match === 'ober') {
        return 'o';
      } else if (match === 'ufat') {
        return 'u';
      }
    });
    document.getElementById("resultado").innerHTML = textoDesencriptado;
    document.getElementById("imagenResultado").classList.add("imagen-oculta");

    

    
    
}


function copiarTexto() {
    var resultado = document.getElementById("resultado").innerText;
  
    var textareaTemp = document.createElement("textarea");
    
    textareaTemp.value = resultado;
  
    document.body.appendChild(textareaTemp);
  
    textareaTemp.select();
  
    document.execCommand("copy");
  
    document.body.removeChild(textareaTemp);
  
  }