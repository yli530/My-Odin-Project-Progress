const title = document.getElementById("title");

const gameBoard = (() => {
    let currentTurn = "X";
    let board = [["","",""],["","",""],["","",""]]
    let remainSpace = 9;
    const resetBoard = () => {
        board = [["","",""],["","",""],["","",""]];
        currentTurn = "X";
        remainSpace = 9;
        displayMonitor.makeBoard();
        title.innerHTML = "Tic Tac Toe";
    }
    const getTurn = () => currentTurn;
    const place = (i,j) => {
        board[i][j] = currentTurn;
        remainSpace = remainSpace - 1;
        const win = checkWin(i, j);
        console.log(win);
        if(win > 1) {
            displayMonitor.declareWinner(currentTurn);
            return;
        } else if(win === 1) {
            displayMonitor.declareWinner("");
            return;
        }
        currentTurn = currentTurn === "X" ? "O" : "X";
        // console.log(board);
    }
    const debug = () => {
        // console.log(board[0,0])
    }
    const checkWin = (i,j) => {
        const placed = board[i][j];

        //checking horizontal and vertical
        if(board[i][j] === board[(i+1) % 3][j] && board[i][j] === board[(i+2) % 3][j]) {
            return 2;
        }

        if(board[i][j] === board[i][(j+1) % 3] && board[i][j] === board[i][(j+2) % 3]) {
            return 3;
        }

        //checking diagonal
        if((i % 2) === (j % 2)) {
            if(i === j) {
                if(board[i][j] === board[(i+1) % 3][(j+1) % 3] && board[i][j] === board[(i+2) % 3][(j+2) % 3]) {
                    return 4;
                }
            }
    
            if(i != j || i == 1) {
                if(board[i][j] === board[(i-1+3) % 3][(j+1) % 3] && board[i][j] === board[(i-2+3) % 3][(j+2) % 3]) {
                    return 5;
                }
            }
        }
        if(remainSpace === 0) {
            return 1;
        }
        return 0;
    }
    return {resetBoard, getTurn, place, debug}
})();

const displayMonitor = (() => {
    let gameover = false;
    const makeBoard = () => {
        gameover = false;
        const board = document.getElementById("gameBoard");

        board.innerHTML = "";

        for(let i = 0; i < 3; i++) {
            let row = document.createElement("div");
            board.appendChild(row);
            row.classList.add("gameRow");
            for(let j = 0; j < 3; j++) {
                let cell = document.createElement("div");
                row.appendChild(cell);
                cell.classList.add("gameCell", "orange");
                cell.onclick = (function() {
                    if(cell.innerHTML === "" && gameover === false) {
                        cell.innerHTML = gameBoard.getTurn();
                        gameBoard.place(i,j);
                    }
                })
            }
        }
    }
    const declareWinner = (winner) => {
        gameover = true;
        if(winner === "") {
            title.innerHTML = "Tie";
        } else {
            title.innerHTML = winner + " is the winner";
        }
    }
    return {makeBoard, declareWinner}
})();

displayMonitor.makeBoard();
gameBoard.debug();

document.getElementById("resetButton").onclick = (function() {
    gameBoard.resetBoard();
})