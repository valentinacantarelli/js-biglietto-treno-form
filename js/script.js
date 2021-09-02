//Nome, il numero km da percorrere e l'età del passeggero.
// calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina 
var bottoneGenera =document.getElementById("genera");
var bottoneAnnulla=document.getElementById("annulla");

bottoneGenera.addEventListener("click",
    function(){
        var nome=document.getElementById("nome").value;
        var distanza=parseInt(document.getElementById("distanza").value);
        var fasciaEta=document.getElementById("fascia-eta").value;
        
        var prezzo=distanza*0.21;
        var offerta= "Biglietto Standard";
        prezzo=prezzo.toFixed(2);
        if (fasciaEta == "minorenne"){
            prezzo=prezzo-(prezzo*0.20);
            offerta="Offerta Minorenni";
        }else if(fasciaEta=="over" ){
            prezzo=prezzo-(prezzo*0.40);
            offerta="Offerta Silver";
        }
        
        document.getElementById("nome-passeggero").innerHTML=nome;
        document.getElementById("offerta").innerHTML=offerta;
        document.getElementById("costo").innerHTML=prezzo +"€";
        
        document.getElementById("biglietto").classList.add("open");
    }
);
document.getElementById("carrozza").innerHTML += Math.floor(Math.random()*9)+1;
document.getElementById("codice-cp").innerHTML +=Math.floor(Math.random()*(99999 - 90000))+90000;


bottoneAnnulla.addEventListener("click",
 function(){
    var nome=document.getElementById("nome").value="";
    var distanza=parseInt(document.getElementById("distanza").value="");
    var fasciaEta=document.getElementById("fascia-eta").value="";
    

    document.getElementById("biglietto").classList.remove("open");
 }
);