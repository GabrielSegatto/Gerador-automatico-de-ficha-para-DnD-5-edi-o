const racas = [
    {nome: 'Aarakocra', str:0, dex:2, con:0, int:0, wis:1, cha:0},
    {nome: 'Aasimar', str:0, dex:0, con:0, int:0, wis:0, cha:2},
    {nome: 'Bugbear', str:2, dex:1, con:0, int:0, wis:0, cha:0},
    {nome: 'Centauro', str:2, dex:0, con:1, int:0, wis:0, cha:0},
    {nome: 'Changeling', str:0, dex:1, con:0, int:0, wis:0, cha:2},
    {nome: 'Dragonborn', str:2, dex:0, con:0, int:0, wis:0, cha:1},
    {nome: 'Anão', str:0, dex:0, con:2, int:0, wis:0, cha:0},
    {nome: 'Elfo', str:0, dex:2, con:0, int:0, wis:0, cha:0},
    {nome: 'Firbolg', str:1, dex:0, con:0, int:0, wis:2, cha:0},
    {nome: 'Genasi', str:0, dex:0, con:2, int:0, wis:0, cha:0},
    {nome: 'Gith', str:0, dex:0, con:0, int:1, wis:0, cha:0},
    {nome: 'Gnomo', str:0, dex:0, con:0, int:2, wis:0, cha:0},
    {nome: 'Goblin', str:0, dex:2, con:1, int:0, wis:0, cha:0},
    {nome: 'Goliath', str:2, dex:0, con:1, int:0, wis:0, cha:0},
    {nome: 'Meio orc', str:2, dex:0, con:1, int:0, wis:0, cha:0},
    {nome: 'Meio elfo', str:0, dex:0, con:0, int:0, wis:0, cha:2},
    {nome: 'Halfling', str:0, dex:2, con:0, int:0, wis:0, cha:0},
    {nome: 'Hobgoblin', str:0, dex:0, con:2, int:1, wis:0, cha:0},
    {nome: 'Humano', str:1, dex:1, con:1, int:1, wis:1, cha:1},
    {nome: 'Kenku', str:0, dex:2, con:0, int:0, wis:1, cha:0},
    {nome: 'Kobold', str:-2, dex:2, con:0, int:0, wis:0, cha:0},
    {nome: 'Lizardfolk', str:0, dex:0, con:2, int:0, wis:1, cha:0},
    {nome: 'Minotauro', str:1, dex:0, con:0, int:0, wis:0, cha:0},
    {nome: 'Orc', str:2, dex:0, con:1, int:-2, wis:0, cha:0},
    {nome: 'Serpentblood', str:0, dex:0, con:0, int:1, wis:0, cha:2},
    {nome: 'Metamorfo', str:0, dex:1, con:0, int:0, wis:0, cha:0},
    {nome: 'Tabaxi', str:0, dex:2, con:0, int:0, wis:0, cha:1},
    {nome: 'Tiefling', str:0, dex:0, con:0, int:0, wis:0, cha:2},
    {nome: 'Triton', str:1, dex:0, con:1, int:0, wis:0, cha:1},
    {nome: 'Turtle', str:0, dex:0, con:1, int:0, wis:1, cha:0},
    {nome: 'Warforged', str:1, dex:0, con:1, int:0, wis:0, cha:0},
];

var select = document.getElementById("raca");
for(item in racas) {
    select.options[select.options.length] = new Option(racas[item].nome, item);
}

document.getElementById("RSd").innerHTML = `+${racas[0].dex}`;
document.getElementById("RSs").innerHTML = `+${racas[0].wis}`;

