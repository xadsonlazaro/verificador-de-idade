
function verificar () { 
    let data = new Date(); 
    let ano = data.getFullYear();
    let fano = document.getElementById("txtano") 
    let res = document.getElementById("res")
/*
res.innerHTML = `Detectamos ${geneno} com ${idade} anos`
    res.appendChild(img)
*/
    if (fano.value.length === 0 || (fano.value) > ano) { 
    window.alert('[ERRO] Verifique os Dados e tente Novamente')       
} else {     

    let fsex = document.getElementsByName("radsex") 
    let idade = ano - Number(fano.value) 
    let geneno = '' 
    let img = document.createElement('img') 
    img.setAttribute('id', 'foto') 
    res.appendChild(img)
    if (fsex[0].checked) { 
        geneno = 'Homen' 
        if (idade >= 0 && idade < 10) { 
            // Criança 
            img.setAttribute('src', 'foto criança homen.jpg')
        } else if (idade < 22) {  
            // Jovem 
            img.setAttribute('src', 'foto jovem Homem.jpg')
             } else if (idade < 50) { 
                // Adulto 
                img.setAttribute('src', 'foto Adulto Homem.jpg')
                 } else { 
                    // Idoso 
                    img.setAttribute('src', 'homem idoso.jpg') 
        } 
         } else { 
            geneno = 'Mulher' 
            if (idade >= 0 && idade < 10) { 
                img.setAttribute('src', 'foto criança mulher.jpg') 
                 } else if (idade < 20) {
                    img.setAttribute('src', 'foto Jovem mulher.jpg') 
                     } else if (idade < 45) { 
                        img.setAttribute('src', 'foto adulta mulher.jpg')  
                         } else { 
                            img.setAttribute('src', 'foto idosa.jpg')
                         }
                  }

    res.innerHTML = `Detectamos ${geneno} com ${idade} anos`
    res.appendChild(img)
    
   }
 }