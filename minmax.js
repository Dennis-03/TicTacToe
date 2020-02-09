// function nextTurn() {
//     let index = floor(random(available.length));
//     let spot = available.splice(index, 1)[0];
//     let i = spot[0];
//     let j = spot[1];
//     board[i][j] = players[currentplayer];
//     currentplayer = (currentplayer + 1) % players.length;
// }
function nextTurn() {
    let available = [];
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                available.push({
                    i,
                    j
                })
            }
        }
    }
}
let move = random(available);
board[move.i][move.j] = ai;
currentplayer = human;