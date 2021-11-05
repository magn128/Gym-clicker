var i = 0;
var x = 1;
var img = 1;
var testo = 0;
var boughta = false;
var boughtp = false;
var boughtpw = false;
function function1() {   
i = i + x + testo;

document.getElementById("score").innerHTML = "Du har " + i + " penger!"
document.getElementById("testo").innerHTML = "Du har " + testo + " testosteron!"
}

function airpods() {
    if (boughta === false) {
        testo = testo + 20
    }
    boughta = true;
    document.getElementById("airpods_mld").innerHTML = "Du har kjøpt airpods!";
}
function protein() {
    if (boughtp === false) {
        testo = testo + 5
    }
    boughtp = true;
    document.getElementById("protein_mld").innerHTML = "Du har kjøpt protein!";
}
function pwo() {
    if (boughtpw === false) {
        testo = testo + 10
    }
    boughtpw = true;
    document.getElementById("pwo_mld").innerHTML = "Du har kjøpt PWO!";
}



<<<<<<< Updated upstream
=======
document.getElementById("score").innerHTML = i 
document.getElementById("")
}
>>>>>>> Stashed changes
