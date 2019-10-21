const board = document.querySelectorAll('[board]')
let numTurn = 0, winner = 0
const arrayBoard = ['', '', '', '', '', '', '', '', '']

function turn(e, turn, i) {
    if(turn % 2 == 0) {
        e.innerHTML = 'X'
        game(i, 'X')
    } else {
        e.innerHTML = 'O'
        game(i, 'O')
    }
    numTurn++
}

function game(pos, play) {
    arrayBoard[pos] = play
    
    if(arrayBoard[0] !== '' && arrayBoard[0] === arrayBoard[3] && arrayBoard[3] === arrayBoard[6]) {
        win(arrayBoard[0])
    } else if(arrayBoard[1] !== '' && arrayBoard[1] === arrayBoard[4] && arrayBoard[4] === arrayBoard[7]) {
        win(arrayBoard[1])
    } else if(arrayBoard[2] !== '' && arrayBoard[2] === arrayBoard[5] && arrayBoard[5] === arrayBoard[8]) {
        win(arrayBoard[2])
    } else if(arrayBoard[0] !== '' && arrayBoard[0] === arrayBoard[1] && arrayBoard[1] === arrayBoard[2]) {
        win(arrayBoard[0])
    } else if(arrayBoard[3] !== '' && arrayBoard[3] === arrayBoard[4] && arrayBoard[4] === arrayBoard[5]) {
        win(arrayBoard[3])
    } else if(arrayBoard[6] !== '' && arrayBoard[6] === arrayBoard[7] && arrayBoard[7] === arrayBoard[8]) {
        win(arrayBoard[6])
    } else if(arrayBoard[6] !== '' && arrayBoard[6] === arrayBoard[4] && arrayBoard[4] === arrayBoard[2]) {
        win(arrayBoard[6])
    } else if(arrayBoard[8] !== '' && arrayBoard[8] === arrayBoard[4] && arrayBoard[4] === arrayBoard[0]) {
        win(arrayBoard[8])
    } else if(fullArray(arrayBoard)) {
        draw()
    }

}

const fullArray = (arr) => {
    if(arr[0] != '' && arr[1] != '' && arr[2] != '' && arr[3] != '' && arr[4] != '' && arr[5] != '' && arr[6] != '' && arr[7] != '' && arr[8] != '') {
        return true
    } else {
        return false
    }
}

const win = (e) => {
    winner++
    let opacity = 0.1
    const result = document.querySelector('#window')
    result.innerHTML += `<p>Congratulations "${e}"!!! You Won!</p>`
    result.style.opacity = '0'
    result.style.display += 'block'
    const btn = document.querySelector('[btn]')
    btn.style.display += 'block'


    setInterval(() => {
        if(opacity <= 1) {
            result.style.opacity = opacity
            opacity += 0.1
        } else {
            clearInterval()
        }
        
    }, 80)
    
}

const draw = () => {
    let opacity = 0.1
    const result = document.querySelector('#window')
    result.innerHTML += `<p>DRAW!!</p>`
    result.style.opacity = '0'
    result.style.display += 'block'
    const btn = document.querySelector('[btn]')
    btn.style.display += 'block'


    setInterval(() => {
        if(opacity <= 1) {
            result.style.opacity = opacity
            opacity += 0.1
        } else {
            clearInterval()
        }
        
    }, 80)
}


board.forEach((e, i) => {
    e.onclick = () => {
        if(arrayBoard[i] === '' && winner === 0) {
            turn(e, numTurn, i)
        } else {
            
        }
          
    }
})


