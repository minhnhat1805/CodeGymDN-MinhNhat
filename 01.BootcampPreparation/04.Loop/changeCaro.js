function changeValue() {
    var x = prompt("X: ");
    var y = prompt("Y: ");
    data = "";
    board[x][y] = "X";
    for (var i = 0; i < 5; i++) {
        data += "<br/>";
        for (var j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    document.getElementById("carogame").innerHTML =  data;
}