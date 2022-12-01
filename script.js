let x, y, a, b;
let randomx;
let randomy;
let board = document.getElementById("tilecontainerid");
let tile;
let liveeleonboard = 0;         // need to reset at time of gameover
let globalarr = [];
let elementlivedetail = [];
let xposi, yposi;
let leftpermit = true;
let rightpermit = true;
let uppermit = true;
let downpermit = true;
let currentelement;
let elementtobedeleted;
let elementfacevalue;
let leftrecurse = 0;            // need to reset at time of gameover & in key aswell
let rightrecurse = 0;           // need to reset at time of gameover & in key aswell
let uprecurse = 0;              // need to reset at time of gameover & in key aswell
let downrecurse = 0;            // need to reset at time of gameover & in key aswell
let spawngap = 20;
let allowlefttospawn = true;
let allowrighttospawn = true;
let allowuptospawn = true;
let allowdowntospawn = true;
let spawnpermit;
spawnrandom();
spawnrandom();
spawnrandom();


////////////////////////////////---control room---/////////////////////////////////////


window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            leftEngine();
            spawnrandom();
            break;

        case "ArrowRight":
            rightEngine();
            spawnrandom();
            break;

        case "ArrowUp":
            upEngine();
            spawnrandom();

            break;

        case "ArrowDown":
            downEngine();
            spawnrandom();

            break;
    }
})

function gameover() {
    if (leftpermit == false && rightpermit == false && uppermit == false && downpermit == false && liveeleonboard == 16) {
        console.log("gameover");
    }
}















////////////////////////////////---engine section starts here---/////////////////////////////////////////////






// left engine contructing... 
function leftEngine() {
    leftrecurse = 0;
    leftshift();
    mergeleft();
}


// part of left engine
function leftshift() {
    leftrecurse++;
    updateglobalarr();
    let xcoor, ycoor, lxcoor, lycoor, permitleft;
    globalarr.forEach((i, index) => {
        lxcoor = xcoor = i[1];
        lxcoor--;
        lycoor = ycoor = i[2];
        if (xcoor != 1) {
            leftpermit = permitleft = tocheckempty(lxcoor, lycoor)
            if (permitleft == true) {
                i[0].style.gridColumnStart = lxcoor;
                i[0].id = `${lxcoor}-${lycoor}`;
            }
        }
    })
    if (leftrecurse <= 4) {
        requestAnimationFrame(leftshift)
        updateglobalarr();
    }
}


// part of left engine
function mergeleft() {
    updateglobalarr();
    globalarr.forEach((i, index) => {

        let merxcoor, merycoor, checkele;
        merxcoor = i[1];
        merycoor = i[2];
        merxcoor++;
        checkele = document.getElementById(`${merxcoor}-${merycoor}`)
        if (checkele != undefined) {
            if (i[0].classList.value == checkele.classList.value) {
                i[0].remove();
                leftshift();
                let str = i[0].classList.value;
                let inte = parseInt(str.substr(1, str.length - 5));
                let elementati0 = document.getElementById(`${i[1]}-${i[2]}`);
                elementati0.className = `t${inte * 2} tile`
                elementati0.innerText = inte * 2;
                updateglobalarr();
                leftshift();
                updateglobalarr();
                leftpermit = true;
            }
        }
    })
}



////////////////////////////////---left engine constructed successfully---/////////////////////////////////////






// right engine contructing... 
function rightEngine() {
    rightrecurse = 0;
    rightshift();
    mergeright();
}


// part of right engine
function rightshift() {
    rightrecurse++;
    updateglobalarr();
    let xcoor, ycoor, rxcoor, rycoor, permitright;
    globalarr.reverse();
    globalarr.forEach((i, index) => {
        rxcoor = xcoor = i[1];
        rxcoor++;
        rycoor = ycoor = i[2];
        if (xcoor != 4) {
            rightpermit = permitright = tocheckempty(rxcoor, rycoor)
            if (permitright == true) {
                i[0].style.gridColumnStart = rxcoor;
                i[0].id = `${rxcoor}-${rycoor}`;
            }
        }
    })
    if (rightrecurse <= 4) {
        requestAnimationFrame(rightshift);
        updateglobalarr();
    }
}


// part of right engine
function mergeright() {
    updateglobalarr();
    globalarr.reverse();
    globalarr.forEach((i, index) => {

        let merxcoor, merycoor, checkele;
        merxcoor = i[1];
        merycoor = i[2];
        merxcoor--;
        checkele = document.getElementById(`${merxcoor}-${merycoor}`)
        if (checkele != undefined) {
            if (i[0].classList.value == checkele.classList.value) {
                i[0].remove();
                rightshift();
                let str = i[0].classList.value;
                let inte = parseInt(str.substr(1, str.length - 5));
                let elementati0 = document.getElementById(`${i[1]}-${i[2]}`);
                elementati0.className = `t${inte * 2} tile`
                elementati0.innerText = inte * 2;
                updateglobalarr();
                globalarr.reverse();
                rightshift();
                updateglobalarr();
                globalarr.reverse();
                rightpermit = true;
            }
        }
    })
}


////////////////////////////////---right engine constructed successfully---///////////////////////////////////







// upper engine contructing... 
function upEngine() {
    uprecurse = 0;
    upshift();
    mergeup();
}


// part of upper engine
function upshift() {
    uprecurse++;
    updateglobalarr();
    let xcoor, ycoor, uxcoor, uycoor, permitup;
    globalarr.forEach((i, index) => {
        uxcoor = xcoor = i[1];
        uycoor = ycoor = i[2];
        uycoor--;
        if (ycoor != 1) {
            uppermit = permitup = tocheckempty(uxcoor, uycoor)
            if (permitup == true) {
                i[0].style.gridRowStart = uycoor;
                i[0].id = `${uxcoor}-${uycoor}`;
            }
        }
    })
    if (uprecurse <= 4) {
        requestAnimationFrame(upshift);
        updateglobalarr();
    }
}


// part of upper engine
function mergeup() {
    updateglobalarr();
    globalarr.forEach((i, index) => {

        let merxcoor, merycoor, checkele;
        merxcoor = i[1];
        merycoor = i[2];
        merycoor++;
        checkele = document.getElementById(`${merxcoor}-${merycoor}`)
        if (checkele != undefined) {
            if (i[0].classList.value == checkele.classList.value) {
                i[0].remove();
                upshift();
                let str = i[0].classList.value;
                let inte = parseInt(str.substr(1, str.length - 5));
                let elementati0 = document.getElementById(`${i[1]}-${i[2]}`);
                elementati0.className = `t${inte * 2} tile`
                elementati0.innerText = inte * 2;
                updateglobalarr();
                upshift();
                updateglobalarr();
                uppermit = true;
            }
        }
    })
}





////////////////////////////////---upper engine constructed successfully---///////////////////////////////////







// down engine contructing... 
function downEngine() {
    downrecurse = 0;
    downshift();
    mergedown();
}


// part of down engine
function downshift() {
    downrecurse++;
    updateglobalarr();
    let xcoor, ycoor, dxcoor, dycoor, permitdown, downi;
    globalarr.reverse();
    globalarr.forEach((i, index) => {
        dxcoor = xcoor = i[1];
        dycoor = ycoor = i[2];
        dycoor++;

        if (ycoor != 4) {
            downpermit = permitdown = tocheckempty(dxcoor, dycoor)
            if (permitdown == true) {
                i[0].style.gridRowStart = dycoor;
                i[0].id = `${dxcoor}-${dycoor}`;
            }
        }
    })
    if (downrecurse <= 4) {
        requestAnimationFrame(downshift)
        updateglobalarr();
    }
}


// part of down engine
function mergedown() {
    updateglobalarr();
    // globalarr.reverse();
    globalarr.forEach((i, index) => {
        
        let merxcoor, merycoor, checkele;
        merxcoor = i[1];
        merycoor = i[2];
        merycoor--;
        checkele = document.getElementById(`${merxcoor}-${merycoor}`)
        if (checkele != undefined) {
            if (i[0].classList.value == checkele.classList.value) {
                i[0].remove();
                downshift();
                let str = i[0].classList.value;
                let inte = parseInt(str.substr(1, str.length - 5));
                let elementati0 = document.getElementById(`${i[1]}-${i[2]}`);
                elementati0.className = `t${inte * 2} tile`
                elementati0.innerText = inte * 2;
                updateglobalarr();
                globalarr.reverse();
                downshift();
                updateglobalarr();
                downpermit = true;
            }
        }
    })
}





////////////////////////////////---down engine constructed successfully---///////////////////////////////////





////////////////////////////////---engine section ends here---/////////////////////////////////////////////




// failed left engine --> destroyed
// function leftEngine() {
//     globalarr.forEach((i, index) => {
//         if (i[1] != 1) {
//             let m, n;
//             m = xposi = i[1];
//             n = yposi = i[2];
//             leftpermit = tocheckempty(--m, n);
//             if (leftpermit == true) {
//                 i[0].style.gridColumnStart = m;
//                 globalarr[index][1] = m; 
//                 i[0].id = `${m}-${yposi}`;
//             }
//             else {
//             }
//         }
//     })
// }


















// function to spawn 2 in empty grid shells
function spawnrandom() {
    updateglobalarr();
    randomx = Math.floor(Math.random() * 4) + 1;
    randomy = Math.floor(Math.random() * 4) + 1;
    let permit = tocheckempty(randomx, randomy);
    if (permit == true) {
        liveeleonboard++;
        tile = document.createElement('div');
        tile.style.gridRowStart = randomy;
        tile.style.gridColumnStart = randomx;
        tile.classList.add('t2');
        tile.classList.add('tile');
        tile.id = randomx + "-" + randomy;
        tile.innerText = "2";
        setTimeout(() => {

            board.appendChild(tile);
        }, 200);
        elementlivedetail = [tile, randomx, randomy];
        globalarr.push(elementlivedetail);
        gameover();
        updateglobalarr();
    }
    else {
        if (liveeleonboard < 16)
            spawnrandom();
    }
}





// this will give info of undifined tile onboard 
function tocheckempty(a, b) {
    if (document.getElementById(`${a}-${b}`) == undefined) {
        return true;
    }
    else {
        return false;
    }
}






// this will update the current live element in globalarr
function updateglobalarr() {
    globalarr = [];
    liveeleonboard = 0;
    for (let j = 1; j <= 4; j++) {
       for (let k = 1; k <= 4; k++) {
            if (document.getElementById(`${j}-${k}`) != undefined) {
                globalarr.push([(document.getElementById(`${j}-${k}`)), j, k]);
                liveeleonboard++;
            }
        }
    }
}








