function calcul(){
var champ1 = document.getElementById('champ1').value;
var champ2 = document.getElementById('champ2').value;
var resultat =  champ2 / (champ1 * champ1);

document.getElementById('resultat').value = resultat
}