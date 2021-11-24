var i = 0;
var x = 1;
var img = 1;
var testo = 0;
var boughta = false;
var boughtp = false;
var boughtpw = false;
var pwo_pris = 100;
var protein_pris = 500;
var airpods_pris = 1500;
var roids_pris = 5000;
var passiv = 0;
var boughtr = false;


function function1() {   
    i = i + x + testo;
    new Audio("sound/Recording (3).m4a").play();
    


}

function airpods() {
    if (boughta === false) {
        if (i >= airpods_pris) {
        testo = testo + 20
        boughta = true;
        document.getElementById("airpods_mld").innerHTML = "Du har kjøpt airpods!";
        new Audio("sound/pump.mp3").play();
    
    }
    
}
    
}
function protein() {
    if (boughtp === false) {
        if (i >= protein_pris) {
        testo = testo + 10
        boughtp = true;
        document.getElementById("protein_mld").innerHTML = "Du har kjøpt protein pulver!";
        new Audio("sound/protein.mp3").play();
    }
}

}
function pwo() {
    if (boughtpw === false) {
        
        if (i >= pwo_pris) {
            i = i - pwo_pris
            testo = testo + 2
            boughtpw = true;
            document.getElementById("pwo_mld").innerHTML = "Du har kjøpt PWO!";
            //takk noa
            new Audio("sound/lightweight_baby.mp3").play();
            
        }
    }
    
    
}
function roids(){
    if (boughtr === false) {
        if ( i >= roids_pris) {
            i = i - roids_pris
            
        }
    }
}

setInterval(function(){
    document.getElementById("score").innerHTML = "Du har " + i + " penger!";
    document.getElementById("testo").innerHTML = "Du har " + testo + " testosteron!";
    
    //clicks++;
}, 10);
setInterval(function(){
    document.getElementById("pwo_pris").innerHTML = pwo_pris;
    document.getElementById("protein_pris").innerHTML = protein_pris;
    document.getElementById("airpods_pris").innerHTML = airpods_pris;

}, 1000);

