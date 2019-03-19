function madeChessboard() {
    for (var i = 0; i < 5; i++) { 
        data += "<br/>";
        for (var j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }

    data += "<br/><input type='button' value='Change Value' onclick='changeValue()'>"
  return data;
}