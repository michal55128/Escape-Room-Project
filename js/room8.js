

let bombLocations = [];
let buttons = document.querySelectorAll("#minefield button");
let table = document.getElementById("minefield");
let gameOver = false;
let clickedIndex;
let clickedButton;
let nums = [1, 1, 2, 0, 2, 0, 2, 3, 0, 3, 2, 3, 0, 3, 0, 1, 0, 2, 3, 2, 1, 1, 1, 1, 0];
let messageFail = document.getElementById("id02");
let numberButton = 0;
bombLocations = [3, 5, 8, 12, 14, 16, 24];
gameOver = false;

let arr = document.querySelectorAll(".b");
arr.forEach(btn => {
    btn.addEventListener("click", function () { btnClick(btn.id.slice(1)) });
    console.log(btn.id.slice(1));
});


function btnClick(id) {
    let val = nums[id - 1];

    if (val != 0) {
        document.getElementById(`l${id}`).textContent = val;
        numberButton++;
        if (numberButton === 18) {
            showVictoryImage();
            console.log(numberButton);
        }
        console.log(`l${id}`);
    } else {
        boom();
    }
}

function boom() {
    bombLocations.forEach(bomb => {
        let b = document.getElementById(`l${bomb + 1}`);
        console.log(bomb);
        b.innerHTML = "<img src ='../pictures/bomb-48.png'/>"
        b.style.backgroundColor = "red";
        let audio = new Audio('../צלילים/bomb.wav');
        audio.play();
        setTimeout(failMessage, 1000)
    })
}
function failMessage() {
    fail();
}
function again() {
    window.location.reload();
}

function showVictoryImage() {
    // table.style.display = "none";
    // let victoryImage = document.createElement("img");
    // victoryImage.src = "../pictures/win.jpeg";
    // victoryImage.width = "500";
    // victoryImage.height = "500";
    // document.body.appendChild(victoryImage);
    if (localStorage.getItem("level") < 8)
        localStorage.setItem("level", 8);
        document.body.style.backgroundImage = "url('')";
        document.getElementById("header").style.display = "none";
        document.getElementById("minefield").style.display = "none";
        document.getElementById("bomb").style.display = "none";
        document.getElementById("id02").style.display = "none";
        document.getElementById("door").style.display = "inline";
        document.getElementById("arrow").style.display = "inline";
        let audio = new Audio('../צלילים/open.wav');
        audio.play();
    let o = document.getElementById("arrow").addEventListener("click", function () {
        window.location.href = "../html/index.html";

    })


}

function fail() {
    messageFail.style.display = "block";
    // let audio = new Audio('bomb.wav');
    // audio.play();
    //clearTimeout(s);

}


