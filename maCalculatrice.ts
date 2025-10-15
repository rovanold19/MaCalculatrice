//initialiser l'ecran vide
var currentInput="";
//ajouter une valeur
function press(value:string): void{
    currentInput+=value;
    updateScreen();
} 
// mettre a jour l'affichage
function updateScreen(): void{
    const screen=document.getElementById('screen') as HTMLInputElement;
    if(screen){
        screen.value=currentInput;
    }
}
//calculer resulta
function calculate(): void{
    try{
        const result=eval(currentInput);
        currentInput=result.toString();
        updateScreen();
    }catch{
        currentInput='erreur';
        updateScreen();
    }
}
//effacer tout
function clearString(): void{
    currentInput="";
    updateScreen();
    
}
//supprimer le dernier caractere
function deleteLast(): void{
    currentInput=currentInput.slice(0,-1);
    updateScreen();
}

// calcul du sinus
 function calcSin(): void {
  const radians = value * (Math.PI / 180); // Conversion en radians
  const resultat= Math.sin(radians);
  currentInput=resultat.toString();
  updateScreen();
}