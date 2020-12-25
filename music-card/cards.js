const notesString = ["ДО", "РЕ", "МИ", "ФА", "СОЛЬ", "ЛЯ", "СИ"];
const notesLenString = ["целая", "половинная", "четвертная", "восьмая"];
const octavesString = ["Субконтроктава", "Контроктава", "Большая октава", "Малая октава", "Первая октава", "Вторая октава", "Третья октава", "Четвертая октава", "Пятая октава"];
const keysString = ["`" , "1"];
const scripKeys = [25, 13];

var tableItems = "qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
tableItems += "~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"Z";

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        hash[1] = unescape(hash[1]);
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}

function makeNoteOctave(noteName, octavaName, noteStat, CardNotes, CardOctavs, keyIndx, noteIndx) {
    let noteValue = scripKeys[keyIndx] + noteIndx % 18;
    let noteIndex = noteValue % 7;
    let noteLenIndex = Math.floor(noteIndx / 18);
    let octaveIndex = Math.floor(noteValue / 7);

    noteName.innerHTML = notesString[noteIndex] + " (" + notesLenString[noteLenIndex] + ")";
    octavaName.innerHTML = octavesString[octaveIndex];
    noteStat.innerHTML = keysString[keyIndx] + "55" + tableItems[noteIndx] + "555=";

    makeButtons(CardNotes, noteIndex);
    makeOctavs(CardOctavs, noteIndex, 1);
}

function getParams() {
    let param_key1 = getUrlVars()["key1"];
    let param_note1 = getUrlVars()["note1"];
    let param_key2 = getUrlVars()["key2"];
    let param_note2 = getUrlVars()["note2"];
    //alert(param_key1 + ' : ' + param_note1 + "\n" + param_key2 + ' : ' + param_note2);

    let noteName1 = document.getElementById("note1");
    let noteName2 = document.getElementById("note2");

    let octavaName1 = document.getElementById("octave1");
    let octavaName2 = document.getElementById("octave2");

    let noteStat1 = document.getElementById("noteStat1");
    let noteStat2 = document.getElementById("noteStat2");

    makeNoteOctave(noteName1, octavaName1, noteStat1, "firstCardNotes", "firstCardOctavs", param_key1, param_note1);
    makeNoteOctave(noteName2, octavaName2, noteStat2, "secondCardNotes", "secondCardOctavs", param_key2, param_note2);
}

function makeInnerItem(charItem) {
    var outStr = "";
    outStr += "<table>";
    outStr += "<tr><td><h1>6" + charItem + "6=</h1></td></tr>";
    outStr += "<tr><td><h2>" + charItem + "</h2></td></tr>";
    outStr += "</table>";
    return outStr;
}

function makeButtons(id, noteNumber) {
    var noteDiv = document.getElementById(id);

    var innerText = "";
    innerText += '<div id="buttonFillRight"' + ((noteNumber == 0) ? ' class="pushed"' : '') + '></div>';
    innerText += '<div id="buttonFillAll"' + ((noteNumber == 1) ? ' class="pushed"' : '') + '></div>';
    innerText += '<div id="buttonFillLeft"' + ((noteNumber == 2) ? ' class="pushed"' : '') + '></div>';
    innerText += '<div id="buttonFillRight"' + ((noteNumber == 3) ? ' class="pushed"' : '') + '></div>';
    innerText += '<div id="buttonFillAll"' + ((noteNumber == 4) ? ' class="pushed"' : '') + '></div>';
    innerText += '<div id="buttonFillAll"' + ((noteNumber == 5) ? ' class="pushed"' : '') + '></div>';
    innerText += '<div id="buttonFillLeft"' + ((noteNumber == 6) ? ' class="pushed"' : '') + '></div>';
    noteDiv.innerHTML = innerText;
}

function makeClearOctavButtons() {
    var innerText = '';
    innerText += '<div id="buttonFillRightSmall"></div>';
    innerText += '<div id="buttonFillAllSmall"></div>';
    innerText += '<div id="buttonFillLeftSmall"></div>';
    innerText += '<div id="buttonFillRightSmall"></div>';
    innerText += '<div id="buttonFillAllSmall"></div>';
    innerText += '<div id="buttonFillAllSmall"></div>';
    innerText += '<div id="buttonFillLeftSmall"></div>';
    return innerText;
}

function makeOctavButtons(noteNumber) {
    var innerText = "";
    innerText += '<div id="buttonFillRightSmall"' + ((noteNumber == 0) ? ' class="pushed"' : ' class="pushedOcta"') + '></div>';
    innerText += '<div id="buttonFillAllSmall"' + ((noteNumber == 1) ? ' class="pushed"' : ' class="pushedOcta"') + '></div>';
    innerText += '<div id="buttonFillLeftSmall"' + ((noteNumber == 2) ? ' class="pushed"' : ' class="pushedOcta"') + '></div>';
    innerText += '<div id="buttonFillRightSmall"' + ((noteNumber == 3) ? ' class="pushed"' : ' class="pushedOcta"') + '></div>';
    innerText += '<div id="buttonFillAllSmall"' + ((noteNumber == 4) ? ' class="pushed"' : ' class="pushedOcta"') + '></div>';
    innerText += '<div id="buttonFillAllSmall"' + ((noteNumber == 5) ? ' class="pushed"' : ' class="pushedOcta"') + '></div>';
    innerText += '<div id="buttonFillLeftSmall"' + ((noteNumber == 6) ? ' class="pushed"' : ' class="pushedOcta"') + '></div>';
    return innerText;
}

function makeOctavs(id, noteNumber, octaveNumber) {
    var octavDiv = document.getElementById(id);

    var innerText = "";
    innerText += ((octaveNumber == 0) ? makeOctavButtons(noteNumber) : makeClearOctavButtons());
    innerText += ((octaveNumber == 1) ? makeOctavButtons(noteNumber) : makeClearOctavButtons());
    innerText += ((octaveNumber == 2) ? makeOctavButtons(noteNumber) : makeClearOctavButtons());
    innerText += ((octaveNumber == 3) ? makeOctavButtons(noteNumber) : makeClearOctavButtons());
    innerText += ((octaveNumber == 4) ? makeOctavButtons(noteNumber) : makeClearOctavButtons());
    octavDiv.innerHTML = innerText;
}