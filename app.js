const game = (() => {
    let gameboard = ['x','o','x','x','o','x','x','o','x'];

    const reset = () => {
        gameboard = ['','','','','','','','',''];
    }
    const render = () => {
        for (i = 0; i < gameboard.length; i++) {
            const block = document.getElementById(`block${i}`);
            const marker = gameboard[i];
            console.log(block);

            if (marker == 'x') {
                block.classList.add('fa-times', 'fa-10x');
                console.log('x');
            }
            else if (marker == 'o') {
                block.classList.add('fa-circle', 'fa-8x');
                console.log('o');
            }
            else {
                block.classList.remove('fa-times', 'fa-circle', 'fa-8x', 'fa-10x');
                console.log('none');
            }
        }
    }

    return {
        reset,
        render
    };
})();