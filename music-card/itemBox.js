const notesString = ["ДО", "РЕ", "МИ", "ФА", "СОЛЬ", "ЛЯ", "СИ"];
const notesLenString = ["целая", "половинная", "четвертная", "восьмая"];
const octavesString = ["Субконтроктава", "Контроктава", "Большая октава", "Малая октава", "Первая октава", "Вторая октава", "Третья октава", "Четвертая октава", "Пятая октава"];
const scripKeys = [25, 13];

var tableItems = "qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
    tableItems += "~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"Z";

function makeInnerItem(charItem) {
    let outStr = "";
    outStr += "6" + charItem + "6=";
    return outStr;
}

function makeTable() {
    let table1Div = document.getElementById("table1");
    let table2Div = document.getElementById("table2");

    let table = "";
    for (let char of tableItems)
        table += "<option class=\"note\">" + makeInnerItem(char) + "</option>";

    table1Div.innerHTML = table;
    table2Div.innerHTML = table;

    updateNotes();
}

function makeNoteOctave(noteName, octavaName, keyIndx, noteIndx) {
    let noteValue = scripKeys[keyIndx] + noteIndx % 18;
    let noteIndex = noteValue % 7;
    let noteLenIndex = Math.floor(noteIndx / 18);
    let octaveIndex = Math.floor(noteValue / 7);

    noteName.innerHTML = "<option selected='true'>" + notesString[noteIndex] + " (" + notesLenString[noteLenIndex] + ")</option>";
    octavaName.innerHTML = "<option selected='true'>" + octavesString[octaveIndex] + "</option>";
}

function updateNotes() {
    let keySelect1 = document.getElementById("key1");
    let keySelect2 = document.getElementById("key2");

    let noteSelect1 = document.getElementById("table1");
    let noteSelect2 = document.getElementById("table2");

    let noteName1 = document.getElementById("noteName1");
    let noteName2 = document.getElementById("noteName2");

    let octavaName1 = document.getElementById("octava1");
    let octavaName2 = document.getElementById("octava2");

    makeNoteOctave(noteName1, octavaName1, keySelect1.selectedIndex, noteSelect1.selectedIndex);
    makeNoteOctave(noteName2, octavaName2, keySelect2.selectedIndex, noteSelect2.selectedIndex);
}

function onClickCard(page) {
    let keySelect1 = document.getElementById("key1");
    let keySelect2 = document.getElementById("key2");

    let noteSelect1 = document.getElementById("table1");
    let noteSelect2 = document.getElementById("table2");

    let param = page + "?";
    param += "key1=" + keySelect1.selectedIndex + "&";
    param += "note1=" + noteSelect1.selectedIndex + "&";
    param += "key2=" + keySelect2.selectedIndex + "&";
    param += "note2=" + noteSelect2.selectedIndex;

    window.location.href = param;
}