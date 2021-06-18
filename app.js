const game = (() => {
    let gameboard = ['','','','','','','','',''];
    let playerOneTurn = true;

    const reset = () => {
        gameboard = ['','','','','','','','',''];
        return render();
    }
    const render = () => {
        for (i = 0; i < gameboard.length; i++) {
            const block = document.getElementById(`block${i}`);
            const marker = gameboard[i];

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
        if (playerOneTurn && gameboard[i] == '') {
            gameboard[i] = 'x';
            playerOneTurn = false;
            return render();
        }
        else if (!playerOneTurn && gameboard[i] == '') {
            gameboard[i] = 'o'
            playerOneTurn = true;
            return render();
        }
        else {
            alert('Tile has already been selected!')
            return render();
        }
    }

    return {
        reset,
        addMarker
    };
})();

const gameController = (() => {
    let round = 1;

    const checkRound = () => {
        
    }
})();