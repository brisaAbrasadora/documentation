function configGame(options) {
    let defaults = {
        name: 'Player 1',
        level: 1,
        difficulty: 'normal',
        genre: 'male',
    };

    let config = {...defaults, ...options};
    console.log(config);
};

let options = {
    name: 'Vivianne Gorch',
    genre: 'female',
};

configGame(options);