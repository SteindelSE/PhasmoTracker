/*
Author: Derek Steindel
Date: 8/30/2021
Purpose: A third party tracking utility for Phasmophobia.
*/

/* Page Load Functions */

// Page loader. Performs actions upon display of specific
// page divs.
$(document).on("pageshow", function () {
    const activePageId = $(".ui-page-active").attr("id");
    if (activePageId == "page-tracker") {
      showEvidence();
    }
  });

/* Button click events */

// Delete evidence and reload the page to force update upon
// clicking btnReset.
$("#btnReset").click(function() {
    try{
        localStorage.removeItem("evidence");
        location.reload();
    }
    catch (e) {
        alert("ERROR: Could not remove evidence from localStorage.");
        console.log(e);
    }
});

/* Button click functions */

// Update evidence stored in localStorage with evidenceType
// provided by the button pressed. Update button backgrounds
// and evidence to reflect selected evidence and evidence that
// is not possible anymore.
function updateEvidence(evidenceType, initialLoad = false){
    try{
      let evidence = JSON.parse(localStorage.getItem("evidence"));

      if (evidence == null){
          evidence = {
              EMF: 0,
              BOX: 0,
              FING: 0,
              ORBS: 0,
              BOOK: 0,
              TEMP: 0,
              DOTS: 0
          }
      }

      // If we already have 3 evidence, do nothing.
      if (getEvidenceCount(evidence) == 3){
          return;
      }

      switch (evidenceType) {
        case "EMF":
            if (!initialLoad){
                evidence.EMF = (evidence.EMF != 1 ? 1 : 0);
            }
            if (evidence.EMF == 1){
                $("#btnEMF").css("background-color", "green");
                $("#btnEMFText").css("text-decoration", "none");
                $("#btnORBS").css("background-color", "red");
                $("#btnORBSText").css("text-decoration", "line-through");
                if (!initialLoad){
                    evidence.ORBS = -1;
                }
            }
            else{
                $("#btnEMF").css("background-color", "transparent");
                $("#btnORBS").css("background-color", "transparent");
                $("#btnORBSText").css("text-decoration", "none");
            }
            break;
        case "BOX":
            if (!initialLoad){
                evidence.BOX = (evidence.BOX != 1 ? 1 : 0);
            }
            if (evidence.BOX == 1){
                $("#btnBOX").css("background-color", "green");
                $("#btnBOXText").css("text-decoration", "none");
                $("#btnTEMP").css("background-color", "red");
                $("#btnTEMPText").css("text-decoration", "line-through");
                if (!initialLoad){
                    evidence.TEMP = -1;
                }
            }
            else{
                $("#btnBOX").css("background-color", "transparent");
                $("#btnTEMP").css("background-color", "transparent");
                $("#btnTEMPText").css("text-decoration", "none");
            }
            break;
        case "FING":
            if (!initialLoad){
                evidence.FING = (evidence.FING != 1 ? 1 : 0);
            }
            if (evidence.FING == 1){
                $("#btnFING").css("background-color", "green");
            }
            else{
                $("#btnFING").css("background-color", "transparent");
            }
            break;
        case "ORBS":
            if (!initialLoad){
                evidence.ORBS = (evidence.ORBS != 1 ? 1 : 0);
            }
            if (evidence.ORBS == 1){
                $("#btnORBS").css("background-color", "green");
                $("#btnORBSText").css("text-decoration", "none");
                $("#btnEMF").css("background-color", "red");
                $("#btnEMFText").css("text-decoration", "line-through");
                if (!initialLoad){
                    evidence.EMF = -1;
                }
            }
            else{
                $("#btnORBS").css("background-color", "transparent");
                $("#btnEMF").css("background-color", "transparent");
                $("#btnEMFText").css("text-decoration", "none");
            }
            break;
        case "BOOK":
            if (!initialLoad){
                evidence.BOOK = (evidence.BOOK != 1 ? 1 : 0);
            }
            if (evidence.BOOK == 1){
                $("#btnBOOK").css("background-color", "green");
                $("#btnBOOKText").css("text-decoration", "none");
                $("#btnDOTS").css("background-color", "red");
                $("#btnDOTSText").css("text-decoration", "line-through");
                if (!initialLoad){
                    evidence.DOTS = -1;
                }
            }
            else{
                $("#btnBOOK").css("background-color", "transparent");
                $("#btnDOTS").css("background-color", "transparent");
                $("#btnDOTSText").css("text-decoration", "none");
            }
            break;
        case "TEMP":
            if (!initialLoad){
                evidence.TEMP = (evidence.TEMP != 1 ? 1 : 0);
            }
            if (evidence.TEMP == 1){
                $("#btnTEMP").css("background-color", "green");
                $("#btnTEMPText").css("text-decoration", "none");
                $("#btnBOX").css("background-color", "red");
                $("#btnBOXText").css("text-decoration", "line-through");
                if (!initialLoad){
                    evidence.BOX = -1;
                }
            }
            else{
                $("#btnTEMP").css("background-color", "transparent");
                $("#btnBOX").css("background-color", "transparent");
                $("#btnBOXText").css("text-decoration", "none");
            }
            break;
        case "DOTS":
            if (!initialLoad){
                evidence.DOTS = (evidence.DOTS != 1 ? 1 : 0);
            }
            if (evidence.DOTS == 1){
                $("#btnDOTS").css("background-color", "green");
                $("#btnDOTSText").css("text-decoration", "none");
                $("#btnBOOK").css("background-color", "red");
                $("#btnBOOKText").css("text-decoration", "line-through");
                if (!initialLoad){
                    evidence.BOOK = 0;
                }
            }
            else{
                $("#btnDOTS").css("background-color", "transparent");
                $("#btnBOOK").css("background-color", "transparent");
                $("#btnBOOKText").css("text-decoration", "none");
            }
            break;
                                                                        
          default:
              alert("Impossible evidence submitted, check log.");
              console.log(`ERROR: Impossible Evidence ${evidenceType} submitted.`);
              break;
      }

      localStorage.setItem("evidence", JSON.stringify(evidence));

      showPossibilities(evidence);
    }
    catch (e) {
        alert("Error loading evidence, if error continues, reset evidence and try again.");
        console.log(e);
    }
}

/* Functions */

// Show all possible ghosts based on the supplied evidence.
function showPossibilities(evidence) {
    const ghosts = getGhosts();

    $("#grpPossibilities").html("");

    for (const ghost in ghosts) {
        if (Object.hasOwnProperty.call(ghosts, ghost)) {
            const element = ghosts[ghost];
            if (evidence[element[0]] != -1 && evidence[element[1]] != -1 && evidence[element[2]] != -1){
                let count = getEvidenceCount(evidence);
                if ((count <= 1 && (evidence[element[0]] == 1 || evidence[element[1]] == 1 || evidence[element[2]] == 1)) ||
                    (count == 2 && (evidence[element[0]] == 1 && evidence[element[1]] == 1)) ||
                    (count == 2 && (evidence[element[1]] == 1 && evidence[element[2]] == 1)) ||
                    (count == 2 && (evidence[element[0]] == 1 && evidence[element[2]] == 1)) ||
                    (count == 3 && (evidence[element[0]] == 1 && evidence[element[1]] == 1 && evidence[element[2]] == 1))){
                    displayGhostTable(ghost, element);
                }
            }
        }
    }
}

// Display a table "card" for the provided ghost type where ghost
// is the name of the ghost and element is a 6 item array of strings
// containing Evidence 1, Evidence 2, Evidence 3, Strength, Weakness,
// and an array containing strings with Notes for the ghost.
function displayGhostTable(ghost, element) {
    const fullItem = {
        EMF: "EMF 5",
        BOX: "Spirit Box",
        FING: "Fingerprints",
        ORBS: "Ghost Orbs",
        BOOK: "Book Writing",
        TEMP: "Freezing Temperature",
        DOTS: "D.O.T.S. Projector"
    }

    let possibleDiv = document.getElementById("grpPossibilities");
    let ghostTable = document.createElement("table");
    ghostTable.style.width = "100%";
    ghostTable.setAttribute("border", "1");
    let ghostTableBody = document.createElement("tbody");

    let tableRow = document.createElement("tr");
    let tableHeader = document.createElement("th");
    let tableData = document.createElement("td");

    tableHeader.appendChild(document.createTextNode(`${ghost}`));
    tableRow.appendChild(tableHeader);
    ghostTableBody.appendChild(tableRow);
    for (let i = 0; i < element.length; i++) {
        const item = element[i];
        tableRow = document.createElement("tr");
        tableData = document.createElement("td");
        switch (i) {
            case 0:
            case 1:
            case 2:
                tableData.appendChild(document.createTextNode(`Evidence ${i + 1}: ${fullItem[item]}`));
                break;
            case 3:
                tableData.appendChild(document.createTextNode(`Strength: ${item}`));
                break;
            case 4:
                tableData.appendChild(document.createTextNode(`Weakness: ${item}`));
                break;
            case 5:
                tableData.appendChild(document.createTextNode("[NOTES]"));
                let unorderedlist = document.createElement("ul");
                for (let j = 0; j < item.length; j++) {
                    const subitem = item[j];
                    let listItem = document.createElement("li");
                    listItem.appendChild(document.createTextNode(`${subitem}`));
                    unorderedlist.appendChild(listItem);
                }
                tableData.appendChild(unorderedlist);
                break;

            default:
                break;
        }
        tableRow.appendChild(tableData);
        ghostTableBody.appendChild(tableRow);
    }
    ghostTable.appendChild(ghostTableBody);
    possibleDiv.appendChild(ghostTable);
}

// Get number of evidence currently selected.
function getEvidenceCount(evidence) {
    let count = 0;
    for (const [key, value] of Object.entries(evidence)) {
        if (value == 1) {
            count++;
        }
    }
    return count;
}

// Get evidence from localStorage and update displayed evidence on
// the screen.
function showEvidence() {
    try{
        const evidence = JSON.parse(localStorage.getItem("evidence"));
        if (evidence != null){
            for (const [key,value] of Object.entries(evidence)) {
                updateEvidence(`${key}`, true);
            }
            showPossibilities(evidence);
        }
    }
    catch (e) {
        alert("ERROR: Issue loading evidence from localStorage.");
        console.log(e);
    }
}