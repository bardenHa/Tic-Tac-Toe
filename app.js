const game = (() => {
    let gameboard = ['','','','','','','','',''];
    let playerOneTurn = true;

    const reset = () => {
        game.gameboard = ['','','','','','','','',''];
        gameController.round = 0;
        return render();
    }

    //renders marker on the DOM
    const render = () => {
        for (i = 0; i < game.gameboard.length; i++) {
            const block = document.getElementById(`block${i}`);
            const marker = game.gameboard[i];

            if (marker == 'x') {
                block.classList.add('fa-times', 'fa-10x');
            }
            else if (marker == 'o') {
                block.classList.add('fa-circle', 'fa-8x');
            }
            else {
                block.classList.remove('fa-times', 'fa-circle', 'fa-8x', 'fa-10x');
            }
        }
    }

    const addMarker = (i) => {
        if (playerOneTurn && game.gameboard[i] == '') {
            game.gameboard[i] = 'x';
            playerOneTurn = false;
            render();
            gameController.checkRound();
        }
        else if (!playerOneTurn && game.gameboard[i] == '') {
            game.gameboard[i] = 'o'
            playerOneTurn = true;
            render();
            gameController.checkRound();
        }
        else {
            alert('Tile has already been selected!')
        }

        //return render();
    }

    return {
        reset,
        addMarker,
        gameboard
    };
})();

const gameController = (() => {
    let round = 0;

    const checkRound = () => {
        if (gameController.round == 8 && !checkWin()) {
            return setTimeout(() => {draw();}, 100);
        }
        else if (checkWin()) {
            return win();
        }
        else {
            gameController.round += 1;
        }

    }

    const checkWin = () => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const checkMarks = (indexes) => {
            return indexes.every(
                (index) => {
                    console.log(`gameb index ${game.gameboard[index]}`);
                    return game.gameboard[index] == 'x'
                }
            )
        };

        if (checkMarks(winConditions[0])) {
            console.log('won');
            return true;
        }
        else {
            return false;
        }
        
    }

    const draw = () => {
        alert(`It's a draw!`);
        return game.reset();
    }

    const win = () => {
        alert(`Player x has won!`);
        return game.reset();
    }

    return {
        round,
        checkRound,
        checkWin
    };
})();