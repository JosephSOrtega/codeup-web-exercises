// "use strict";

import array from "./game-array.js";
// import town from './game-shop.js';


// let character = new character;
// let items = new items;
// let dice = new dice;
// let twoDice = new twoDice;
// let game_shop = new game_shop;
// let choices = new choices;


///////////////////////////////Objects
let character = {
    name: "",
    misses: 0,
    yourClass: "",
    hp: "",
    maxHP: "",
    strength: "",
    agility: "",
    sharp: "",
    presence: "",
    damageDie: "",
    spell: "",
    scenes: "",
    xp: "",
    energy: "",
    maxEnergy: "",
    moveLevel: "",
    bonusForward: "",
    negForward: ""

//        for later use
};

let baddie = {
    hp: "",
    mp: "",
    chase: "",
    damageDie: ""
};

let rolls = {
    roll1: ""
};

let choices = {
    choice1: "",
    choice2: ""
};

let items = {
    gold: "",
    molotov: "",
    blade: "",
    charm: "",
    shield: "",
    plate: "",
    powder: "",
    potion: "",
    stone: "",
    scroll: "",
    hat: "",
    bar: ""
    //TODO: Add what items do to code, refer to their descriptions in the shop.
};
let introAnswer;
let yourChoice;
//

//Notes:
//
// $("#log-form").submit(function (e) {
//     e.preventDefault();
//     character.name = $("#log-form-input").val();
//     $("#log-form").trigger("reset");
//     $("#log-form-input").html("");
//     $("#log-form").off();
//     setTimeout(function () {
//         intro2();
//     }, 1000); //1 seconds
//
// });
//
// function part1() {
//     var pText = "<p class='output-p'><span class='output-arrow'>-></span>Hey there! Want to go on an adventure?</p>";
//     $("#log-output").append(pText).scrollTop(9999999999999999);
//     setTimeout(function () {
//         part2();
//     }, 4000); //4 seconds
// }

/////////////////////////////////////////////

//    Intro Section //////////////////////////////////////////////
function intro1() {
    console.log("Hello! What is your name?");
    $("#log-form").submit(function (e) {
        e.preventDefault();
        character.name = $("#log-form-input").val();
        $("#log-form").trigger("reset");
        $("#log-form-input").html("");
        $("#log-form").off();
        setTimeout(function () {
            intro2();
        }, 1000); //1 seconds

    });
}

function intro2() {
// TODO: add input puller and make it character.name
    console.log("Hey there, " + character.name + "!\n" +
        "Want to go on an adventure? [y/n]");
    $("#log-form").submit(function (e) {
        e.preventDefault();
        introAnswer = $("#log-form-input").val();
        $("#log-form").trigger("reset");
        $("#log-form-input").html("");
        $("#log-form").off();
        setTimeout(function () {
            if (introAnswer === "n") {
                console.log("Okay! Have a great day!");
                window.stop()

            } else if (introAnswer === "y") {
                console.log("Let's get going, then!\n\n");
                setTimeout(function () {
                    // classPicker();
                    console.log("Worked");
                }, 3000); //4 seconds

                classPicker();

            } else {
                console.log("I didn't understand. Please submit your answer again.");
                intro2();
            }
        }, 1000); //1 seconds
    });
}



//    Class Selection //////////////////////////////////////////////
function classPicker() {
// TODO: add input puller and make it yourClass
    console.log(
        "Oh shit, It's an adventurer! \n" +
        "Quick, everyone hide! They always bring trouble. \n" +
        "..." +
        "It looks like it's a...\n\n");

    console.log(
        "What kind of adventurer are you? \n\n" +
        "A Washed-Up Knight? [type: Knight] \n" +
        "An Incredibly Inept Wizard? [type: Wizard] \n" +
        "Or a Noisy Thief? [type: Thief]");

    $("#log-form").submit(function (e) {
        e.preventDefault();
        yourChoice = elem.html($("#log-form-input").val());
        $("#log-form-input").html("");
    });

    switch (yourChoice.toLowerCase()) {
        case "knight":
            character.yourClass = "Washed-Up Knight";
            console.log(
                "Excelsior!\n" +
                "You are a " + character.yourClass + ",\n" +
                "sworn to defend the realms of men from all manner of evil and icky things! \n" +
                "...Too bad married life caught up with you.\n\n");

            character.hp = 24;
            character.strength = 2;
            character.agility = -1;
            character.sharp = 0;
            character.presence = 1;
            character.damageDie = 10;
            items.gold = 2;

            console.log(
                "Your stats are:\n" +
                "Strength = " + character.strength + "\n" +
                "Agility = " + character.agility + "\n" +
                "Sharp = " + character.sharp + "\n" +
                "Presence = " + character.presence + "\n\n");
            break;

        case "wizard":
            character.yourClass = "Incredibly Inept Wizard";
            console.log(
                "Woah! Careful where you point that wand of yours!\n" +
                "You are an " + character.yourClass + " of the highest order." + "\n" +
                "Too bad you have never actually cast a spell before. \n" +
                "And don't even shpget me started on that pointy hat of yours...\n\n");

            character.hp = 16;
            character.strength = -1;
            character.agility = 0;
            character.sharp = 2;
            character.presence = 1;
            character.damageDie = 4;
            items.gold = 3;

            console.log(
                "Your stats are: " + "\n" +
                "Strength = " + character.strength + " \n" +
                "Agility = " + character.agility + " \n" +
                "Sharp = " + character.sharp + " \n" +
                "Presence = " + character.presence + "\n\n");
            break;

        case "thief":
            character.yourClass = "Noisy Thief";
            console.log(
                "Oh my! You almost very nearly came somewhat close to actually startling me there!\n" +
                "Your steps as a " + character.yourClass + " might not be as quiet as a panther on the prowl,\n" +
                "but this little kitty cat has claws.\n" +
                "Rawr.\n\n");

            character.hp = 20;
            character.strength = 1;
            character.agility = 2;
            character.sharp = 0;
            character.presence = -1;
            character.damageDie = 8;
            items.gold = 1;

            console.log("Your stats are:\n" +
                "Strength = " + character.strength + "\n" +
                "Agility = " + character.agility + "\n" +
                "Sharp = " + character.sharp + "\n" +
                "Presence = " + character.presence + "\n\n");
            break;

        default:
            character.yourClass = "Mischievous";
            console.log(
                "Hey, that wasn't an answer listed!\n" +
                "It seems we have a little troublemaker on our hands.\n" +
                "Why don't we make you a " + character.yourClass + " instead?\n");

            character.hp = 18;
            character.strength = 0;
            character.agility = 1;
            character.sharp = -1;
            character.presence = 2;
            character.damageDie = 6;
            items.gold = 4;

            console.log(
                "Your stats are:\n" +
                "Strength = " + character.strength + "\n" +
                "Agility = " + character.agility + "\n" +
                "Sharp = " + character.sharp + "\n" +
                "Presence = " + character.presence + "\n\n");
            break;
    }
    sceneOne();
}

//    Scenario 1: Bandit trap /////////////////////////////////////////


function sceneOne() {
// TODO: add input puller and make it choices.choice1

//            Bandit stats declared/////////////////////////////////////////
    baddie.hp = 6;
    baddie.mp = 3;
    baddie.chase = -1;
    baddie.damageDie = 8;
//        End stats/////////////////////////////////////////

    console.log("\n\n\n" +

        "Scene One: Our Journey Begins...\n\n" +

        "What started as a quiet night enjoying\n" +
        "a couple pints of grog at the local pub\n" +
        "ends with the townsfolk of Friendly\n" +
        "chasing you out the city gates with torches,\n" +
        "pitchforks, and other makeshift\n" +
        "weaponry early the next morning.\n\n\n" +

        "After a bath in the local river and a hearty\n" +
        "breakfast of varmint and woodland critters,\n" +
        "you continue along your lonesome journey.\n\n" +
        "Through the forests and dales,\n" +
        "over the valleys and hills you trod,\n" +
        "eager to to overcome whatever might stand \n" +
        "between you and the great City of Whoknowsville...\n");


    console.log(
        "\n" +

        "*snap!*\n\n" +

        "What was that?\n" +
        "Hello?\n\n" +

        "What will you do now?\n" +
        "Will you try to sneak past whatever is there? [type: AGI]\n" +
        "Will you try to spot the danger before it even strikes? [type: SHP]\n" +
        "Or will you bellow out a challenge and rush into combat? [type: #bravebutfoolish]\n\n");

    // choices.choice1 = scanner.nextLine().toLowerCase();

    $("#log-form").submit(function (e) {
        e.preventDefault();
        choices.choice1 = elem.html($("#log-form-input").val().toLowerCase());
        $("#log-form-input").html("");
    });

    switch (choices.choice1) {
        case "agi":
            console.log(
                "As you try to be sneaky,\n" +
                "we will roll to see what happens.");

            rolls.roll1 = array.twoDiceRoll(6) + character.agility;
            console.log("" +

                "You rolled a " + rolls.roll1 + ".\n" +
                "Let's see what they means for our adventurer...\n\n");

            agiSceneOne();
            break;
        case "shp":
            console.log(
                "As you try spot the danger before it has the jump\n" +
                "on you, we will roll to see what happens.\n");

            rolls.roll1 = array.twoDiceRoll(6) + character.sharp;
            console.log(
                "You rolled a " + rolls.roll1 + ".\n" +
                "Lets see what they means for our adventurer...\n\n");

            shpSceneOne();
            break;
        default:
            console.log(
                "Shit you made a lot of noise!\n" +
                "Here they come....\n\n");

            shitHitsFanSceneOne();
            break;
    }
}

///////////////////////////////////////////////////////Left off here
//Scene 1 agi approach
function agiSceneOne() {
    if (rolls.roll1 <= 6) {
        console.log("You rolled a miss! Oh no!");
        character.misses += 1;
        shitHitsFanSceneOne();
    } else if (rolls.roll1 > 6 && rolls.roll1 < 10) {
        console.log(("You rolled a mixed success!"));
        sceneOneBut();
    } else if (rolls.roll1 >= 10) {
        console.log("You rolled a success with little consequence!");
        console.log(
            "You managed to sneak around their ambush!\n" +
            "You can sneak away? [type: Run]\n" +
            "Or, you can try and get the jump on them? [type: Fight]\n\n");
// TODO: add input puller and make it choices.choice2
        // Scanner scanner = new Scanner(System.in);
        $("#log-form").submit(function (e) {
            e.preventDefault();
            choices.choice2 = elem.html($("#log-form-input").val().toLowerCase());
            $("#log-form-input").html("");
        });

        choices.choice2 = scanner.nextLine();
        if (choices.choice2.equalsIgnoreCase("fight")) {
            Ambush();
        } else {
            sceneOneOutro();
        }
    }
}

//Scene 1 shp approach
function shpSceneOne() {
    if (rolls.roll1 <= 6) {
        console.log("You rolled a miss! Oh no!");
        character.misses += 1;
        shitHitsFanSceneOne();
    } else if (rolls.roll1 > 6 && rolls.roll1 < 10) {
        console.log("You rolled a mixed success!");
        sceneOneBut();
    } else if (rolls.roll1 >= 10) {
        console.log("You rolled a success with little consequence!");
        console.log(
            "You managed to spot them before they spotted you.\n" +
            "Will you try and sneak away? [type: Run]\n" +
            "Or get the jump on them? [type: Fight]\n\n");

// TODO: add input puller and make it choices.choice2

        // Scanner scanner = new Scanner(System.in);
        // choices.choice2 = scanner.nextLine();
        $("#log-form").submit(function (e) {
            e.preventDefault();
            choices.choice2 = elem.html($("#log-form-input").val().toLowerCase());
            $("#log-form-input").html("");
        });

        if (choices.choice2 === "fight") {
            Ambush();
        } else {
            sceneOneOutro();
        }
    }
}

//Scene 1 results
function sceneOneBut() {
    let dam = array.diceRoll(baddie.damageDie);
    console.log(
        "Fuuuuuuck....\n" +
        "That hurt. \n" +
        "Like, super bad.\n\n" +

        "Their trap was tripped, hitting you for " + dam + " damage\n" +
        "and they are coming right for you!\n\n");

    character.hp -= dam;
    console.log(
        "Will you stand tall and fight? \n" +
        "Or run like a coward?\n\n");

    // TODO: add input puller and make it choices.choice2
    // Scanner scanner = new Scanner(System.in);
    // choices.choice2 = scanner.nextLine().toLowerCase();
    if (choices.choice2.equalsIgnoreCase("fight")) {
        fight();
    } else {
        sceneOneOutro();
    }
}

function shitHitsFanSceneOne() {
    let dam = array.diceRoll(baddie.damageDie);
    console.log(
        "Fuuuuuuck....\n" +
        "That hurt. \n" +
        "Like, super bad.\n\n" +

        "Their trap was tripped, hitting you for " + dam + " damage\n" +
        "and they are coming right for you!\n\n");

    character.hp -= dam;
    console.log(
        "Oh no, here they come! \n" +
        "You have no choice but to fight!\n\n");
    fight();
}


function sceneOneOutro() {
    town();
    console.log(
        "\nAs you walk into the sunset, \n" +
        "the screen fades to black... \n\n" +

        "Thanks for trying our demo!");

    System.exit(0);
}


//////Add:
////// level up from misses total, make it XP
////// add +1 scene per scene traversed


////////////////////////////////////////////////////////////////////////////////////////////////
//Combat
////////////////////////////////////////////////////////////////////////////////////////////////

function youDied() {
    console.log(
        "Though your journey has come to an end,\n" +
        "let's see how far you got! \n" +
        "You rolled " + character.misses + " misses and \n" +
        "got through " + character.scenes + " scenes. \n" +
        "Better luck next time!");
    window.stop();
}

//////////////////////////////////////////////////////////
// TODO: 2019-07-30 - Below is how we will traverse scenes maybe:

//    public static void nextScene() {
//        if (userClass.scenes ==== 0){
//            userClass.scenes += 1;
//            console.log("You continue on through the woods and to the next encounter!");
//            sceneTwo();
//        } else if (userClass.scenes ==== 1){
//            console.log("You continue on through the woods and to the next encounter!");
//            sceneThree();
//        } else if (userClass.scenes ==== 2){
//            console.log("You continue on through the woods and to the next encounter!");
//            sceneFour();
//        }
//    }
////////////////////////////////////////////////////////

function combatTurnAttack(a) {
    if (a <= 6) {
        console.log("You rolled a miss! Oh no!");
        character.misses = character.misses + 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= badDam;
        console.log("You take " + badDam + " damage from their blow!");
        fight();
    } else if (a > 6 && a < 10) {
        console.log("You rolled a mixed success!");
        let badDam = array.diceRoll(baddie.damageDie);
        let dam = array.diceRoll(character.damageDie);
        character.hp -= badDam;
        baddie.hp -= dam;
        console.log(
            "You dealt " + dam + " damage, \n" +
            "but you opened yourself up to an attack! \n" +
            "You take " + badDam + " damage from their blow!");

        fight();
    } else if (a >= 10) {
        console.log("You rolled a success with little consequence!");
        let dam = array.diceRoll(character.damageDie);
        baddie.hp -= dam;
        console.log("You dealt " + dam + " damage!");
        fight();
    }
}


function spellDamage() {
    if (character.spell.toLowerCase() === "bolt") {
        let dam = array.twoDiceRoll(4) + character.sharp;
        baddie.hp -= dam;
        console.log("Your magical attack hit the foe for " + dam + " damage!");
    } else {
        let dam = array.twoDiceRoll(6) + character.sharp;
        console.log("Your magical attack hit the foe for " + dam + " damage!");
        let damself = array.diceRoll(4);
        console.log(
            "You hit your target, \n" +
            "but that blast was brutal. \n" +
            "You take " + damself + " damage from the blast.");

        character.hp -= damself;
    }
}

function combatTurnSpell(a) {
    if (a <= 6) {
        console.log("You rolled a miss! Oh no!");
        character.misses += 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= badDam;
        console.log("You take " + badDam + " damage from their blow!");
        fight();
    } else if (a > 6 && a < 10) {
        console.log("You rolled a mixed success!");
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= (badDam);
        console.log("You take " + badDam + " damage from their blow!");
        spellDamage();
        fight();
    } else if (a >= 10) {
        console.log("You rolled a success with little consequence!");
        spellDamage();
        fight();
    }
}


//Running
function combatTurnRun(a) {
    // Scanner scanner = new Scanner(System.in);
    if ((a - baddie.chase) <= 6) {
        console.log("You rolled a miss! Oh no!");
        character.misses += 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= (badDam);
        console.log("You take " + badDam + " damage from their blow! and couldn't escape!");
        fight();
    } else if ((a - baddie.chase) > 6 && (a - baddie.chase) < 10) {
        console.log("You rolled a mixed success!");
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= (badDam);
        console.log(
            "You only can do one: \n" +
            "Make it away, but take a hit in the escape, [type: Run]  \n" +
            "or stay in the fight, and avoid the damage? [type: Stay");
//TODO: input thingy here too
//         String runChoice = scanner.nextLine().toLowerCase();
        if (runChoice.equalsIgnoreCase("run")) {
            badDam = array.diceRoll(baddie.damageDie);
            character.hp -= (badDam * 2);
            console.log("You got away, but took " + badDam + " damage in the escape!");
        } else {
            badDam = array.diceRoll(baddie.damageDie);
            character.hp -= (badDam - character.agility);
            console.log("You got away, but took " + badDam + " damage in the escape!");
            fight();
        }
    } else if ((a - baddie.chase) >= 10) {
        console.log("You rolled a success with little consequence!");
        console.log("You managed to escape the fight!");
        sceneOneOutro();
//            change to nextScene in future
    }
}

function combatTurnTalk(a) {
    if (a <= 6) {
        console.log("You rolled a miss! Oh no!");
        character.misses = character.misses + 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= badDam;
        console.log("You take " + badDam + " damage from their blow!");
        fight();
    } else if (a > 6 && a < 10) {
        console.log("You rolled a mixed success!");
        let badDam = array.diceRoll(baddie.damageDie);
        let dam = array.diceRoll(character.damageDie) + character.sharp;
        character.hp -= badDam;
        baddie.mp -= dam;
        console.log(
            "Your words are getting to them!\n" +
            "You dealt " + dam + " damage to their moral but \n" +
            "you opened yourself up to an attack! \n" +
            "You take " + badDam + " damage from their blow!");

        fight();
    } else if (a >= 10) {
        console.log("You rolled a success with little consequence!");
        let dam = array.diceRoll(character.damageDie) + character.sharp;
        baddie.mp -= dam;
        console.log(
            "Your words are getting to them! \n" +
            "You dealt " + dam + " damage to their moral!");
        fight();
    }
}


//fighting
function fight() {
    // Scanner scanner = new Scanner(System.in);
    //Dead
    if (character.hp <= 0) {
        console.log("\n\nShit, you died!");
        youDied();
    } else if (baddie.hp <= 0 || baddie.mp <= 0) {
        console.log("\nYou defeated the baddie! Congrats!\n" +
            "You got " + array.diceRoll(baddie.damageDie) + " gold from them\n");
        sceneOneOutro();
    }
//battle
    console.log(
        "You're in a fight for your life! What do you do? \n" +
        "[type: Run | Attack | Talk]");
//TODO: here too
    // String everyBodyWas = scanner.nextLine().toLowerCase();
//melee
    if (everyBodyWas.equalsIgnoreCase("attack")) {
        if (character.sharp === 2) {
            console.log("Would you like to attack or cast a spell? [type: Y/N]");
            //TODO: here too
            // let spellChoice = scanner.nextLine().toLowerCase();
            if (spellChoice.toLowerCase() === "y") {
                console.log("What spell would you like to cast? Bolt or Blast?");
                character.spell = scanner.nextLine().toLowerCase();
                console.log("Let's see if your spell casted successfully");
                combatTurnSpell(array.twoDiceRoll(6) + character.sharp);
            }
        } else {
            console.log("How do you fight? \n" +
                "With dexterity and fast moves? [type: AGI} \n" +
                "Or do you fight with power and prowess? [type: STR]");
            //TODO: here too
            // let howAttack = scanner.nextLine().toLowerCase();
            if (howAttack.equalsIgnoreCase("agi")) {
                combatTurnAttack(twoDice(6) + character.strength);
            } else if (howAttack.equalsIgnoreCase("str")) {
                combatTurnAttack(twoDice(6) + character.agility);
            }
        }

    }
//run
    else if (everyBodyWas.equalsIgnoreCase("run")) {
        combatTurnRun(twoDice(6) + character.agility);
    }
//talk
    else if (everyBodyWas.equalsIgnoreCase("talk")) {
        console.log(
            "How do you talk them down? \n" +
            "With quick thinking? [type: SHP] \n" +
            "Or with your charm and persuasion? [type: PRE]");
//TODO: here too
//         String howAttack = scanner.nextLine().toLowerCase();
        if (howAttack.equalsIgnoreCase("shp")) {
            combatTurnTalk(twoDice(6) + character.sharp);
        } else if (howAttack.equalsIgnoreCase("pre")) {
            combatTurnTalk(twoDice(6) + character.presence);
        } else {
            console.log("I didn't understand what you meant, please try again.");
            fight();
        }
    }
// mobs have Health points, Mental points, and Chase value
}


//////////////Ambushing gives you a +2 to your first roll
function Ambush() {
    // Scanner scanner = new Scanner(System.in);
//battle
    console.log(
        "You're in a fight for your life! What do you do? \n" +
        "[type: Run | Attack | Talk]");
//TODO: here too
//     String everyBodyWas = scanner.nextLine().toLowerCase();
//melee
    if (everyBodyWas.equalsIgnoreCase("attack")) {
        if (character.sharp === 2) {
            console.log("Would you like to attack or cast a spell? [y/n]");
            //TODO: here too
            // String spellChoice = scanner.nextLine().toLowerCase();
            if (spellChoice.equalsIgnoreCase("y")) {
                console.log("What spell would you like to cast? Bolt or Blast?");
                character.spell = scanner.nextLine().toLowerCase();
                console.log("Let's see if your spell casted successfully");
                combatTurnSpell(twoDice(6) + character.sharp + 2);
            }
        } else {
            console.log(
                "How do you fight? \n" +
                "With dexterity and fast moves? [type: AGI] \n" +
                "Or with power and prowess? [type: STR]");
//TODO: here too
//             String howAttack = scanner.nextLine().toLowerCase();
            if (howAttack.equalsIgnoreCase("agi")) {
                combatTurnAttack(twoDice(6) + character.strength + 2);
            } else if (howAttack.equalsIgnoreCase("str")) {
                combatTurnAttack(twoDice(6) + character.agility + 2);
            }
        }

    }
//run
    else if (everyBodyWas.equalsIgnoreCase("run")) {
        combatTurnRun(twoDice(6) + character.agility + 2);
    }
//talk
    else if (everyBodyWas.equalsIgnoreCase("talk")) {
        console.log(
            "How do you talk them down? \n" +
            "With quick thinking? [type: SHP]\n" +
            "Or with your charm and persuasion? [type: PRE]");
//TODO: here too
//         String howAttack = scanner.nextLine().toLowerCase();
        if (howAttack.equalsIgnoreCase("shp")) {
            combatTurnTalk(twoDice(6) + character.sharp + 2);
        } else if (howAttack.equalsIgnoreCase("pre")) {
            combatTurnTalk(twoDice(6) + character.presence + 2);
        }
    }
// mobs have Health points, Mental points, and Chase value
}

intro1();

////////////////////////////////////////////////////////////////////////////////////////////////
//Combat end
////////////////////////////////////////////////////////////////////////////////////////////////


