const ditto = {
    id: 132,
    name: "Ditto",
    type: "normal",
    abilities: ["Limber", "Imposter"],
    base_experience: 101,
    height: 3,
    weight: 40,
    stats: {
        hp: 48,
        attack: 48,
        defense: 48,
        special_attack: 48,
        special_defense: 48,
        speed: 48
    },
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    transform: function(){
    return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
    }
};

document.getElementById('name').innerHTML = ditto.name;
document.getElementById('ability').innerHTML = ditto.abilities[0];
document.getElementById('ditto').src = ditto.sprite;

document.getElementById('ditto').addEventListener('click', function() {
    ditto.transform();
    document.getElementById('ditto').src = ditto.sprite;
});