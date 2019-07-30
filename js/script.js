let buttons = document.getElementsByClassName("buttons");
let number = document.getElementById("number");
let number_mini = document.getElementById("number_mini");
let reset = document.getElementById("reset");
let square = document.getElementById("square");
let racine = document.getElementById("racine");

function carre( a){
    return a * a;
}

function calculator() {
    let result = number.textContent;
    let loga ;
    let lastNb = number.textContent.substr(-1);
    
    if (this.textContent == "AC") {
       number.textContent =  clear();
       number_mini.textContent = "calcul";

    }else if (this.textContent == "log") {
        loga = number.textContent;
        number.textContent = "log("+lastNb ;
        
     }else if (this.id == "square") { //Condition du carré
         c = number.textContent;
         number.textContent = carre(number.textContent);
         number_mini.textContent = c+ "\u00b2 =";
         
     }else if (this.id == "racine") { //Condition de la racine carre
         c = number.textContent;
         number.textContent = Math.sqrt(number.textContent);
         number_mini.textContent = "\u221a"+c+" =";
     }else if (this.textContent == "x") { //remplacer le signe x en * pour l'opération
        number.textContent = number.textContent  + "*";
        
    }else if (this.textContent == "←") {
        let sup = number.textContent;
        if (number.textContent.length == 1){
            number.textContent = sup.substring(0, sup.length - 2);
            number_mini.textContent = "calcul";
        }else {
        
         number.textContent = sup.substring(0, sup.length - 1); //Supprimer le dernier caractère
         number_mini.textContent = number.textContent;
        }
    }else if (this.textContent == "=") { //Condition pour le calcul

        if (number.textContent.startsWith("log")) { //Conditions du logarithme
           
           if (number.textContent.substr(-2,1) === ")") {
               lastNb = number.textContent.substr(-3, 1);
               console.log(lastNb);
               number.textContent = Math.log(lastNb);
               number_mini.textContent = "log("+lastNb+") =";
           }else{
            lastNb = number.textContent.substr(-1,1);
            number.textContent = Math.log(lastNb);
            number_mini.textContent = "log("+lastNb+") =";
           }
        }else{    
        a = number.textContent;
        number_mini.textContent = a + " =";
        number.textContent = eval(result);
        }
    }
    else{
    
    number.textContent = number.textContent + this.textContent ;
    result = number.textContent;
    }
     
    console.log(number.textContent);
 }
 
 //***************************************************** */
 
 function clear(){ //on reinitialise le compteur
 
    return number.textContent = "";
 
 }
 
 reset.addEventListener("click",clear);
 
 //**************************************************** */
 
 for (let i = 0; i < buttons.length; i++) {
 
     buttons[i].addEventListener("click", calculator);
 }

 
