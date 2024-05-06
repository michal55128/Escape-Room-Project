// Define the size of the square
const size = 3;

// Create an array to hold the numbers
const numbers = [3, 6, 8, 4, 1, 2, 7, 5];

// Create a 2D array to hold the squares
const squares = [];
for (let i = 0; i < size; i++) {
  squares[i] = [];
  for (let j = 0; j < size; j++) {
    // Add the numbers to the squares
    if (i === size - 1 && j === size - 1) {
      squares[i][j] = null; // empty space
    } else {
      squares[i][j] = numbers.shift();
    }
  }
}
// Populate the table cells with the numbered squares and empty space
const puzzle = document.getElementById('puzzle');
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const cell = puzzle.rows[i].cells[j];
    if (squares[i][j] === null) {
      cell.classList.add('empty');
    }
    cell.textContent = squares[i][j]; // add the numbered squares
    cell.addEventListener('click', () => {
      const row = cell.parentNode.rowIndex;
      const col = cell.cellIndex;
      const empty = document.querySelector('.empty');
      const emptyRow = empty.parentNode.rowIndex;
      const emptyCol = empty.cellIndex;
      if ((row === emptyRow && Math.abs(col - emptyCol) === 1) || (col === emptyCol && Math.abs(row - emptyRow) === 1)) {
        // swap the numbered square with the empty space
        empty.textContent = cell.textContent;
        cell.textContent = '';
        cell.classList.add('empty');
        empty.classList.remove('empty');
      }

      let k = 1;
      let isPuzzleSolved = true;
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const cell = puzzle.rows[i].cells[j];
          if (cell.classList.contains('empty')) {
            continue;
          }
          console.log(cell);
          const currentNumber = parseInt(cell.textContent);
          if (currentNumber !== k++) {
            isPuzzleSolved = false;
            break;
          }
        }
        if (!isPuzzleSolved) {
          break;
        }
      }
      if (isPuzzleSolved) {
        if (localStorage.getItem("level") < 4)
          localStorage.setItem("level", 4);
          document.getElementById("background1").style.display = "none";
          document.getElementById("puzzle").style.display = "none";
          document.getElementById("door").style.display = "inline";
          document.getElementById("arrow").style.display = "inline";
          let audio = new Audio('../צלילים/open.wav');
          audio.play();
        let o = document.getElementById("arrow").addEventListener("click", function () {
          window.location.href = "../html/index.html";

        })
      }
    });

  }
}

