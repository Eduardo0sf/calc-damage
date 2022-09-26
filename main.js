
   let name1 = prompt("Qual o nome do lutador?")
 let   hp = Number(prompt("Quanto de vida tem o lutador?"))
  let  atq = Number(prompt("Qual o valor de luta dele?"))
   let defesa = Number(prompt("Qual a qualidade defensiva do lutador?"))
   let escudo = Number(prompt("Ele tem escudo?" + "1-sim" + "2-não"))

// lutador 2

 let name2 = prompt("Qual o nome do lutador 2?")
 let   hp2 = Number(prompt("Quanto de vida tem o lutador 2?"))
  let  atq2 = Number(prompt("Qual o valor de luta dele?"))
    let defesa2 = Number(prompt("Qual a qualidade defensiva do lutador 2?"))
   let escudo2 = Number(prompt("Ele tem escudo?" + "1-sim" + "2-não"))




let start = Number(prompt("Quem irá atacar?" + ` 1-${name1}`+ ` 2-${name2}`))



if(start === 1) {
    let calcTank = atq - defesa2
 let damage = hp2 - calcTank 
    hp2 = damage
    escudo2 = "não"
if(escudo2 === 1) {
    calcTank = 2 / atq - defesa2 
    damage = hp2 - calcTank
    hp2 = damage
    escudo2 = "sim"
}
alert(` ${name2} Tomou ${calcTank} de dano, sobrou apenas ${hp2} de vida`)
}

if(start === 2) {
    let calcTank = atq2 - defesa
    let damage = hp = calcTank
    hp = damage
    escudo = "não"
    if(escudo === 1) {
        calcTank = 2 / atq2 - defesa 
        damage = hp - calcTank
        hp = damage
        escudo = "sim"
    }
    alert(` ${name1} Tomou ${calcTank} de dano, sobrou apenas ${hp1} de vida`)
}




   
    if(hp <= 0) {
        alert(name2 + " ganhou")
       
    } 
    
    
    if(hp2 <= 0) {
        alert(name1 + " ganhou")
    
    }
    
    


   











