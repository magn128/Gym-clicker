var version = 4;
var penger = 0;
var x = 1;
var img = 1;
var testo = 0;
var boughta = 0;
var boughtp = 0;
var boughtpw = 0;
var boughtr = 0;
var pwo_pris = 100;
var protein_pris = 500;
var airpods_pris = 1500;
var roids_pris = 5000;
var passiv = 0;
var power = 0;
var gold_dumbbell = false;

setInterval(function () {
    var sjanse = 1
    // Kopiert fra StackOverflow
    var myNode = document.getElementById("1");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
                }
    var myNode = document.getElementById("2");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
    var myNode = document.getElementById("3");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
    // Kopiert fra StackOverflow
    if (sjanse <= 10) {
        random_plassering = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if (random_plassering === 1) {
            document.getElementById("1").innerHTML = '<img onclick="golden_dumbell()" src="/img/golden_dumbell.png" alt="">'
        } else if (random_plassering === 2) {
            document.getElementById("1").innerHTML = '<img onclick="golden_dumbell()" src="/img/golden_dumbell.png" alt="">'
        } else if (random_plassering === 3) {
            document.getElementById("1").innerHTML = '<img onclick="golden_dumbell()" src="/img/golden_dumbell.png" alt="">'
        } else {
            document.write("error 404")
        }
    }
}, 5000)

function golden_dumbell() {
    var random_peng = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    penger = penger + random_peng;
    if (random_plassering === 1) {
        document.getElementById("1").innerHTML = '<p>Du fikk <b>' + random_peng + '</b> penger!</p>'
    } else if (random_plassering === 2) {
        document.getElementById("2").innerHTML = '<p>Du fikk <b>' + random_peng + '</b> penger!</p>'
    } else if (random_plassering === 3) {
        document.getElementById("3").innerHTML = '<p>Du fikk <b>' + random_peng + '</b> penger!</p>'
    }
}

window.onload = function load() {
    if(parseInt(localStorage.getItem("saved")) === version){
    if(localStorage.getItem("saved") !== null){
     
     if(localStorage["saved"] !== undefined){
     
         if(typeof(localStorage.getItem("saved")) === "string"){
         penger = parseInt(localStorage.getItem("penger"));
         x = parseInt(localStorage.getItem("x"));
         img = parseInt(localStorage.getItem("img"));
         testo = parseInt(localStorage.getItem("testo"));
         boughta = parseInt(localStorage.getItem("boughta"));
         boughtp = parseInt(localStorage.getItem("boughtp"));
         boughtpw = parseInt(localStorage.getItem("boughtpw"));
         pwo_pris = parseInt(localStorage.getItem("pwo_pris"));
         protein_pris = parseInt(localStorage.getItem("protein_pris"));
         airpods_pris = parseInt(localStorage.getItem("airpods_pris"));
         roids_pris = parseInt(localStorage.getItem("roids_pris"));
         passiv = parseInt(localStorage.getItem("passiv"));
         boughtr = parseInt(localStorage.getItem("boughtr"));
        power = parseInt(localStorage.getItem("power"));
        console.log("Loaded!");
 }
  }
  }
  }
  }

  var bb = setInterval(save,10000);
  function save() {
      localStorage.setItem("saved", version);
      localStorage.setItem("penger", penger);
      localStorage.setItem("x", x);
      localStorage.setItem("img", img);
      localStorage.setItem("testo", testo);
      localStorage.setItem("boughta", boughta);
      localStorage.setItem("boughtp", boughtp);
      localStorage.setItem("boughtpw", boughtpw);
      localStorage.setItem("boughtr", boughtr);
      localStorage.setItem("pwo_pris", pwo_pris);
      localStorage.setItem("protein_pris", protein_pris);
      localStorage.setItem("airpods_pris", airpods_pris);
      localStorage.setItem("roids_pris", roids_pris);
      localStorage.setItem("passiv", passiv);
      localStorage.setItem("power", power);
  
      console.log("Saved");
  
  }
function reset() {
    penger = 0;
    x = 1;
    img = 1;
    testo = 0;
    boughta = 0;
    boughtp = 0;
    boughtpw = 0;
    boughtr = 0;
    pwo_pris = 100;
    protein_pris = 500;
    airpods_pris = 1500;
    roids_pris = 5000;
    passiv = 0;
    power = 0;
    
    localStorage.setItem("saved", version);
      localStorage.setItem("penger", penger);
      localStorage.setItem("x", x);
      localStorage.setItem("img", img);
      localStorage.setItem("testo", testo);
      localStorage.setItem("boughta", boughta);
      localStorage.setItem("boughtp", boughtp);
      localStorage.setItem("boughtpw", boughtpw);
      localStorage.setItem("boughtr", boughtr);
      localStorage.setItem("pwo_pris", pwo_pris);
      localStorage.setItem("protein_pris", protein_pris);
      localStorage.setItem("airpods_pris", airpods_pris);
      localStorage.setItem("roids_pris", roids_pris);
      localStorage.setItem("passiv", passiv);
      localStorage.setItem("power", power);
    window.location.reload();
}

function function1() {   
    penger = penger + x + testo;
    new Audio("sound/Recording (3).m4a").play();
    


}

function airpods() {

        if (penger >= airpods_pris) {
            penger = penger - airpods_pris
            airpods_pris *= 2;
            testo += 20;
            boughta += 1;
            document.getElementById("airpods_mld").innerHTML = "Du har kjøpt airpods!";
            new Audio("sound/pump.mp3").play();
    
    }
    
}
function protein() {

        if (penger >= protein_pris) {
            penger = penger - protein_pris
            protein_pris *= 1.1;
            testo += 10;
            boughtp += 1;
            document.getElementById("protein_mld").innerHTML = "Du har kjøpt protein pulver!";
            new Audio("sound/protein.mp3").play();
        }

}
function pwo() {
   
        
        if (penger >= pwo_pris) {
            penger = penger - pwo_pris
            pwo_pris *= 1.1;
            testo += 2;
            boughtpw += 1;
            document.getElementById("pwo_mld").innerHTML = "Du har kjøpt PWO!";
            //takk noa
            new Audio("sound/lightweight_baby.mp3").play();
            
        }
    
    
    
}
function roids(){

        if ( penger >= roids_pris) {
            penger = penger - roids_pris
            roids_pris*= 2;
            testo += 10;
            power += 10
            document.getElementById("roids_mld").innerHTML = "Du har kjøpt roids!";
        }
}

setInterval(function(){
    document.getElementById("score").innerHTML = "Du har " + Math.floor(penger) + " penger!";
    document.getElementById("testo").innerHTML = "Du har " + Math.floor(testo) + " testosteron!";
    
    //clicks++;
}, 10);
setInterval(function(){
    document.getElementById("pwo_pris").innerHTML = Math.floor(pwo_pris);
    document.getElementById("protein_pris").innerHTML = Math.floor(protein_pris);
    document.getElementById("airpods_pris").innerHTML = Math.floor(airpods_pris);
    document.getElementById("roids_pris").innerHTML = Math.floor(roids_pris)
    document.getElementById("pwo_mengde").innerHTML = Math.floor(boughtpw)
    document.getElementById("protein_mengde").innerHTML = Math.floor(boughtp)
    document.getElementById("airpods_mengde").innerHTML = Math.floor(boughta)
    document.getElementById("roids_mengde").innerHTML = Math.floor(boughtr)

}, 10);
setInterval(function() {
    penger += power

}, 1000);

