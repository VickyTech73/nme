window.onload = function() {
    var player = document.getElementById('player')
    var nme = document.getElementById('nme')
    var macro_index = 0
    var micro_index = 0

    //Listing moves.
    
    var attackList = [
        slides = [
            "Slide Kick",
            "Slide Sweep-Kick"
        ],
        punches = [
            "Jab",
            "Uppercut"
        ],

        kicks = [
            "Head Kick",
            "Belly Kick"
        ]
    ]

    var defenceList = [
        toSlides = [
            "Jump",
            "Move back"
        ],

        toPunches = [
            "Move back",
            "Block"
        ],

        toKicks = [
            "Duck",
            "Block"
        ]
    ]

    var counterAttackList = [
        forSlides = [
            "Jump Kick",
        ],

        forPunches = [
            "Slide Kick"
        ],

        forKicks = [
            "Slide Kick"
        ]
    ]

    //this is where the magic happens.
    document.addEventListener("keypress", e => {
        switch (e.key) {
            case "q": /*This is the control to slide kick.
            You can change it if you want. But make sure to change only what's in the "" notation.*/
                macro_index = 0
                micro_index = 0
                player.innerHTML = attackList[macro_index][micro_index]
                nmeChoice(macro_index, nme)
                break;

                case "w": /*This is the control to slide sweep - kick.
                You can change it if you want. But make sure to change only what's in the "" notation.*/
                macro_index = 0
                micro_index = 1
                player.innerHTML = attackList[macro_index][micro_index]
                nmeChoice(macro_index, nme)
                break;

                case "a": /*This is the control to jab.
                You can change it if you want. But make sure to change only what's in the "" notation.*/
                macro_index = 1
                micro_index = 0
                player.innerHTML = attackList[macro_index][micro_index]
                nmeChoice(macro_index, nme)
                break;

                case "s": /*This is the control to uppercut.
                You can change it if you want. But make sure to change only what's in the "" notation.*/
                macro_index = 1
                micro_index = 1
                player.innerHTML = attackList[macro_index][micro_index]
                nmeChoice(macro_index, nme)
                break;

            case "z": /*This is the control to head kick.
            You can change it if you want. But make sure to change only what's in the "" notation.*/
                macro_index = 2
                micro_index = 0
                player.innerHTML = attackList[macro_index][micro_index]
                nmeChoice(macro_index, nme)
                break;

            case "x": /*This is the control to belly kick.
            You can change it if you want. But make sure to change only what's in the "" notation.*/
                macro_index = 2
                micro_index = 1
                player.innerHTML = attackList[macro_index][micro_index]
                nmeChoice(macro_index, nme)
                break;
        
            default:
                break;
        }
    })

    //this function decides to defend or counter attack
    function nmeChoice(index, defender) {
        min = 0
        max = 5    /*this variable right here <-- is A.K.A the difficulty level.
        the higher the variable above, the lower the difficulty level. minimum value is 3.
        If you set this variable to 1, nme will defend every single move, therefore, no one gets hurt.
        If you set this variable to 2, nme will become invinsible.
        If you set this variable to 3, nme will allow itself to be hit, but at rare moments.
        If you set this variable to 4 or higher, nme becomes more easy to defeat.*/
        let choiceRandInt = Math.floor(Math.random() * (max - min))
        fightBack(index, choiceRandInt, defender)
    }

    //this function chooses and execute a "fight back" from the category from the nmeChoice() function
    function fightBack(index, choiceRandInt, defender) {
        switch (choiceRandInt) {
            case 0:
                //executes defence
                min = 0
                max = 2
                let defenceRandInt = Math.floor(Math.random() * (max - min))
                defender.innerHTML = defenceList[index][defenceRandInt]
                break;
        
                //executes counter attack
            case 1:
                min = 0
                max = 1
                let counterAttackRandInt = Math.floor(Math.random() * (max - min))
                defender.innerHTML = counterAttackList[index][counterAttackRandInt]
                break;

            default:
                defender.innerHTML = "Ouch!"
                break;
        }
    }
}