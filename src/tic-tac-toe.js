class TicTacToe {
    currentPlayerSymbol = 'x'
    matrix = []
    constructor() {
        for (let i = 0; i < 3; i++) {
            this.matrix.push([])
            for(let j = 0; j < 3; j++) {
                this.matrix[i].push(null)
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) !== null) {
            return
        }
        this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol
        this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x'
    }

    isFinished() {
        return this.isDraw() || this.getWinner() !== null
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.matrix.every(x => x[i] === 'o')) {
                return 'o'
            }
            if (this.matrix.every(x => x[i] === 'x')) {
                return 'x'
            }
            if (this.matrix[i].every(x => x === 'o')) {
                return 'o'
            }
            if (this.matrix[i].every(x => x === 'x')) {
                return 'x'
            }
        }
        if (this.matrix.every((row, i) => row[i] === 'o') || this.matrix.every((row, i) => row[row.length - i - 1] === 'o')) {
            return 'o'
        }
        if (this.matrix.every((row, i) => row[i] === 'x') || this.matrix.every((row, i) => row[row.length - i - 1] === 'x')) {
            return 'x'
        }
        return null
    }

    noMoreTurns() {
        return this.matrix.every(row => row.every(cell => cell !== null))
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
