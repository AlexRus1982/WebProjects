var tableItems  = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
    tableItems += "~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?";
var max_i = 4;
var max_j = 8;

function makeInnerItem(charItem) {
    var outStr = "";
    outStr += "<table>";
    outStr += "<tr><td><h1>6" + charItem + "6=</h1></td></tr>";
    outStr += "<tr><td><h2>" + charItem + "</h2></td></tr>";
    outStr += "</table>";
    return outStr;
}

function makeTable() {
    var tableDiv = document.getElementById("table");

    var i = 0, j = 0;
    var table = "<table>";
    for (let char of tableItems) {
        if (j == 0) table += "<tr>";
        table += "<td>" + makeInnerItem(char) + "</td>";
        j++
        if (j == max_j) {
            table += "</tr>";
            j = 0;
        }
    }
    table += "</table>";
    tableDiv.innerHTML = table;
}