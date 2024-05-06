const squares = document.getElementsByClassName("square");
let row1 = 0;
let row2 = 0;
let row3 = 0;
function prev(i) {
   let r = "square" + i;
   const squares = document.getElementsByClassName(r);
   let firstImage = squares[0].firstElementChild.src;
   for (let i = 0; i < squares.length - 1; i++) {
      squares[i].firstElementChild.src = squares[i + 1].firstElementChild.src;
   }
   squares[squares.length - 1].firstElementChild.src = firstImage;
   if (i === 1) {
      if (squares[4].firstElementChild.src === squares[5].firstElementChild.src && squares[5].firstElementChild.src === squares[6].firstElementChild.src) {
         row1 = 1;
      }
      else row1 = 0;
      
   }
   if (i === 3) {
      if (squares[4].firstElementChild.src === squares[5].firstElementChild.src && squares[5].firstElementChild.src === squares[6].firstElementChild.src) {
         row3 = 1;
      }
      else row3 = 0;
   }
   if (i === 2) {
      if (squares[0].firstElementChild.src === squares[1].firstElementChild.src && squares[4].firstElementChild.src === squares[5].firstElementChild.src) {
         row2 = 1;
      }
      else row2 = 0;
   }
   if (row1 && row2 && row3) {
      let img1 = document.querySelectorAll('img[src*="/pictures/15.png"]');
      let img2 = document.querySelectorAll('img[src*="/pictures/16.png"]');
      for (let i = 0; i < img1.length; i++)
         img1[i].remove();

      for (let j = 0; j < img2.length; j++)
         img2[j].remove();
      if (localStorage.getItem("level") < 1)
         localStorage.setItem("level", 1);
      document.body.style.backgroundImage = "url('')";
      document.getElementById("door").style.display = "inline";
      document.getElementById("arrow").style.display = "inline";
      document.getElementById("key").style.display = "none";
      document.getElementById("table").style.display = "none";
      let audio = new Audio('../צלילים/open.wav');
      audio.play();  
let o=document.getElementById("arrow").addEventListener("click",function(){   
    window.location.href = "../html/index.html";
})
   }

}

function next(i) {

   let r = "square" + i;
   const squares = document.getElementsByClassName(r);
   let lastImage = squares[squares.length - 1].firstElementChild.src;

   for (let i = squares.length - 1; i > 0; i--) {
      squares[i].firstElementChild.src = squares[i - 1].firstElementChild.src;
   }
   squares[0].firstElementChild.src = lastImage;
   if (i === 1) {
      if (squares[4].firstElementChild.src === squares[5].firstElementChild.src && squares[5].firstElementChild.src === squares[6].firstElementChild.src) {
         row1 = 1;
      }
      else row1 = 0;
   }
   if (i === 3) {
      if (squares[4].firstElementChild.src === squares[5].firstElementChild.src && squares[5].firstElementChild.src === squares[6].firstElementChild.src) {
         row3 = 1;
      }
      else row3 = 0;
   }
   if (i === 2) {
      if (squares[0].firstElementChild.src === squares[1].firstElementChild.src && squares[4].firstElementChild.src === squares[5].firstElementChild.src) {
         row2 = 1;
      }
      else row2 = 0;
   }

   if (row1 && row2 && row3) {
      let img1 = document.querySelectorAll('img[src*="/pictures/15.png"]');
      let img2 = document.querySelectorAll('img[src*="/pictures/16.png"]');
      console.log(img1.length, img2.length)
      for (let i = 0; i < img1.length; i++)
         img1[i].remove();

      for (let j = 0; j < img2.length; j++)
         img2[j].remove();

      if (localStorage.getItem("level") < 1)
         localStorage.setItem("level", 1);
         document.body.style.backgroundImage = "url('')";
         document.getElementById("door").style.display = "inline";
         document.getElementById("arrow").style.display = "inline";
         document.getElementById("key").style.display = "none";
         document.getElementById("table").style.display = "none";
         let audio = new Audio('../צלילים/open.wav');
         audio.play();  
   let o=document.getElementById("arrow").addEventListener("click",function(){   
       window.location.href = "../html/index.html";
   })
   }

}
