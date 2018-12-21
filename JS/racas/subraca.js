const subRacas = [
    { raca: 'Aasimar', subRaca: 'Aasimar caido', str: 1, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Aasimar', subRaca: 'Aasimar protetor', str: 0, dex: 0, con: 0, int: 0, wis: 1, cha: 0 },
    { raca: 'Aasimar', subRaca: 'Aasimar castigador', str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
    { raca: 'Anão', subRaca: 'Anão cinza', str: 1, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Anão', subRaca: 'Anão da colina', str: 0, dex: 0, con: 0, int: 0, wis: 1, cha: 0 },
    { raca: 'Anão', subRaca: 'Anão da montanha', str: 2, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Elfo', subRaca: 'Drow', str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 1 },
    { raca: 'Elfo', subRaca: 'Eladrin', str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 0 },
    { raca: 'Elfo', subRaca: 'Elfo Alto', str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 0 },
    { raca: 'Elfo', subRaca: 'Elfo do Oceano', str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
    { raca: 'Elfo', subRaca: 'Elfo das sombras', str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
    { raca: 'Elfo', subRaca: 'Elfo da Floresta', str: 0, dex: 0, con: 0, int: 0, wis: 1, cha: 0 },
    { raca: 'Genasi', subRaca: 'Genasi do ar', str: 0, dex: 1, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Genasi', subRaca: 'Genasi da terra', str: 1, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Genasi', subRaca: 'Genasi de fogo', str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 0 },
    { raca: 'Genasi', subRaca: 'Genasi da Agua', str: 0, dex: 0, con: 0, int: 0, wis: 1, cha: 0 },
    { raca: 'Gith', subRaca: 'Githyanki', str: 2, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Gith', subRaca: 'Githzerai', str: 0, dex: 0, con: 0, int: 0, wis: 2, cha: 0 },
    { raca: 'Gonomo', subRaca: 'Gnomo das profundezas', str: 0, dex: 1, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Gonomo', subRaca: 'Gnomo da floresta', str: 0, dex: 1, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Gonomo', subRaca: 'Gnomo da rocha', str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
    { raca: 'Meio elfo', subRaca: 'Meio elfo', str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Meio elfo', subRaca: 'Variante', str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Halfling', subRaca: 'Halfling fantasmagorico', str: 0, dex: 0, con: 0, int: 0, wis: 1, cha: 0 },
    { raca: 'Halfling', subRaca: 'Halfling pé leve', str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 1 },
    { raca: 'Halfling', subRaca: 'Halfling robusto', str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
    { raca: 'Humano', subRaca: 'Humano', str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Humano', subRaca: 'Variante', str: -1, dex: -1, con: -1, int: -1, wis: -1, cha: -1 },
    { raca: 'Metamorfo', subRaca: 'Metamorfo bestial', str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
    { raca: 'Metamorfo', subRaca: 'Metamorfo presa longa', str: 1, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Metamorfo', subRaca: 'Metamorfo caçador', str: 0, dex: 0, con: 0, int: 0, wis: 1, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Tiefling', str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Absal tiefling', str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Ferral', str: 0, dex: 2, con: 0, int: 1, wis: 0, cha: -2 },
    { raca: 'Tiefling', subRaca: 'Linhagem de Baalzebul', str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Linhagem de Dispater', str: 0, dex: 1, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Linhagem de Fierna', str: 0, dex: 0, con: 0, int: 0, wis: 1, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Linhagem de Glasya', str: 0, dex: 1, con: 0, int: 0, wis: 0, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Linhagem de Levistus', str: 0, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Linhagem de Mammon', str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Linhagem de Mephistopheles', str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 0 },
    { raca: 'Tiefling', subRaca: 'Linhagem de Zariel', str: 1, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
];

function MostarsubRaca() {

    var subRacaLista = document.getElementById("subRaca");
    var e = document.getElementById("raca");
    var racaLista = e.options[e.selectedIndex].text;

    forca = parseInt(document.getElementById("RSf").innerHTML);
    destreza = parseInt(document.getElementById("RSd").innerHTML);
    constituicao = parseInt(document.getElementById("RScon").innerHTML);
    inteligencia = parseInt(document.getElementById("RSi").innerHTML);
    sabedoria = parseInt(document.getElementById("RSs").innerHTML);
    carisma = parseInt(document.getElementById("RScha").innerHTML);

    subRacaLista.options.length = 0;
    for (item in subRacas) {
        // console.log(subRacas[item].raca);
        if (racaLista === subRacas[item].raca) {
            // console.log(subRacas[item].subRaca);
            subRacaLista.options[subRacaLista.options.length] = new Option(subRacas[item].subRaca, item);
            var subRacaSelecionada = subRacaLista.options[subRacaLista.selectedIndex].text;
        }

        if (subRacaSelecionada) {
            for (item in subRacas) {
                if (subRacaSelecionada === subRacas[item].subRaca) {
                    document.getElementById("RSf").innerHTML = `+${forca + subRacas[item].str}`
                    document.getElementById("RSd").innerHTML = `+${destreza + subRacas[item].dex}`;
                    document.getElementById("RScon").innerHTML = `+${constituicao + subRacas[item].con}`;
                    document.getElementById("RSi").innerHTML = `+${inteligencia + subRacas[item].int}`;
                    document.getElementById("RSs").innerHTML = `+${sabedoria + subRacas[item].wis}`;
                    document.getElementById("RScha").innerHTML = `+${carisma + subRacas[item].cha}`;
                }
            }
        }
    }
}

function StatusSubRaca() {

    var e = document.getElementById("subRaca");
    var racaLista = e.options[e.selectedIndex].text;
    // console.log(racaLista);

    forca = parseInt(document.getElementById("raca").innerHTML);
    destreza = parseInt(document.getElementById("RSd").innerHTML);
    constituicao = parseInt(document.getElementById("RScon").innerHTML);
    inteligencia = parseInt(document.getElementById("RSi").innerHTML);
    sabedoria = parseInt(document.getElementById("RSs").innerHTML);
    carisma = parseInt(document.getElementById("RScha").innerHTML);

    for (item in subRacas) {
        // console.log(racaLista);
        // console.log(subRacas[item].subRaca);
        if (racaLista === subRacas[item].subRaca) {
            document.getElementById("RSf").innerHTML = `+${forca + subRacas[item].str}`
            document.getElementById("RSd").innerHTML = `+${destreza + subRacas[item].dex}`;
            document.getElementById("RScon").innerHTML = `+${constituicao + subRacas[item].con}`;
            document.getElementById("RSi").innerHTML = `+${inteligencia + subRacas[item].int}`;
            document.getElementById("RSs").innerHTML = `+${sabedoria + subRacas[item].wis}`;
            document.getElementById("RScha").innerHTML = `+${carisma + subRacas[item].cha}`;
        }
    }
}