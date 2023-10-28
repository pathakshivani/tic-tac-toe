// console.log("welcome to toc tac toe")
// let turn = "X"
// alert(turn)
// let gameover = false

// //function for changing turn
// const changeTurn = () => {
//     return turn === "X" ? "O" : "X";
// }

// // function to check for a win
// const checkWin = ()=>{
//   let boxtext = documeny.getElementsByClassName('boxtext');
//   let wins = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
//   ]
//   wins.forEach(e =>
//     {
//           if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[0]].innerText !==""))
//           {
//                document.querySelector ('.info').innertext = boxtext[e[0]].innerText + "Won"
//                isgameover = true
//                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "56px"
//           }
//     }
//     )  

// }  

// // game logic
//  let boxes = document.getElementsByClassName("box");
//  Array.from(boxes).forEach(element =>{
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click', ()=>
//     {
//         if(boxtext.innerText === ''){
//             boxtext.innerText = turn;
//             turn = changeTurn();
//             checkWin();
//             if(!isgameover)
//             {
//               document.getElementsByClassName("info")[0].innerText = "Turn for "  + turn;
//             }
            
//         }
//  })
// })


console.log("Welcome to Tic-Tac-Toe");
let turn = "X";
let isgameover = false;

// Function for changing turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  Won the battle";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "156px";
        }
    });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    });
});

//add onclick listener to reset button
 reset.addEventListener('click', ()=>{
   let  boxtexts = document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element => {
       element.innerText = ""
       document.querySelector('.imgbox').getElementsByTagName('img')[0].style.visibility = "hidden";
   })
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "156px";
 }
 )


 
   //const reset = document.getElementsById("reset");





