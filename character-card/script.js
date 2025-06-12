const character = {
    name: "Donkey Kong",
    class: "Goliath Jungle Simian",
    level: 5,
    health: 100,
    image: 'images/donkey_kong.avif',

    attacked() {
        if (this.health >= 20) {
            this.health -= 20;
        } 
        else {
            alert('Donkey Kong Died');
        }
    },

    levelUp() {
        this.level += 1;
        this.health += 20;
    }
};

document.getElementById('image').src = character.image;
document.getElementById('name').textContent = character.name;
document.getElementById('class').textContent = character.class;
document.getElementById('level').textContent = character.level;
document.getElementById('health').textContent = character.health;

document.getElementById('attacked').addEventListener('click', function() {
    character.attacked();
    document.getElementById('health').textContent = character.health;
});

document.getElementById('levelup').addEventListener('click', function() {
    character.levelUp();
    document.getElementById('level').textContent = character.level;
    document.getElementById('health').textContent = character.health;
});