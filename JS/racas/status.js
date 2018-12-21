function MostarStatus(){

    var e = document.getElementById("raca");
    var racaLista = e.options[e.selectedIndex].text;

    for(item in racas) {
        if (racaLista === racas[item].nome){
            document.getElementById("RSf").innerHTML = `+${racas[item].str}`;
            document.getElementById("RSd").innerHTML = `+${racas[item].dex}`;
            document.getElementById("RScon").innerHTML = `+${racas[item].con}`;
            document.getElementById("RSi").innerHTML = `+${racas[item].int}`;
            document.getElementById("RSs").innerHTML = `+${racas[item].wis}`;
            document.getElementById("RScha").innerHTML = `+${racas[item].cha}`;
        }
    }
}
