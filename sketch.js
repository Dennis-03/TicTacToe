let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let players = ['X', 'O'];
let currentplayer;
let available = [];

function setup() {
    createCanvas(800, 800);
    frameRate(1);
    currentplayer = floor(random(players.length));
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            available.push([i, j]);
        }
    }
}

function equals3(a, b, c) {
    return (a == b && b == c);
}

function checkWinner() {
    let winner = null;

    // horizontal 
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] == board[i][2]) {
            winner = board[i][0];
        }
    }

    // vertical 
    for (let i = 0; i < 3; i++) {
        if (board[0][i] == board[0][i] == board[0][i]) {
            winner = board[0][i];
        }
    }

    // diagonal 

    if (board[0][0] == board[1][1] == board[2][2]) {
        winner = board[0][0];
    }

    if (board[2][0] == board[1][1] == board[0][2]) {
        winner = board[1][1];
    }

    if (winner == null && available.length == 0) {
        console.log('tie');
    } else {
        console.log(winner);
    }

}


function nextTurn() {
    let index = floor(random(available.length));
    let spot = available.splice(index, 1)[0];
    let i = spot[0];
    let j = spot[1];
    board[i][j] = players[currentplayer];
    currentplayer = (currentplayer + 1) % players.length;
}

// function mousePressed() {
//     nextTurn();
// }

function draw() {
    background(220);
    let w = width / 3;
    let h = height / 3;
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);

    line(0, h, width, h);
    line(0, h * 2, width, h * 2);


    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            let x = w * i + w / 2;
            let y = h * j + h / 2;
            let spot = board[i][j];
            textSize(32);
            strokeWeight(20);
            if (spot == players[1]) {
                noFill();
                ellipse(x, y, w / 2);
            } else if (spot == players[0]) {
                let xr = w / 4;
                line(x - xr, y - xr, x + xr, y + xr);
                line(x + xr, y - xr, x - xr, y + xr);
            }
        }
    }
    nextTurn();
}