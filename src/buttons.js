import "./styles.css";

let printed = "If this shows, something is broken";
const gamerid1 = "x"; //player 1
const gamerid2 = "o"; //player 2

let gamewinner = 0;
let gamertag = "x";
let buttonid = "If this shows, something is broken"; //defined in button press for function buttonActivities
let counter = {
  //counter for each button
  v11: 0,
  v12: 0,
  v13: 0,
  v14: 0,
  v15: 0,
  v21: 0,
  v22: 0,
  v23: 0,
  v24: 0,
  v25: 0,
  v31: 0,
  v32: 0,
  v33: 0,
  v34: 0,
  v35: 0,
  v41: 0,
  v42: 0,
  v43: 0,
  v44: 0,
  v45: 0,
  v51: 0,
  v52: 0,
  v53: 0,
  v54: 0,
  v55: 0
};

const button11 = document.getElementById("addtolist11");
button11.style.width = "92px";
button11.style.height = "92px";
button11.addEventListener("mousedown", (event) => {
  buttonid = "text11";
  if (counter.v11 === 0) {
    counter.v11 = counter.v11 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button12 = document.getElementById("addtolist12");
button12.style.width = "92px";
button12.style.height = "92px";
button12.addEventListener("mousedown", (event) => {
  buttonid = "text12";
  if (counter.v12 === 0) {
    counter.v12 = counter.v12 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button13 = document.getElementById("addtolist13");
button13.style.width = "92px";
button13.style.height = "92px";
button13.addEventListener("mousedown", (event) => {
  buttonid = "text13";
  if (counter.v13 === 0) {
    counter.v13 = counter.v13 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button14 = document.getElementById("addtolist14");
button14.style.width = "92px";
button14.style.height = "92px";
button14.addEventListener("mousedown", (event) => {
  buttonid = "text14";
  if (counter.v14 === 0) {
    counter.v14 = counter.v14 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button15 = document.getElementById("addtolist15");
button15.style.width = "92px";
button15.style.height = "92px";
button15.addEventListener("mousedown", (event) => {
  buttonid = "text15";
  if (counter.v15 === 0) {
    counter.v15 = counter.v15 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button21 = document.getElementById("addtolist21");
button21.style.width = "92px";
button21.style.height = "92px";
button21.addEventListener("mousedown", (event) => {
  buttonid = "text21";
  if (counter.v21 === 0) {
    counter.v21 = counter.v21 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button22 = document.getElementById("addtolist22");
button22.style.width = "92px";
button22.style.height = "92px";
button22.addEventListener("mousedown", (event) => {
  buttonid = "text22";
  if (counter.v22 === 0) {
    counter.v22 = counter.v22 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button23 = document.getElementById("addtolist23");
button23.style.width = "92px";
button23.style.height = "92px";
button23.addEventListener("mousedown", (event) => {
  buttonid = "text23";
  if (counter.v23 === 0) {
    counter.v23 = counter.v23 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button24 = document.getElementById("addtolist24");
button24.style.width = "92px";
button24.style.height = "92px";
button24.addEventListener("mousedown", (event) => {
  buttonid = "text24";
  if (counter.v24 === 0) {
    counter.v24 = counter.v24 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button25 = document.getElementById("addtolist25");
button25.style.width = "92px";
button25.style.height = "92px";
button25.addEventListener("mousedown", (event) => {
  buttonid = "text25";
  if (counter.v25 === 0) {
    counter.v25 = counter.v25 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button31 = document.getElementById("addtolist31");
button31.style.width = "92px";
button31.style.height = "92px";
button31.addEventListener("mousedown", (event) => {
  buttonid = "text31";
  if (counter.v31 === 0) {
    counter.v31 = counter.v31 + 1;
    buttonActivities();
  }

  event.stopPropagation();
});

const button32 = document.getElementById("addtolist32");
button32.style.width = "92px";
button32.style.height = "92px";
button32.addEventListener("mousedown", (event) => {
  buttonid = "text32";
  if (counter.v32 === 0) {
    counter.v32 = counter.v32 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button33 = document.getElementById("addtolist33");
button33.style.width = "92px";
button33.style.height = "92px";
button33.addEventListener("mousedown", (event) => {
  buttonid = "text33";
  if (counter.v33 === 0) {
    counter.v33 = counter.v33 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button34 = document.getElementById("addtolist34");
button34.style.width = "92px";
button34.style.height = "92px";
button34.addEventListener("mousedown", (event) => {
  buttonid = "text34";
  if (counter.v34 === 0) {
    counter.v34 = counter.v34 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button35 = document.getElementById("addtolist35");
button35.style.width = "92px";
button35.style.height = "92px";
button35.addEventListener("mousedown", (event) => {
  buttonid = "text35";
  if (counter.v35 === 0) {
    counter.v35 = counter.v35 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button41 = document.getElementById("addtolist41");
button41.style.width = "92px";
button41.style.height = "92px";
button41.addEventListener("mousedown", (event) => {
  buttonid = "text41";
  if (counter.v41 === 0) {
    counter.v41 = counter.v41 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button42 = document.getElementById("addtolist42");
button42.style.width = "92px";
button42.style.height = "92px";
button42.addEventListener("mousedown", (event) => {
  buttonid = "text42";
  if (counter.v42 === 0) {
    counter.v42 = counter.v42 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button43 = document.getElementById("addtolist43");
button43.style.width = "92px";
button43.style.height = "92px";
button43.addEventListener("mousedown", (event) => {
  buttonid = "text43";
  if (counter.v43 === 0) {
    counter.v43 = counter.v43 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button44 = document.getElementById("addtolist44");
button44.style.width = "92px";
button44.style.height = "92px";
button44.addEventListener("mousedown", (event) => {
  buttonid = "text44";
  if (counter.v44 === 0) {
    counter.v44 = counter.v44 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button45 = document.getElementById("addtolist45");
button45.style.width = "92px";
button45.style.height = "92px";
button45.addEventListener("mousedown", (event) => {
  buttonid = "text45";
  if (counter.v45 === 0) {
    counter.v45 = counter.v45 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button51 = document.getElementById("addtolist51");
button51.style.width = "92px";
button51.style.height = "92px";
button51.addEventListener("mousedown", (event) => {
  buttonid = "text51";
  if (counter.v51 === 0) {
    counter.v51 = counter.v51 + 1;
    buttonActivities();
  }

  event.stopPropagation();
});

const button52 = document.getElementById("addtolist52");
button52.style.width = "92px";
button52.style.height = "92px";
button52.addEventListener("mousedown", (event) => {
  buttonid = "text52";
  if (counter.v52 === 0) {
    counter.v52 = counter.v52 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button53 = document.getElementById("addtolist53");
button53.style.width = "92px";
button53.style.height = "92px";
button53.addEventListener("mousedown", (event) => {
  buttonid = "text53";
  if (counter.v53 === 0) {
    counter.v53 = counter.v53 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button54 = document.getElementById("addtolist54");
button54.style.width = "92px";
button54.style.height = "92px";
button54.addEventListener("mousedown", (event) => {
  buttonid = "text54";
  if (counter.v54 === 0) {
    counter.v54 = counter.v54 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

const button55 = document.getElementById("addtolist55");
button55.style.width = "92px";
button55.style.height = "92px";
button55.addEventListener("mousedown", (event) => {
  buttonid = "text55";
  if (counter.v55 === 0) {
    counter.v55 = counter.v55 + 1;
    buttonActivities();
  }
  event.stopPropagation();
});

function buttonActivities() {
  printed = gamertag;
  document.getElementById(buttonid).innerHTML = printed;
  wincheck();

  gamerchange();
}

function gamerchange() {
  if (gamertag === gamerid1) {
    gamertag = gamerid2;
  } else {
    gamertag = gamerid1;
  }
}
function wincheck() {
  wincheck1str();
  wincheck2str();
  wincheck3str();
  wincheck4str();
  wincheck5str();
  wincheck1stc();
  wincheck2stc();
  wincheck3stc();
  wincheck4stc();
  wincheck5stc();
  wincheck1stcr();
  wincheck2stcr();
}
function wincheck1str() {
  //row
  if (
    counter.v11 === counter.v12 && //check if all the spaces are ocupied
    counter.v12 === counter.v13 &&
    counter.v13 === counter.v14 &&
    counter.v14 === counter.v15 &&
    counter.v15 === 1 &&
    gamewinner === 0
  ) {
    const v11 = document.getElementById("text11").innerHTML;
    const v12 = document.getElementById("text12").innerHTML;
    const v13 = document.getElementById("text13").innerHTML;
    const v14 = document.getElementById("text14").innerHTML;
    const v15 = document.getElementById("text15").innerHTML;
    if (v11 === v12 && v12 === v13 && v13 === v14 && v14 === v15) {
      document.getElementById("text11").innerHTML = gamertag.bold();
      document.getElementById("text12").innerHTML = gamertag.bold();
      document.getElementById("text13").innerHTML = gamertag.bold();
      document.getElementById("text14").innerHTML = gamertag.bold();
      document.getElementById("text15").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck2str() {
  if (
    counter.v21 === counter.v22 && //check if all the spaces are ocupied
    counter.v22 === counter.v23 &&
    counter.v23 === counter.v24 &&
    counter.v24 === counter.v25 &&
    counter.v25 === 1 &&
    gamewinner === 0
  ) {
    const v21 = document.getElementById("text21").innerHTML;
    const v22 = document.getElementById("text22").innerHTML;
    const v23 = document.getElementById("text23").innerHTML;
    const v24 = document.getElementById("text24").innerHTML;
    const v25 = document.getElementById("text25").innerHTML;
    if (v21 === v22 && v22 === v23 && v23 === v24 && v24 === v25) {
      document.getElementById("text21").innerHTML = gamertag.bold();
      document.getElementById("text22").innerHTML = gamertag.bold();
      document.getElementById("text23").innerHTML = gamertag.bold();
      document.getElementById("text24").innerHTML = gamertag.bold();
      document.getElementById("text25").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck3str() {
  if (
    counter.v31 === counter.v32 && //check if all the spaces are ocupied
    counter.v32 === counter.v33 &&
    counter.v33 === counter.v34 &&
    counter.v34 === counter.v35 &&
    counter.v35 === 1 &&
    gamewinner === 0
  ) {
    const v31 = document.getElementById("text31").innerHTML;
    const v32 = document.getElementById("text32").innerHTML;
    const v33 = document.getElementById("text33").innerHTML;
    const v34 = document.getElementById("text34").innerHTML;
    const v35 = document.getElementById("text35").innerHTML;
    if (v31 === v32 && v32 === v33 && v33 === v34 && v34 === v35) {
      document.getElementById("text31").innerHTML = gamertag.bold();
      document.getElementById("text32").innerHTML = gamertag.bold();
      document.getElementById("text33").innerHTML = gamertag.bold();
      document.getElementById("text34").innerHTML = gamertag.bold();
      document.getElementById("text35").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck4str() {
  if (
    counter.v41 === counter.v42 && //check if all the spaces are ocupied
    counter.v42 === counter.v43 &&
    counter.v43 === counter.v44 &&
    counter.v44 === counter.v45 &&
    counter.v45 === 1 &&
    gamewinner === 0
  ) {
    const v41 = document.getElementById("text41").innerHTML;
    const v42 = document.getElementById("text42").innerHTML;
    const v43 = document.getElementById("text43").innerHTML;
    const v44 = document.getElementById("text44").innerHTML;
    const v45 = document.getElementById("text45").innerHTML;
    if (v41 === v42 && v42 === v43 && v43 === v44 && v44 === v45) {
      document.getElementById("text41").innerHTML = gamertag.bold();
      document.getElementById("text42").innerHTML = gamertag.bold();
      document.getElementById("text43").innerHTML = gamertag.bold();
      document.getElementById("text44").innerHTML = gamertag.bold();
      document.getElementById("text45").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck5str() {
  if (
    counter.v51 === counter.v52 && //check if all the spaces are ocupied
    counter.v52 === counter.v53 &&
    counter.v53 === counter.v54 &&
    counter.v54 === counter.v55 &&
    counter.v55 === 1 &&
    gamewinner === 0
  ) {
    const v51 = document.getElementById("text51").innerHTML;
    const v52 = document.getElementById("text52").innerHTML;
    const v53 = document.getElementById("text53").innerHTML;
    const v54 = document.getElementById("text54").innerHTML;
    const v55 = document.getElementById("text55").innerHTML;
    if (v51 === v52 && v52 === v53 && v53 === v54 && v54 === v55) {
      document.getElementById("text51").innerHTML = gamertag.bold();
      document.getElementById("text52").innerHTML = gamertag.bold();
      document.getElementById("text53").innerHTML = gamertag.bold();
      document.getElementById("text54").innerHTML = gamertag.bold();
      document.getElementById("text55").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck1stc() {
  //column
  if (
    counter.v11 === counter.v21 && //check if all the spaces are ocupied
    counter.v21 === counter.v31 &&
    counter.v31 === counter.v41 &&
    counter.v41 === counter.v51 &&
    counter.v51 === 1 &&
    gamewinner === 0
  ) {
    const v11 = document.getElementById("text11").innerHTML;
    const v21 = document.getElementById("text21").innerHTML;
    const v31 = document.getElementById("text31").innerHTML;
    const v41 = document.getElementById("text41").innerHTML;
    const v51 = document.getElementById("text51").innerHTML;
    if (v11 === v21 && v21 === v31 && v31 === v41 && v41 === v51) {
      document.getElementById("text11").innerHTML = gamertag.bold();
      document.getElementById("text21").innerHTML = gamertag.bold();
      document.getElementById("text31").innerHTML = gamertag.bold();
      document.getElementById("text41").innerHTML = gamertag.bold();
      document.getElementById("text51").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck2stc() {
  if (
    counter.v12 === counter.v22 && //check if all the spaces are ocupied
    counter.v22 === counter.v32 &&
    counter.v32 === counter.v42 &&
    counter.v42 === counter.v52 &&
    counter.v52 === 1 &&
    gamewinner === 0
  ) {
    const v12 = document.getElementById("text12").innerHTML;
    const v22 = document.getElementById("text22").innerHTML;
    const v32 = document.getElementById("text32").innerHTML;
    const v42 = document.getElementById("text42").innerHTML;
    const v52 = document.getElementById("text52").innerHTML;
    if (v12 === v22 && v22 === v32 && v32 === v42 && v42 === v52) {
      document.getElementById("text12").innerHTML = gamertag.bold();
      document.getElementById("text22").innerHTML = gamertag.bold();
      document.getElementById("text32").innerHTML = gamertag.bold();
      document.getElementById("text42").innerHTML = gamertag.bold();
      document.getElementById("text52").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck3stc() {
  if (
    counter.v13 === counter.v23 && //check if all the spaces are ocupied
    counter.v23 === counter.v33 &&
    counter.v33 === counter.v43 &&
    counter.v43 === counter.v53 &&
    counter.v53 === 1 &&
    gamewinner === 0
  ) {
    const v13 = document.getElementById("text13").innerHTML;
    const v23 = document.getElementById("text23").innerHTML;
    const v33 = document.getElementById("text33").innerHTML;
    const v43 = document.getElementById("text43").innerHTML;
    const v53 = document.getElementById("text53").innerHTML;
    if (v13 === v23 && v23 === v33 && v33 === v43 && v43 === v53) {
      document.getElementById("text13").innerHTML = gamertag.bold();
      document.getElementById("text23").innerHTML = gamertag.bold();
      document.getElementById("text33").innerHTML = gamertag.bold();
      document.getElementById("text43").innerHTML = gamertag.bold();
      document.getElementById("text53").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck4stc() {
  if (
    counter.v14 === counter.v24 && //check if all the spaces are ocupied
    counter.v24 === counter.v34 &&
    counter.v34 === counter.v44 &&
    counter.v44 === counter.v54 &&
    counter.v54 === 1 &&
    gamewinner === 0
  ) {
    const v14 = document.getElementById("text14").innerHTML;
    const v24 = document.getElementById("text24").innerHTML;
    const v34 = document.getElementById("text34").innerHTML;
    const v44 = document.getElementById("text44").innerHTML;
    const v54 = document.getElementById("text54").innerHTML;
    if (v14 === v24 && v24 === v34 && v34 === v44 && v44 === v54) {
      document.getElementById("text14").innerHTML = gamertag.bold();
      document.getElementById("text24").innerHTML = gamertag.bold();
      document.getElementById("text34").innerHTML = gamertag.bold();
      document.getElementById("text44").innerHTML = gamertag.bold();
      document.getElementById("text54").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck5stc() {
  if (
    counter.v15 === counter.v25 && //check if all the spaces are ocupied
    counter.v25 === counter.v35 &&
    counter.v35 === counter.v45 &&
    counter.v45 === counter.v55 &&
    counter.v55 === 1 &&
    gamewinner === 0
  ) {
    const v15 = document.getElementById("text15").innerHTML;
    const v25 = document.getElementById("text25").innerHTML;
    const v35 = document.getElementById("text35").innerHTML;
    const v45 = document.getElementById("text45").innerHTML;
    const v55 = document.getElementById("text55").innerHTML;
    if (v15 === v25 && v25 === v35 && v35 === v45 && v45 === v55) {
      document.getElementById("text15").innerHTML = gamertag.bold();
      document.getElementById("text25").innerHTML = gamertag.bold();
      document.getElementById("text35").innerHTML = gamertag.bold();
      document.getElementById("text45").innerHTML = gamertag.bold();
      document.getElementById("text55").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck1stcr() {
  //cross
  if (
    counter.v11 === counter.v22 && //check if all the spaces are ocupied
    counter.v22 === counter.v33 &&
    counter.v33 === counter.v44 &&
    counter.v44 === counter.v55 &&
    counter.v55 === 1 &&
    gamewinner === 0
  ) {
    const v11 = document.getElementById("text11").innerHTML;
    const v22 = document.getElementById("text22").innerHTML;
    const v33 = document.getElementById("text33").innerHTML;
    const v44 = document.getElementById("text44").innerHTML;
    const v55 = document.getElementById("text55").innerHTML;
    if (v11 === v22 && v22 === v33 && v33 === v44 && v44 === v55) {
      document.getElementById("text11").innerHTML = gamertag.bold();
      document.getElementById("text22").innerHTML = gamertag.bold();
      document.getElementById("text33").innerHTML = gamertag.bold();
      document.getElementById("text44").innerHTML = gamertag.bold();
      document.getElementById("text55").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}
function wincheck2stcr() {
  if (
    counter.v15 === counter.v24 && //check if all the spaces are ocupied
    counter.v24 === counter.v33 &&
    counter.v33 === counter.v42 &&
    counter.v42 === counter.v51 &&
    counter.v51 === 1 &&
    gamewinner === 0
  ) {
    const v15 = document.getElementById("text15").innerHTML;
    const v24 = document.getElementById("text24").innerHTML;
    const v33 = document.getElementById("text33").innerHTML;
    const v42 = document.getElementById("text42").innerHTML;
    const v51 = document.getElementById("text51").innerHTML;
    if (v15 === v24 && v24 === v33 && v33 === v42 && v42 === v51) {
      document.getElementById("text15").innerHTML = gamertag.bold();
      document.getElementById("text24").innerHTML = gamertag.bold();
      document.getElementById("text33").innerHTML = gamertag.bold();
      document.getElementById("text42").innerHTML = gamertag.bold();
      document.getElementById("text51").innerHTML = gamertag.bold();
      windeclaration();
    }
  }
}

function windeclaration(winner) {
  gamewinner = gamewinner + 1;

  if (gamertag === "x") {
    const winner = "Player 1";

    document.getElementById("wincondition").innerHTML =
      `
  <p>Congratulations! </p>` +
      winner.fontsize(36) +
      `
  <p>has won the game!</p>`;
  } else if (gamertag === "o") {
    const winner = "Player 2";

    document.getElementById("wincondition").innerHTML =
      `
  <p>Congratulations! </p>` +
      winner.fontsize(36) +
      `
  <p>has won the game!</p>`;
  }
}
