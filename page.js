let panels = 8;
let sheet = "numbers";

let initPage = function () {
    let sheetOptions = "";
    for (let s in sheets) {
        let sheetOpt = '<option value="' + s + '">' + s + '</option>';
        sheetOptions += sheetOpt;
    }

    document.getElementById("sheetselect").innerHTML = sheetOptions;
}

let makeRoll = function (maxR) {
    return parseInt(Math.random() * maxR);
}

let refreshPanels = function () {
    panels = document.getElementById("panelcount").value;
    sheet = document.getElementById("sheetselect").value;

    let maxLen = sheets[sheet].length;
    let newPanels = "";
    for (let i = 0; i < panels; i++) {
        let newPanelImg = '<div class="panel-image"><img src="' + sheets[sheet][makeRoll(maxLen)] + '" /></div>';
        newPanels += newPanelImg;
    }
    document.getElementById("div-panel-images").innerHTML = newPanels;
}

initPage();
refreshPanels();

function cycleSheets() {
    document.getElementById("sheetselect").options.selectedIndex = (document.getElementById("sheetselect").options.selectedIndex + 1) % document.getElementById("sheetselect").options.length;
}

function incrementLength() {
    var van = document.getElementById('panelcount').valueAsNumber;
    document.getElementById('panelcount').value = Math.min(van + 1, 16);
}
function decrementLength() {
    var van = document.getElementById('panelcount').valueAsNumber;
    document.getElementById('panelcount').value = Math.max(van - 1, 1);
}

document.getElementsByClassName('increment')[0].onclick = function () {
    incrementLength();
}
document.getElementsByClassName('decrement')[0].onclick = function () {
    decrementLength();
}

document.getElementsByTagName('body')[0].addEventListener("keydown", (event) => {

    if (event.key === 'r') {
        refreshPanels();
    }
    if (event.key === 'w') {
        decrementLength();
        refreshPanels();
    }
    if (event.key === 'e') {
        incrementLength();
        refreshPanels();
    }
    if (event.key === 'q') {
        cycleSheets();
        refreshPanels();
    }

});
