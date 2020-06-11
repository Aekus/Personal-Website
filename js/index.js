var board1 = ChessBoard('chessboard', {
    position: 'start',
    draggable: false,
    dropOffBoard: 'snapback',
    sparePieces: false,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
})

const chess = new Chess();
const pgn1 = '1. Nf3 Nf6 2. Na3 Nc6 3. Nc4 b5 4. Nce5 Nxe5 5. Nxe5 Bb7 6. d4 Bd5 7. b3 d6 8. Bg5 dxe5 9. dxe5 Bxb3 10. Bxf6 gxf6 11. cxb3 fxe5 12. Qb1 Qd4 13. Qd1 Qb4+ 14. Qd2 Qxd2+ 15. Kxd2 h5 16. Ke1 Rd8 17. Rd1 Rxd1+ 18. Kxd1 Rh6 19. Ke1 Rc6 20. f3 Ra6 21. g4 Rxa2 22. Kf2 h4 23. Bg2 Ra3 24. b4 h3 25. Bxh3 Ra4 26. g5 Rxb4 27. g6 fxg6 28. Be6 Rd4 29. Ke1 Kd8 30. Rg1 Rd6 31. Bb3 Bh6 32. Rf1 Bd2+ 33. Kf2 Bc3 34. Kg2 e4 35. fxe4 Ra6 36. Rf8+ Kd7 37. Kh3 Rd6 38. Kg2 Bg7 39. Ra8 a5 40. Kh1 a4 41. Bd5 g5 42. e3 g4 43. Rg8 Be5 44. Ra8 c5 45. Ra7+ Ke8 46. Ra8+ Kd7 47. Rb8 Rxd5 48. Rb7+ Kc6 49. Rc7+ Kxc7 50. exd5 Kb8 51. e4 c4 52. Kg2 e6 53. dxe6 Bd6 54. Kg1 Ka8 55. Kg2 b4 56. Kg1 c3 57. e7 Bxe7 58. e5 c2 59. h3 g3 60. Kg2 Bh4 61. Kf3 c1=Q 62. e6 Qc8 63. Kg4 Bf6 64. Kxg3 Be5+ 65. Kg2 Qd8 66. e7 Qxe7 67. Kg1 Qb7 68. h4 Qc8 69. Kg2 b3 70. h5 b2 71. h6 b1=Q 72. h7 a3 73. Kf2 a2 74. Kg2 a1=Q 75. h8=N Qf1#'

const pgn2 = '1. Nf3 Nc6 2. Ng5 d5 3. Nc3 Nf6 4. e4 Nxe4 5. Ngxe4 dxe4 6. Nxe4 Na5 7. b4 Nc6 8. Bb5 Bd7 9. a3 e5 10. Bxc6 Bxc6 11. Qg4 Bxe4 12. Qxe4 Bxb4 13. axb4 O-O 14. Qxb7 Rb8 15. Qxa7 Rxb4 16. O-O Qb8 17. Qe3 Re8 18. Qc5 Rb5 19. Qe3 Rb3 20. cxb3 Qb6 21. Qxb6 cxb6 22. Ba3 h5 23. Kh1 f5 24. Bb4 Rb8 25. h4 Kh7 26. Rac1 Kg8 27. Rg1 Kh7 28. Bd6 Re8 29. Rge1 e4 30. f3 Kh8 31. Rc6 Rd8 32. fxe4 Re8 33. e5 b5 34. Rb6 Rc8 35. Rxb5 Rd8 36. Rf1 g6 37. Ra1 Re8 38. Rd5 Kg7 39. Rda5 f4 40. Rf1 Rc8 41. Ra7+ Kh8 42. Kh2 Rc2 43. Rxf4 Rc8 44. e6 Re8 45. Kh1 Rc8 46. Be5+ Kg8 47. Rg7+ Kh8 48. Rc7+ Kg8 49. Rxc8+ Kh7 50. Rh8#'

const pgn3 = '1. Nf3 Nc6 2. Ng5 d5 3. Nc3 Nf6 4. e4 Nxe4 5. Ngxe4 dxe4 6. Nxe4 Nd4 7. c3 Bf5 8. Qa4+ Nc6 9. a3 Qd5 10. Ng3 Qe6+ 11. Be2 Bd3 12. b4 Bxe2 13. Nxe2 Kd7 14. b5 Ne5 15. d4 Nd3+ 16. Kf1 Nxc1 17. Rxc1 c5 18. dxc5 Qd5 19. Rd1 Qxd1+ 20. Qxd1+ Ke8 21. Qa4 h6 22. b6+ Kd8 23. bxa7 e5 24. Qa5+ Kc8 25. c6 bxc6 26. Qxe5 Kb7 27. Qa5 Rxa7 28. Qd8 Rxa3 29. Qd7+ Kb6 30. Qg4 Ra1+ 31. Nc1 Rxc1+ 32. Ke2 Rxh1 33. h4 Bc5 34. Qxg7 Re8+ 35. Kf3 Re2 36. Kxe2 Rxh4 37. Qf6 Rh1 38. Qxf7 Bd6 39. f4 Bc5 40. Qd7 Bf2 41. Kxf2 Kc5 42. Ke3 Kb6 43. Ke2 Kc5 44. Qc8 Kd6 45. Qb8+ Ke7 46. Qa8 Kf7 47. Qd8 Ra1 48. Qb8 Ra4 49. Qb3+ Ke7 50. Qxa4 Kf8 51. Qa8+ Kf7 52. Qd8 c5 53. Qa8 c4 54. Qh8 Ke7 55. Qxh6 Kf7 56. Qa6 Kg7 57. Qxc4 Kg6 58. Qb5 Kg7 59. Qa5 Kg6 60. Qa7 Kf5 61. Qd4 Ke6 62. Qc5 Kf7 63. Qa5 Kg7 64. Qa8 Kf7 65. Qd8 Kg7 66. Qa8 Kf7 67. Qh8 Ke7 68. Qc8 Kf7 69. Qa8 Ke6 70. Qh8 Kf7 71. Qh3 Kg7 72. Qg3+ Kf7 73. Qg5 Ke6 74. Qe5+ Kf7 75. Qa5 Kg6 76. Qa7 Kf5 77. Qd4 Ke6 78. Qc5 Kf7 79. Qa5 Kg7 80. Qa8 Kf7 81. Qd8 Kg7 82. Qa8 Kf6 83. Qg8 Ke7 84. Qc8 Kf7 85. Qa8 Kg7 86. Qe8 Kf6 87. Qe5+ Kf7 88. Qa5 Kg6 89. Qa7 Kf5 90. Qd4 Ke6 91. Qc5 Kf7 92. Qa5 Kg6 93. Qa7 Kf5 94. Qd4 Ke6 95. Qc5 Kf7 96. Qa5 Kg7 97. Qa8 Kf7 98. Qd8 Kg7 99. Qa8 Kf7 100. Qd8 Kg7 101. Qa8 Kf7 102. Qd8 Kg7 103. Qa8 Kf6 104. Qg8 Ke7 105. Qg5+ Kf7 106. Qa5 Kg7 107. Qa8'

const pgn4 = '1. e4 e5 2. Nf3 Nc6 3. Be2 Rb8 4. d3 Nf6 5. Be3 Ng4 6. Bg5 Bb4+ 7. c3 Be7 8. Bxe7 Nxe7 9. Nbd2 h5 10. d4 Nc6 11. Bc4 exd4 12. Nxd4 Nxd4 13. cxd4 Qf6 14. O-O Qxd4 15. Qc1 O-O 16. Bd5 g5 17. Qxc7 Qxd2 18. Qxb8 Qxb2 19. Rac1 Nxf2 20. Rxc8 Rxc8 21. Qxc8+ Kg7 22. Rxf2 Qa1+ 23. Rf1 Qd4+ 24. Rf2 f5 25. Qxd7+ Kh8 26. Qc8+ Kg7 27. Qxb7+ Kh6 28. Qc6+ Kh7 29. exf5 Qe5 30. Qg6+ Kh8 31. Qg8#'

var playgame;
var allmoves;
var currmove = 0;
var loaded = false;

function loadGame(pgn) {
    clearInterval(playgame);
    chess.load_pgn(pgn)
    allmoves = chess.history();
    for (var i = 0; i < 250; i++) {
        chess.undo();
    }
    board1.position(chess.fen())
}

function playGame(pgn) {
    if (!loaded) {
        loadGame(pgn);
        loaded = true;
    }
    playgame = setInterval(function() {
        chess.move(allmoves[currmove]);
        board1.position(chess.fen());
        currmove++;
        if (currmove >= allmoves.length) {
            clearInterval(playgame);
        }
    }, 1000)
}

function nextMove(pgn) {
    if (!loaded) {
        loadGame(pgn);
        loaded = true;
    }
    clearInterval(playgame);
    if (currmove < allmoves.length) {
        chess.move(allmoves[currmove]);
        board1.position(chess.fen());
        currmove++;
    }
}

function prevMove(pgn) {
    if (!loaded) {
        loadGame(pgn);
        loaded = true;
    }
    clearInterval(playgame);
    if (currmove > 0) {
        chess.undo();
        board1.position(chess.fen());
        currmove--;
    }
}


function onDragStart (source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (chess.game_over()) return false

  // only pick up pieces for White
  if (piece.search(/^b/) !== -1) return false
}

function makeMove () {
  if (chess.moves.length === 0) return
  
}

function minimax(depth) {
    return maximizing(depth, -Number.MAX_VALUE, Number.MAX_VALUE).toString()
}

function maximizing(depth, alpha, beta) {
    if (depth === 0 || chess.game_over()) {
        simpleFindMax()
        return simpleFindMax()
    }
    var currBest = -Number.MAX_VALUE
    var moves = chess.moves()
    var bestMove = moves[0]
    var currMove
    for (currMove of moves) {
        chess.move(currMove.toString())
        var minPos = minimizing(depth - 1, alpha, beta)
        var minValue = minPos.getValue()
        chess.undo()
        if (minValue >= currBest) {
            currBest = minValue
            bestMove = currMove
        }
        if (currBest > alpha) {
            alpha = currBest
        }
        if (alpha >= beta) {
            break
        }
    }
    bestMove.setValue(currBest)
    return bestMove
}

function minimizing(depth, alpha, beta) {
    if (depth === 0 || chess.game_over()) {
        return simpleFindMin()
    }
    var currBest = Number.MAX_VALUE
    var moves = chess.moves()
    var bestMove = moves[0]
    var currMove
    for (currMove of moves) {
        chess.move(currMove.toString())
        var maxPos = maximizing(depth - 1, alpha, beta)
        var maxValue = maxPos.getValue()
        chess.undo()
        if (maxValue <= currBest) {
            currBest = maxValue
            bestMove = currMove
        }
        if (currBest < beta) {
            beta = currBest
        }
        if (alpha >= beta) {
            break
        }
    }
    bestMove.setValue(currBest)
    return bestMove
}

function simpleFindMax() {
    if (chess.in_checkmate()) {
        artificialMove = new Move(chess.history()[1])
        artificialMove.setValue(-Number.MAX_VALUE);
        return artificialMove;
    }
    if (chess.in_stalemate()) {
        artificialMove = new Move(chess.history()[1])
        artificialMove.setValue(0);
        return artificialMove;
    }
    var moves = chess.moves()
    var bestMove = moves[0]
    var currBest = -Number.MAX_VALUE
    var currMove
    for (currMove of moves) {
        count++
        chess.move(currMove.toString());
        var posVal = heuristic();
        if (posVal >= currBest) {
            bestMove = currMove
            currBest = posVal
        }
        chess.undo();
    }
    bestMove.setValue(currBest)
    return bestMove
}

function simpleFindMin() {
    if (chess.in_checkmate()) {
        artificialMove = new Move(chess.history()[1])
        artificialMove.setValue(Number.MAX_VALUE);
        return artificialMove;
    }
    if (chess.in_stalemate()) {
        artificialMove = new Move(chess.history()[1])
        artificialMove.setValue(0);
        return artificialMove;
    }
    var moves = chess.moves()
    var bestMove = moves[0]
    var currBest = Number.MAX_VALUE
    var currMove
    for (currMove of moves) {
        chess.move(currMove.toString());
        var posVal = heuristic();
        if (posVal <= currBest) {
            bestMove = currMove
            currBest = posVal
        }
        chess.undo();
    }
    bestMove.setValue(currBest)
    return bestMove
}

function heuristic() {
    return Math.random();
}

function onDrop (source, target) {
  // see if the move is legal
  var move = chess.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  })

  // illegal move
  if (move === null) return 'snapback'

  // make random legal move for black
  window.setTimeout(makeMove, 250)
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
  board1.position(chess.fen())
}


