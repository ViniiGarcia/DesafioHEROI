// Classificando Nivel do Heroi
let nomeHeroi = ("Zé da Manga")
let valorXP = 10001
if (valorXP <= 1000){
    console.log(nomeHeroi + "-Nivel Ferro")
}
else {
    if (valorXP <= 2000){
        console.log(nomeHeroi + "-Nivel Bronze")
    }
    else{
        if (valorXP <= 5000){
        console.log(nomeHeroi + "-Nivel Prata")
        }  
         else{
            if(valorXP <= 7000){
                console.log (nomeHeroi + "-Nivel Ouro")
            }
            else{
                if(valorXP <= 8000){
                    console.log (nomeHeroi + "-Nivel Platina")
                }
                else{
                    if(valorXP <= 9000){
                        console.log (nomeHeroi + "-Nivel Ascendente")
                    }
                    else{
                        if(valorXP <= 10000){
                            console.log (nomeHeroi + "-Nivel Imortal")
                        }
                        else{
                            if(valorXP > 10000){
                                console.log(nomeHeroi + "-Nivel Radiante")
                            }
                        }
                    }
                    
                }
            }
         } 
    }
}   