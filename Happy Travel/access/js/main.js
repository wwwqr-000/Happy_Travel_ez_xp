function Barcelona() {
    var1 = "Barcelona ligt in Spanje en is een zonnige stad met veel inwoners. Geniet van het mooie weer, of cruse lekker met een boot door het water! Er valt ook genoeg te shoppen en te ontdekken! Dit is Barcelona. (Gidswandeling inbegrepen)";
    document.getElementById("mini_content_ss").innerHTML = var1;
    document.getElementById("mini_content_ss_mobile").innerHTML = var1;
}
function Maastricht() {
    var1 = "Maastricht ligt in Nederland en is een vrolijke en gezellige stad. Je kan er veel winkels bezoeken en er zijn vele activiteiten in de buurt, zoals de 'Grotten' van Valkenburg. Verder zijn er vele wandelroutes te belopen. Dit is Maastricht (Exclusief Gidswandeling)";
    document.getElementById("mini_content_ss").innerHTML = var1;
    document.getElementById("mini_content_ss_mobile").innerHTML = var1;
}
function Londen() {
    var1 = "Londen ligt in 'The UK' en is een drukke en bekende stad. Londen heeft veel geschiedenis en er valt daar van alles te beleven. Zo heb je 'The London Eye.' Dat is een reuzenrad wat een van de grootsten van europa is. Je kan overal wel in een kroeg komen in Londen. Dit is Londen. (Gidswandeling inbegrepen)";
    document.getElementById("mini_content_ss").innerHTML = var1;
    document.getElementById("mini_content_ss_mobile").innerHTML = var1;
}
function Curacao() {
    var1 = "Curacao is een zonnig eiland geschikt voor tourisme. Er zijn er veel mooie hotels en bouwwerken te vinden. Je kan er zwemmen. Dit is Curacao. (Exclusief gidswandeling)";
    document.getElementById("mini_content_ss").innerHTML = var1;
    document.getElementById("mini_content_ss_mobile").innerHTML = var1;
}
function NY() {
    var1 = "NewYork is een stad in Amerika. De stad heeft veel geschiedenis en is hypermodern. Zo heb je er veel kantoren en veel flat's. NewYork is echt een drukke en grote stad waar ook veel restaurantz zijn en waar ook overal wel wat te beleven valt. Dit is NewYork. (Gidswandeling inbegrepen)";
    document.getElementById("mini_content_ss").innerHTML = var1;
    document.getElementById("mini_content_ss_mobile").innerHTML = var1;
}
function invalid_character() {
    alert("Gegevens zijn niet juist! Pagina zal herladen...");
    verzending();
}
function verzending() {
    alert("Bent u een robot of mens? Klik op 'Ok' om verder te gaan.");
    var var1 = 25;
    var userinputvar2 = prompt("Wat is 5 x 5?");
    if(userinputvar2 === null) {
        invalid_character();
    }
    if(userinputvar2.includes("<")) { /* executie preventie */
        invalid_character();
    }
    else if(userinputvar2.includes(">")) { /* executie preventie */
        invalid_character();
    }
    else if (userinputvar2 == "25") {
        alert("U bent een mens!");
    }
    else {
        invalid_character();
    }
}
function Colombia() {
    var1 = "(Deze reis is beschikbaar tot morgen om 12:30) Colombia is een ideal land om drugs te dealen! (Ft. Pablo) Verder is Colombia een mooi en zonnig land om je vakantie te vieren! Er zijn veel verschillende culturen in Colombia en daardoor valt er veel te beleven. Dis is Colombia!";
    document.getElementById("main_txt_lm").innerHTML = var1;
}
function Zwitserland() {
    var1 = "(Deze reis is beschikbaar tot vrijdag om 14:15) Zwitserland is een moai loan emm!";
    document.getElementById("main_txt_lm").innerHTML = var1;
}