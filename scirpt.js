const texto=document.querySelector(".textArea");
const encrip=document.querySelector(".encriptado");

function botonEncrip(){
    const encriptado=encriptamiento(texto.value)
    encrip.value=encriptado
    texto.value="";
    encrip.style.backgroundImage="none";
}

function botonDesencrip(){
    const encriptado=desencriptar(texto.value)
    encrip.value=encriptado
    texto.value="";
   
}


function encriptamiento(textoEncriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ax"],["o","ober"],["u","ufat"]];
    textoEncriptado=textoEncriptado.toLowerCase()

    for (let i=0; i<matrizCodigo.length;i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textoEncriptado
}

    function desencriptar(textoDesencriptado){
        let matrizCodigo=[["e","enter"],["i","imes"],["a","ax"],["o","ober"],["u","ufat"]];
        textoDesencriptado=textoDesencriptado.toLowerCase()
    
        for (let i=0; i<matrizCodigo.length;i++){
            if(textoDesencriptado.includes(matrizCodigo[i][1])){
                textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }
        }
        return textoDesencriptado    
}

const copiarBoton = document.querySelector('.copiar');
const encriptadoTextarea = document.querySelector('.encriptado');

copiarBoton.addEventListener('click', () => {
  encriptadoTextarea.select();
  document.execCommand('copy');
});
