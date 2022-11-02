//Stedentrips
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
//Last Minute
function Colombia() {
    var1 = "(Deze reis is beschikbaar tot morgen om 12:30) 'Colombia is een ideale stad om drugs te dealen!' ~ (Ft. Pablo) Verder is Colombia een mooi en zonnige stad om je vakantie te vieren! Er zijn veel verschillende culturen in Colombia en daardoor valt er veel te beleven. Al vanaf &euro;321. Ga naar tickets om uw last minute ticket te halen! Dit is Colombia!";
    document.getElementById("main_txt_lm").innerHTML = var1;
}
function Zwitserland() {
    var1 = "(Deze reis is beschikbaar tot vrijdag om 14:15) Zwitserland staat voral bekent om zijn wintersport tourisme. Je kan er in de winter skien, snowboarden en langlaufen. Al vanaf &euro;240. Ga naar tickets om uw last minute ticket te halen! Dit is Zwitserland!";
    document.getElementById("main_txt_lm").innerHTML = var1;
}
function Parijs() {
    var1 = "(Deze reis is beschikbaar tot dinsdag om 23:19) Parijs is een van de bekenste locaties van heel Europa! De stad ligt in Frankrijk en staat voornamelijk bekent om de eifeltoren! Al vanaf &euro;410. Ga naar tickets om uw last minute tickets te halen! Dit is Parijs!";
    document.getElementById("main_txt_lm").innerHTML = var1;
}
function Alpen() {
    var1 = "(Deze reis is beschikbaar tot woensdag om 9:00) De Alpen is een prachtig berggebied in Europa! Je kan er allerlei winteractiviteiten doen, op een terrasje gaan zitten, een Westereenequipment kopen, enz. Er valt genoeg te beleven. Al vanaf &euro;280. Ga naar tickets om uw last minute tickets te halen! Dit zijn de Alpen!";
    document.getElementById("main_txt_lm").innerHTML = var1;
}
function Lapalma() {
    var1 = "(Deze reis is beschikbaar tot woensdag om 14:25) Lapalma is een zonnig eiland in Spanje. Je hebt er veel tourisme en het eiland heeft zelft zijn eigen cultuur. Ook heeft het eiland een bijzondere natuur. Zo zijn er planten en dieren die ergens anders zeldzaam zijn. Al vanaf &euro;320. Ga naar tickets om uw last minute tickets te halen! Dit is Lapalma!";
    document.getElementById("main_txt_lm").innerHTML = var1;
}
function Cyprus() {
    var1 = "(Deze reis is beschikbaar tot maandag om 17:28) Cyprus is een oost-middelandsezee gelegen eiland. Het land ligt tussen Turkije en Syrie in. Het land heeft twee politieken en je kan er mooi buiten zitten. Ook heb je er veel water activiteiten. Al vanaf &euro;305 Ga naar tickets om uw last minute tickets te halen! Dit is Cyprus!";
    document.getElementById("main_txt_lm").innerHTML = var1;
}
//Verre Reizen
function India() {
    var1 = "India is een groot land met grote en vele culturen. Het land heeft ook veel geloven. Je kan er ook komen voor de natuur die er ontdanks de drukke steden ook is. Al vanaf &euro;490 kunt u voor een midweek in dit gebouw doorbrengen. Ga naar tickets om uw reis te boeken! Dit is India!";
    document.getElementById("mini_content_ss").innerHTML = var1;
}