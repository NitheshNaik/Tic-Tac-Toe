let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;
let xwin = 0;
let owin = 0;
let count = 0;
let tie = 0;

const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () => {
    turnO = true;
    enabtn();
    msgContainer.classList.add("hide");
    // owin = 0;
    // xwin = 0;
    count = 0;
    // tie = 0;
}

const newGame = () => {
    turnO = true;
    enabtn();
    msgContainer.classList.add("hide");
    owin = 0;
    xwin = 0;
    count = 0;
    tie = 0;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winner();
    })

})

const winner = () => {
    for (let pattern of patterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                count = 0;
            }
        }
    }
}

const disbtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations ${winner}`
    disbtn();
    msgContainer.classList.remove("hide");
    if (winner === "x") {
        xwin++;
    } else {
        owin++;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if (count >= 9) {
            tie++;
        }
    })
})

resetBtn.addEventListener("click", resetGame)
newbtn.addEventListener("click", newGame)