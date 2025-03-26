class FourInARow {
    constructor(settings) {
        this.rows = settings.rows || 6;
        this.columns = settings.columns || 7;
        this.player1Color = settings.player1Color || 'red';
        this.player2Color = settings.player2Color || 'yellow';
        this.currentPlayer = 1;
        this.board = this.createGameBoard();
        this.gameFinished = false;
        this.setupGame();
    }

    createGameBoard() {
        return Array.from({ length: this.rows }, () => Array(this.columns).fill(null));
    }

    setupGame() {
        this.displayBoard();
        document.getElementById('restart-button').addEventListener('click', () => this.startNewGame());
    }

    displayBoard() {
        const boardContainer = document.getElementById('game-container');
        boardContainer.innerHTML = '';
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                const cell = document.createElement('div');
                cell.className = 'connect4-cell';
                cell.dataset.row = row;
                cell.dataset.column = col;
                cell.addEventListener('click', () => this.onCellClick(row, col));
                boardContainer.appendChild(cell);
            }
        }
    }

    onCellClick(row, col) {
        if (this.gameFinished) return;
        const availableRow = this.getAvailableRow(col);
        if (availableRow !== -1) {
            this.board[availableRow][col] = this.currentPlayer;
            this.updateBoard(availableRow, col);
            if (this.hasPlayerWon(availableRow, col)) {
                this.gameFinished = true;
                alert(`Player ${this.currentPlayer} (${this.currentPlayer === 1 ? 'Red' : 'Yellow'}) wins!`);
            } else if (this.isBoardFilled()) {
                this.gameFinished = true;
                alert("It's a draw!");
            } else {
                this.currentPlayer = 3 - this.currentPlayer; // Switch player
                document.getElementById('current-player').textContent = `Player ${this.currentPlayer} (${this.currentPlayer === 1 ? 'Red' : 'Yellow'})'s turn!`;
            }
        }
    }

    getAvailableRow(col) {
        for (let row = this.rows - 1; row >= 0; row--) {
            if (!this.board[row][col]) {
                return row;
            }
        }
        return -1;
    }

    updateBoard(row, col) {
        const cell = document.querySelector(`.connect4-cell[data-row="${row}"][data-column="${col}"]`);
        cell.style.backgroundColor = this.currentPlayer === 1 ? this.player1Color : this.player2Color;
    }

    hasPlayerWon(row, col) {
        return (
            this.checkDirection(row, col, 1, 0) + this.checkDirection(row, col, -1, 0) >= 3 ||
            this.checkDirection(row, col, 0, 1) + this.checkDirection(row, col, 0, -1) >= 3 ||
            this.checkDirection(row, col, 1, 1) + this.checkDirection(row, col, -1, -1) >= 3 ||
            this.checkDirection(row, col, 1, -1) + this.checkDirection(row, col, -1, 1) >= 3
        );
    }

    checkDirection(row, col, rowStep, colStep) {
        let count = 0;
        let r = row + rowStep;
        let c = col + colStep;
        while (r >= 0 && r < this.rows && c >= 0 && c < this.columns && this.board[r][c] === this.currentPlayer) {
            count++;
            r += rowStep;
            c += colStep;
        }
        return count;
    }

    isBoardFilled() {
        return this.board.every(row => row.every(cell => cell !== null));
    }

    startNewGame() {
        this.board = this.createGameBoard();
        this.currentPlayer = 1;
        this.gameFinished = false;
        this.displayBoard();
        document.getElementById('current-player').textContent = `Player 1 (Red), it's your turn!`;
    }
}

const fourInARowGame = new FourInARow({
    rows: 6,
    columns: 7,
    player1Color: 'red',
    player2Color: 'yellow'
});
