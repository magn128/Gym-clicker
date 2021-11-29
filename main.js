var version = 4;
var penger = 0;
var formue = 0;
var x = 1;
var img = 1;
var testo = 0;
var boughta = 0;
var boughtp = 0;
var boughtpw = 0;
var boughtroids = 0;
var boughtbelt = 0;
var boughtsarms = 0;
var boughtsleeves = 0;
var boughtcreatine = 0;
var pwo_pris = 100;
var protein_pris = 500;
var airpods_pris = 1500;
var roids_pris = 5000;
var belte_pris = 100000;
var sarms_pris = 200000;
var sleeves_pris = 1000000;
var creatine_pris = 2000000;
var passiv = 0;
var power = 0;
var gold_dumbbell = false;
var max = 0;
var min = 0;
var roids_fare = 0;



// Fredrik hjalp med dette
setInterval(function () {
    var sjanse = Math.floor((Math.random() * 100) + 1);
    // Kopiert fra StackOverflow
    var myNode = document.getElementById("1");
        while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
                }
    var myNode = document.getElementById("golden");
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
        gold_dumbbell = false;
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
    } else {
        console.log(sjanse)
    }
}, 5000)

function golden_dumbell() {
    max = Math.floor(penger / 3)
    min = Math.floor(penger / 10)
    if (gold_dumbbell) {

    } else {
        var random_peng = Math.floor(Math.random() * (max - min + 1)) + min;
        penger = penger + random_peng;
        formue = formue + random_peng
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
        document.getElementById("golden").innerHTML = "Du tjente <b>" + random_peng + "</b> penger!";
        gold_dumbbell = true;
    }
}
// Fredrik hjalp med dette

window.onload = function load() {
    if(parseInt(localStorage.getItem("saved")) === version){
    if(localStorage.getItem("saved") !== null){
     
     if(localStorage["saved"] !== undefined){
     
        if(typeof(localStorage.getItem("saved")) === "string"){
            penger = parseInt(localStorage.getItem("penger"));
            formue = parseInt(localStorage.getItem("formue"));
            x = parseInt(localStorage.getItem("x"));
            img = parseInt(localStorage.getItem("img"));
            testo = parseInt(localStorage.getItem("testo"));
            boughta = parseInt(localStorage.getItem("boughta"));
            boughtp = parseInt(localStorage.getItem("boughtp"));
            boughtpw = parseInt(localStorage.getItem("boughtpw"));
            boughtcreatine = parseInt(localStorage.getItem("boughtcreatine"));
            pwo_pris = parseInt(localStorage.getItem("pwo_pris"));
            protein_pris = parseInt(localStorage.getItem("protein_pris"));
            airpods_pris = parseInt(localStorage.getItem("airpods_pris"));
            belte_pris = parseInt(localStorage.getItem("belte_pris"));
            roids_pris = parseInt(localStorage.getItem("roids_pris"));
            sarms_pris = parseInt(localStorage.getItem("sarms_pris"));
            sleeves_pris = parseInt(localStorage.getItem("sleeves_pris"));
            creatine_pris = parseInt(localStorage.getItem("creatine_pris"));
            passiv = parseInt(localStorage.getItem("passiv"));
            boughtroids = parseInt(localStorage.getItem("boughtroids"));
            boughtbelt = parseInt(localStorage.getItem("boughtbelt"));
            boughtsarms = parseInt(localStorage.getItem("boughtsarms"));
            boughtsleeves = parseInt(localStorage.getItem("boughtsleeves"));
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
      localStorage.setItem("formue", formue);
      localStorage.setItem("x", x);
      localStorage.setItem("img", img);
      localStorage.setItem("testo", testo);
      localStorage.setItem("boughta", boughta);
      localStorage.setItem("boughtp", boughtp);
      localStorage.setItem("boughtpw", boughtpw);
      localStorage.setItem("boughtroids", boughtroids);
      localStorage.setItem("boughtbelt", boughtbelt);
      localStorage.setItem("boughtsarms", boughtsarms);
      localStorage.setItem("boughtsleeves", boughtsleeves);
      localStorage.setItem("boughtcreatine", boughtcreatine);
      localStorage.setItem("belte_pris", belte_pris);
      localStorage.setItem("pwo_pris", pwo_pris);
      localStorage.setItem("protein_pris", protein_pris);
      localStorage.setItem("airpods_pris", airpods_pris);
      localStorage.setItem("roids_pris", roids_pris);
      localStorage.setItem("sarms_pris", sarms_pris);
      localStorage.setItem("sleeves_pris", sleeves_pris);
      localStorage.setItem("creatine_pris", creatine_pris);
      localStorage.setItem("passiv", passiv);
      localStorage.setItem("power", power);
  
      console.log("Saved");
  
  }
function reset() {
    penger = 0;
    formue = 0;
    x = 1;
    img = 1;
    testo = 0;
    boughta = 0;
    boughtp = 0;
    boughtpw = 0;
    boughtroids = 0;
    boughtbelt = 0;
    boughtsarms = 0;
    boughtsleeves = 0;
    boughtcreatine = 0;
    pwo_pris = 100;
    protein_pris = 500;
    airpods_pris = 1500;
    roids_pris = 5000;
    belte_pris = 100000;
    sarms_pris = 200000;
    sleeves_pris = 1000000;
    creatine_pris = 2000000;
    passiv = 0;
    power = 0;
    
    localStorage.setItem("saved", version);
    localStorage.setItem("penger", penger);
    localStorage.setItem("formue", formue);
    localStorage.setItem("x", x);
    localStorage.setItem("img", img);
    localStorage.setItem("testo", testo);
    localStorage.setItem("boughta", boughta);
    localStorage.setItem("boughtp", boughtp);
    localStorage.setItem("boughtpw", boughtpw);
    localStorage.setItem("boughtroids", boughtroids);
    localStorage.setItem("boughtbelt", boughtbelt);
    localStorage.setItem("boughtsarms", boughtsarms);
    localStorage.setItem("boughtsleeves", boughtsleeves);
    localStorage.setItem("boughtcreatine", boughtcreatine);
    localStorage.setItem("pwo_pris", pwo_pris);
    localStorage.setItem("protein_pris", protein_pris);
    localStorage.setItem("airpods_pris", airpods_pris);
    localStorage.setItem("roids_pris", roids_pris);
    localStorage.setItem("belte_pris", belte_pris);
    localStorage.setItem("sarms_pris", sarms_pris);
    localStorage.setItem("sleeves_pris", sleeves_pris);
    localStorage.setItem("creatine_pris", creatine_pris);
    localStorage.setItem("passiv", passiv);
    localStorage.setItem("power", power);
    window.location.reload();
}

function function1() {   
    penger = penger + x + testo;
    formue = formue + x + testo;
    new Audio("sound/Recording (3).m4a").play();
    


}

function airpods() {

        if (penger >= airpods_pris) {
            penger = penger - airpods_pris
            airpods_pris *= 1.3;
            testo += 50;
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
            roids_pris*= 1.2;
            testo += 10;
            boughtroids += 1;
            roids_fare += 1;
            power = boughtroids *12;
            document.getElementById("roids_mld").innerHTML = "Du har kjøpt roids!";
            new Audio("sound/").play();
        }
        if (boughtroids >= 25) {
            
        }
}
function belte() {

    if (penger >= belte_pris) {
        penger = penger - belte_pris
        belte_pris *= 1.3;
        testo += 7500;
        boughtbelt += 1;
        document.getElementById("belte_mld").innerHTML = "Du har kjøpt belte!";
        new Audio("sound/").play();
    }
}

function sarms() {
    
    if (penger >= sarms_pris) {
        penger = penger - sarms_pris
        sarms_pris *= 1.5;
        testo += 10;
        boughtsarms += 1;
        power = boughtsarms *1500;
        document.getElementById("sarms_mld".innerHTML = "Du har kjøpt sarms!")
        new Audio("sound/").play();
    }
}

function sleeves() {

    if (penger >= sleeves_pris) {
        penger = penger - sleeves_pris
        sleeves_pris *= 1.3;
        testo += 1000;
        boughtsleeves += 1;
        document.getElementById("sleeves_mld").innerHTML = "Du har kjøpt Knee sleeves!";
        new Audio("sound/").play();
    }
}

function creatine(){

    if ( penger >= creatine_pris) {
        penger = penger - creatine_pris
        creatine_pris*= 1.2;
        testo += 10;
        boughtcreatine += 1;
        power = boughtcreatine *10000;
        document.getElementById("creatine_mld").innerHTML = "Du har kjøpt Creatin!";
        new Audio("sound/").play();
    }
}

setInterval(function(){
    document.getElementById("score").innerHTML = "Du har " + Math.floor(penger) + " penger!";
    document.getElementById("testo").innerHTML = "Du har " + Math.floor(testo) + " testosteron!";
    document.getElementById("formue").innerHTML = "Du har tjent " + Math.floor(formue) + " penger i karrieren din!"
    //clicks++;
}, 10);
setInterval(function(){
    document.getElementById("pwo_pris").innerHTML = Math.floor(pwo_pris);
    document.getElementById("protein_pris").innerHTML = Math.floor(protein_pris)
    document.getElementById("airpods_pris").innerHTML = Math.floor(airpods_pris)
    document.getElementById("roids_pris").innerHTML = Math.floor(roids_pris)
    document.getElementById("belte_pris").innerHTML = Math.floor(belte_pris)
    document.getElementById("sarms_pris").innerHTML = Math.floor(sarms_pris)
    document.getElementById("sleeves_pris").innerHTML = Math.floor(sleeves_pris)
    document.getElementById("creatine_pris").innerHTML = Math.floor(creatine_pris)
    document.getElementById("pwo_mengde").innerHTML = Math.floor(boughtpw)
    document.getElementById("protein_mengde").innerHTML = Math.floor(boughtp)
    document.getElementById("airpods_mengde").innerHTML = Math.floor(boughta)
    document.getElementById("roids_mengde").innerHTML = Math.floor(boughtroids)
    document.getElementById("belte_mengde").innerHTML = Math.floor(boughtbelt)
    document.getElementById("sarms_mengde").innerHTML = Math.floor(boughtsarms)
    document.getElementById("sleeves_mengde").innerHTML = Math.floor(boughtsleeves)
    document,getElementById("creatine_mengde").innerHTML = Math.floor(boughtcreatine)

}, 10);
setInterval(function() {
    penger += power
    formue += power

}, 1000);
