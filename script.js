var PLN = 5000;
var USD = 0;
var EUR = 0;
var GBP = 0;
var konto = "PL " + "69 " + "2137 " + "1337 " + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) + ' ' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) + ' ' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) + ' ' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);


function blik(){
    var blik = Math.floor(Math.random() * (999 - 100 + 1) + 100) + ' ' + Math.floor(Math.random() * (999 - 100 + 1) + 100);
    document.getElementById("blik").innerHTML=blik;
}

function wyswietlfirm(){
    document.getElementById("saldo").innerHTML=(Math.round(PLN*100)/100) + " PLN";
    document.getElementById("saldo2").innerHTML=(Math.round(GBP*100)/100) + " GBP";
    document.getElementById("saldo3").innerHTML=(Math.round(EUR*100)/100) + " EUR";
    document.getElementById("saldo4").innerHTML=(Math.round(USD*100)/100) + " USD";
    document.getElementById("numerkonta").innerHTML=konto;
    blik();
}

function wyswietlosob(){
    document.getElementById("saldo").innerHTML=(Math.round(PLN*100)/100) + " PLN";
    document.getElementById("numerkonta").innerHTML=konto;
    blik();
}


function przelew(){
    var dla = document.getElementById("dla").value;
    var ile = document.getElementById("ile").value;
    var waluting = document.getElementById("waluting");
    var text = waluting.options[waluting.selectedIndex].text;
    var roznicaPLN = ile-PLN;
    var roznicaGBP = ile-GBP;
    var roznicaUSD = ile-USD;
    var roznicaEUR = ile-EUR;
    var jaka
    var napis
    if(text == "USD"){
        napis= " USD";
    }
    if(text == "EUR"){
        napis= " EUR";
    }
    if(text == "GBP"){
        napis= " GBP";
    }
    if(text == "PLN"){
        napis= " PLN";
    }


    if(dla.length != 26 || isNaN(dla)){
        document.getElementById("przelewwynik").innerHTML="Numer konta jest nie właściwy";
    }
    else if(ile<0){
        document.getElementById("przelewwynik").innerHTML="Kwota musi być większa od zera";
    }
    else if(text == "USD" && ile>USD){
        document.getElementById("przelewwynik").innerHTML="Nie posiadasz tyle pieniędzy, brakuje Ci " + roznicaUSD + text;
    }
    else if(text == "EUR" && ile>EUR){
        document.getElementById("przelewwynik").innerHTML="Nie posiadasz tyle pieniędzy, brakuje Ci " + roznicaEUR + text;
    }
    else if(text == "GBP" && ile>GBP){
        document.getElementById("przelewwynik").innerHTML="Nie posiadasz tyle pieniędzy, brakuje Ci " + roznicaGBP + text;
    }
    else if(text == "PLN" && ile>PLN){
        document.getElementById("przelewwynik").innerHTML="Nie posiadasz tyle pieniędzy, brakuje Ci " + roznicaPLN + text;
    }
    else if(isNaN(ile)){
        document.getElementById("przelewwynik").innerHTML="Kwota nie jest liczbą";
    }
    else if(dla.length == 26 && text=="USD" && USD>=ile){
        USD = USD - ile;
        document.getElementById("przelewwynik").innerHTML="Wykonano";
            document.getElementById("saldo").innerHTML=(Math.round(PLN*100)/100) + " PLN";
            document.getElementById("saldo2").innerHTML=(Math.round(GBP*100)/100) + " GBP";
            document.getElementById("saldo3").innerHTML=(Math.round(EUR*100)/100) + " EUR";
            document.getElementById("saldo4").innerHTML=(Math.round(USD*100)/100) + " USD";
    }
    else if(dla.length == 26 && text=="EUR" && EUR>=ile){
        EUR = EUR - ile;
        document.getElementById("przelewwynik").innerHTML="Wykonano";
        document.getElementById("saldo").innerHTML=(Math.round(PLN*100)/100) + " PLN";
        document.getElementById("saldo2").innerHTML=(Math.round(GBP*100)/100) + " GBP";
        document.getElementById("saldo3").innerHTML=(Math.round(EUR*100)/100) + " EUR";
        document.getElementById("saldo4").innerHTML=(Math.round(USD*100)/100) + " USD";
    }
    else if(dla.length == 26 && text=="PLN" && PLN>=ile){
        PLN = PLN - ile;
        document.getElementById("przelewwynik").innerHTML="Wykonano";
        document.getElementById("saldo").innerHTML=(Math.round(PLN*100)/100) + " PLN";
        document.getElementById("saldo2").innerHTML=(Math.round(GBP*100)/100) + " GBP";
        document.getElementById("saldo3").innerHTML=(Math.round(EUR*100)/100) + " EUR";
        document.getElementById("saldo4").innerHTML=(Math.round(USD*100)/100) + " USD";
    }
    else if(dla.length == 26 && text=="GBP" && GBP>=ile){
        GBP = GBP - ile;
        document.getElementById("przelewwynik").innerHTML="Wykonano";
        document.getElementById("saldo").innerHTML=(Math.round(PLN*100)/100) + " PLN";
        document.getElementById("saldo2").innerHTML=(Math.round(GBP*100)/100) + " GBP";
        document.getElementById("saldo3").innerHTML=(Math.round(EUR*100)/100) + " EUR";
        document.getElementById("saldo4").innerHTML=(Math.round(USD*100)/100) + " USD";
    }
}

function przelewosob(){
    var dla = document.getElementById("dla").value;
    var ile = document.getElementById("ile").value;
    var roznicaPLN = ile-PLN;

 

    if(dla.length != 26 || isNaN(dla)){
        document.getElementById("przelewwynik").innerHTML="Numer konta jest nie właściwy";
    }
    else if(ile<0){
        document.getElementById("przelewwynik").innerHTML="Kwota musi być większa od zera";
    }
    else if(ile>PLN){
        document.getElementById("przelewwynik").innerHTML="Nie posiadasz tyle pieniędzy, brakuje Ci " + roznicaPLN + text;
    }
    else if(isNaN(ile)){
        document.getElementById("przelewwynik").innerHTML="Kwota nie jest liczbą";
    }
    else if(dla.length == 26 && PLN>=ile){
        PLN = PLN - ile;
        document.getElementById("przelewwynik").innerHTML="Wykonano";
        document.getElementById("saldo").innerHTML=(Math.round(PLN*100)/100) + " PLN";
    }

}



function exchange(){
    var lista = document.getElementById("lista");
    var text =lista.options[lista.selectedIndex].text;
    var kwota = document.getElementById("kwota").value;
    var mnoznik;
    var jaka;

    if(text == "GBP"){
        mnoznik = 4.98;
        jaka = GBP;
    }
    else if(text == "EUR"){
        mnoznik = 4.47;
        jaka = EUR;
    }
    else if(text == "USD"){
        mnoznik = 3.73;
        jaka = USD;
}

    var wynik = kwota * mnoznik;

    if(isNaN(kwota) || kwota <= 0){
        document.getElementById("exchangewynik").innerHTML = "Podana kwota jest niewłaściwa"
    }
    else{

    document.getElementById("exchangewynik").innerHTML = (Math.round(wynik*100)/100)+ " PLN";
}

}

function exchange2(){
    var lista = document.getElementById("lista");
    var text =lista.options[lista.selectedIndex].text;
    var kwota = document.getElementById("kwota").value;
    var mnoznik;
    var jaka;

    if(text == "GBP"){
        mnoznik = 4.98;
        jaka = GBP;
    }
    else if(text == "EUR"){
        mnoznik = 4.47;
        jaka = EUR;
    }
    else if(text == "USD"){
        mnoznik = 3.73;
        jaka = USD;
}

    var wynik = kwota * mnoznik;

    if(isNaN(kwota) || kwota <= 0){
        document.getElementById("exchangewynik2").innerHTML = "Podana kwota jest niewłaściwa"
    }
    else if(wynik > PLN){
        document.getElementById("exchangewynik2").innerHTML = "Nie masz tyle pieniędzy"
    }
    else{
        
        PLN = PLN - wynik;
        if(text == "USD"){
            USD = USD + (Math.round(kwota*100)/100);}
        else if(text == "EUR"){
            EUR = EUR + (Math.round(kwota*100)/100);}
        else if(text == "GBP"){
            GBP = GBP + (Math.round(kwota*100)/100);}

        document.getElementById("exchangewynik2").innerHTML="Przewalutowano";
        document.getElementById("saldo").innerHTML=(Math.round(PLN*100)/100) + " PLN";
        document.getElementById("saldo2").innerHTML=(Math.round(GBP*100)/100) + " GBP";
        document.getElementById("saldo3").innerHTML=(Math.round(EUR*100)/100) + " EUR";
        document.getElementById("saldo4").innerHTML=(Math.round(USD*100)/100) + " USD";
}

}

function kredyt(){
    var zarobek = document.getElementById("kredyt").value;
    var wydatki = document.getElementById("wydatki").value;
    var ilechcesz = document.getElementById("ilechcesz").value;
    var ilerat = document.getElementById("ilerat").value;

    if(isNaN(zarobek) || 1400>zarobek || isNaN(wydatki) || isNaN(ilechcesz) || isNaN(ilerat) || ilechcesz <= 0 || ilerat <= 0 || wydatki <=0){
        document.getElementById("kredytwynik").innerHTML="Któraś z podanych informacji jest nieprawidłowa!";
    }
    else if((zarobek-wydatki)>((ilechcesz/ilerat)+1000)){
        document.getElementById("kredytwynik").innerHTML="Możesz wziąć kredyt!";
    }
    else{
        document.getElementById("kredytwynik").innerHTML="Za biedny jesteś polaczku, beka z cb!";
    }
}

