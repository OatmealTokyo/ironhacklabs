// CLUE GAME

var characters = [
    {Name:  "Jacob Green", Color:  "Green"},
    {Name:  "Doctor ORchid", Color:  "White"},
    {Name:  "Victor Plum", Color:  "Purple"},
    {Name:  "Kasandra Scarlet", Color:  "Red"},
    {Name:  "Eleanor Peacock", Color:  "Blue"},
    {Name:  "Jack Mustard", Color:  "Yellow"}
];

var weapons = [
    {Name:  "Rope", Power:  6},
    {Name:  "Knife", Power:  8},
    {Name:  "Candle Stick", Power: 7},
    {Name:  "Dumbbell", Power:  7.5},
    {Name:  "Poison", Power:  8.5},
    {Name:  "Axe", Power:  8},
    {Name:  "Bat", Power:  7.5},
    {Name:  "Trophy", Power: 5.5},
    {Name:  "Pistol", Power:  9.5}
];

var rooms = [
    {Name:  "Dinning Room"},
    {Name:  "Conservatory"},
    {Name:  "Kitchen"},
    {Name:  "Study"},
    {Name:  "Library"},
    {Name:  "Billiard Room"},
    {Name:  "Lounge"},
    {Name:  "Ballroom"},
    {Name:  "Hall"},
    {Name:  "A Spa"},
    {Name:  "Living Room"},
    {Name:  "Observatory"},
    {Name:  "Theater"},
    {Name:  "Guest House"},
    {Name:  "A Patio"}
];

// Iteration 2

function selectCharaters () {
    var characters = [
    {Name:  "Jacob Green", Color:  "Green"},
    {Name:  "Doctor ORchid", Color:  "White"},
    {Name:  "Victor Plum", Color:  "Purple"},
    {Name:  "Kasandra Scarlet", Color:  "Red"},
    {Name:  "Eleanor Peacock", Color:  "Blue"},
    {Name:  "Jack Mustard", Color:  "Yellow"}
    ];
    var randomNumber = Math.random();            // Random decimal [0.0 - 1.0)
    randomNumber = randomNumber * characters.length; // Random decimal [0.0 - 6.0)
    randomNumber = Math.floor(randomNumber);     // Random integer [0   - 5]

    return characters[randomNumber];
}

function selectWeapons () {
    var weapons = [
    {Name:  "Rope", Power:  6},
    {Name:  "Knife", Power:  8},
    {Name:  "Candle Stick", Power: 7},
    {Name:  "Dumbbell", Power:  7.5},
    {Name:  "Poison", Power:  8.5},
    {Name:  "Axe", Power:  8},
    {Name:  "Bat", Power:  7.5},
    {Name:  "Trophy", Power: 5.5},
    {Name:  "Pistol", Power:  9.5}
    ];
    var randomNumber = Math.random();            // Random decimal [0.0 - 1.0)
    randomNumber = randomNumber * weapons.length; // Random decimal [0.0 - 6.0)
    randomNumber = Math.floor(randomNumber);     // Random integer [0   - 5]

    return weapons[randomNumber];
}

function selectRoom () {
    var rooms = [
    {Name:  "Dinning Room"},
    {Name:  "Conservatory"},
    {Name:  "Kitchen"},
    {Name:  "Study"},
    {Name:  "Library"},
    {Name:  "Billiard Room"},
    {Name:  "Lounge"},
    {Name:  "Ballroom"},
    {Name:  "Hall"},
    {Name:  "A Spa"},
    {Name:  "Living Room"},
    {Name:  "Observatory"},
    {Name:  "Theater"},
    {Name:  "Guest House"},
    {Name:  "A Patio"}
    ];
    var randomNumber = Math.random();            // Random decimal [0.0 - 1.0)
    randomNumber = randomNumber * rooms.length; // Random decimal [0.0 - 6.0)
    randomNumber = Math.floor(randomNumber);     // Random integer [0   - 5]

    return rooms[randomNumber];
}

console.log(selectCharaters(), selectRoom(), selectWeapons());
// Not sure how to select only name in Characters array.