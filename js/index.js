
let k = parseInt(localStorage.getItem("level"));
if (k < 12) {
    let currRoom1 = document.getElementById('room' + (k + 1));
    if (currRoom1.className == "locked") {
        currRoom1.style.backgroundImage = "url('../pictures/80.gif')";
        currRoom1.style.backgroundSize = "100%";
        currRoom1.style.backgroundRepeat = "no-repeat";
        setTimeout(() => {
            console.log(currRoom1)
            currRoom1.style.backgroundImage = "";
        }, 4000)
    }
}


for (let j = 1; j <= localStorage.getItem("level") && j < 12; j++) {
    let currRoom = document.getElementById('room' + (j + 1));
    console.log(currRoom)
    currRoom.classList.remove('locked');
}
for (let i = 1; i < 13; i++) {
    let btnR = document.getElementById('room' + i);
    if (btnR.className != "locked") {
        btnR.addEventListener('click', function () {
            open(i);
        });
    }

}

function open(roomNumber) {
    switch (roomNumber) {
        case 1:
            window.location.href = "../html/room1.html";
            break;
        case 2:
            window.location.href = "../html/room2.html";
            break
        case 3:
            window.location.href = "../html/room3.html";
            break
        case 4:
            window.location.href = "../html/room4.html";
            break
        case 5:
            window.location.href = "../html/room5.html";
            break
        case 6:
            window.location.href = "../html/room6.html";
            break
        case 7:
            window.location.href = "../html/room7.html";
            break;
        case 8:
            window.location.href = "../html/room8.html";
            break;
        case 9:
            window.location.href = "../html/room9.html";
            break;
        case 10:
            window.location.href = "../html/room10.html";
            break;
        case 11:
            window.location.href = "../html/room11.html";
            break;
        case 12:
            window.location.href = "../html/room12.html";
            break;
        default:
            break;
    }
}
