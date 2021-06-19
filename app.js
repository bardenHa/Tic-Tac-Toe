M.AutoInit();

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
            //alert('Tile has already been selected!')
            M.toast({html: 'Tile has already been selected!', classes : 'round', displayLength: 1000});
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
            return setTimeout(() => {draw();}, 50);
        }
        else if (checkWin() == 'x') {
            return setTimeout(() => {win('x');}, 50);
        }
        else if (checkWin() == 'o') {
            return setTimeout(() => {win('o');}, 50);
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

        const checkMarksX = (indexes) => {
            return indexes.every(
                (index) => {
                    console.log(`gameb index ${game.gameboard[index]}`);
                    return game.gameboard[index] == 'x';
                }
            )
        };

        const checkMarksO = (indexes) => {
            return indexes.every(
                (index) => {
                    console.log(`gameb index ${game.gameboard[index]}`);
                    return game.gameboard[index] == 'o';
                }
            )
        };

        if (winConditions.some(checkMarksX)) {
            console.log('Player 1 won');
            return 'x';
        }
        else if (winConditions.some(checkMarksO)) {
            console.log('Player 2 won');
            return 'o';

        }
        else {
            return false;
        }
        
    }

    const draw = () => {
        alert(`It's a draw!`);
        return game.reset();
    }

    const win = (marker) => {
        if (marker == 'x') {
            alert(`Player 1 has won!`);
        }
        else {
            alert(`Player 2 has won!`);
        }
        return game.reset();
    }

    return {
        round,
        checkRound,
        checkWin
    };
})();