/* This is a small program that calculates the chances of winning
 * at the Monty Hall game depending if the contestant chooses to 
 * switch door or not by playing the game 10000 times twice.
 * 
 * choosen door = door picked at first by contestant
 * winning door = door with the prize
 * opened door = door opened by the game host
 * new door = door picked if the contestant chooses to switch doors */
function MontyHall(tries, switchDoor)
{    
    var victories = 0;
    
    for (var i = 1; i <= tries; i++)
    {
        //randomly picking the winning door
        var winningDoor = Math.floor(Math.random() * 3) + 1;

        //randomly picking the door the contestant will pick at first (can be the winning door)
        var chosenDoor = Math.floor(Math.random() * 3) + 1;

        //randomly picking the door the host will open (never the winning or the chosen one)
        var openedDoor = Math.floor(Math.random() * 3) + 1;

        while (openedDoor == winningDoor || openedDoor == chosenDoor)
        {
            openedDoor = Math.floor(Math.random() * 3) + 1;
        }
        //contestant choses to switch door (new door won't be door opened by host)
        if (switchDoor == true) {
            var newDoor = Math.floor(Math.random() * 3) + 1;
            while (newDoor == chosenDoor || newDoor == openedDoor)
            {
                newDoor = Math.floor(Math.random() * 3) + 1;
            }
            //winning condition
            if (newDoor == winningDoor)
            {
                victories++;
            }
        }
        //contestant choses not to switch door
        else
        {
            //winning condition
            if (chosenDoor == winningDoor)
            {
                victories++;
            }
        }        
    }

    var result = (victories / tries * 100).toFixed(2);

    //printing the results
    if (switchDoor == true)
    {
        return ("Contestant has " + result + "% victories when he switches door.");
    }
    else
    {
        return ("Contestant has " + result + "% victories when he doesn't switch door.");
    }    
}

function MontyHallTest()
{
    console.log(MontyHall(10000, true));
    console.log(MontyHall(10000, false));
}

MontyHallTest();