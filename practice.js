///---reverse number---/// 

function reverse() {
    let patt = /\d/;
    let val = document.getElementById("first-inpt").value;
    if (val.match(patt) == true) {
        document.getElementById("first-inpt").value = ""
        let result = val.split("").reverse()
        result.join();
        document.getElementById("result-1").innerHTML = result;
    }
    else {
        alert("please enter the number")
    }

}
///---palindrome ---///

function palindrome() {
    let val = document.getElementById("second-inpt").value;
    document.getElementById("second-inpt").value = ""
    let result = val.split("");
    let revers = val.split("").reverse().join();
    if (result == revers) {
        document.getElementById("result-2").innerHTML = "this is palindrome";
    } else {
        document.getElementById("result-2").innerHTML = "you type a wrong word!";
    }
}
///---combinations of a string---///

//the explanation is the first element plus the next one until finish the array.length and then go to the next this turn we add the thrid element to the secod until our element finish like: % ,# ,$ ,* =>  %#, %$, %* (three) // #$, #* (two)// $* (one);

// function combinations() {
//     let val = document.getElementById("third-inpt").value;
//     let result = val.split("");
//     console.log(result)
//     let empty1 = "";
//     let empty2 = "";
//     for (let i = 0; i<=result.length; i++){
//         empty1=result[i]+result[i+1]
//         document.getElementById("result-3").innerHTML = empty1;
//     }
// }
///---another sulotion not correct---////
function combinations() {
    let val = document.getElementById("third-inpt").value;
    let result = val.split("");
    console.log(result)
    let empty1 = "";
    let empty2 = "";
    for (let i = 0; i < result.length; i++) {
        if (i < result.length - 1) {
            empty2 = result[i] + result[i + 1]
        }
        else {
            empty1 = result[result.length - 1] + result[0];

        }
    }
    document.getElementById("result-3").innerHTML = result + " " + "/" + " " + empty1 + " " + "," + empty2;
}

///---head and tail---///
var score = 0;
function choose(e) {
    console.log(e)
    let math = Math.floor(Math.random() * 2);

    if (e == math) {
        score++
        let win = document.getElementById("result-4-2");
        win.innerHTML = score + "<br>" + "you win!";
        win.style.color = "green";
    }
    else {
        score--
        let lose = document.getElementById("result-4-2")
        lose.innerHTML = score + "<br>" + "you lose!";
        lose.style.color = "tomato"
    }
    if (math == 1) {
        math = "tail"
    }
    else {
        math = "head"
    }
    document.getElementById("result-4-1").innerHTML = "computer guess: " + " " + math;
}

///---magic box---///

function myAnswer() {
    let answer = ["good", "cool", "awesome", "i dont actually know"];
    let i = Math.floor(Math.random() * answer.length);
    document.getElementById("result-5").innerHTML = answer[i]
}

///---geuss numbers---///
let btn = document.getElementById("btn-g");
let gamePlay = false;

btn.addEventListener("click", function () {
    if (!gamePlay) {
        gamePlay = true;
        btn.innerHTML = "guess";
        maker();
    }
    else {
        let winC=0;
        var numb = document.querySelectorAll(".addg");
        for (let i = 0; i < numb.length; i++) {
            if (numb[i].value == numb[i].correct) {
                numb[i].style.backgroundColor = "rgb(37, 173, 10)";
                winC++
            }
            else {
                if (numb[i].value < numb[i].correct) {
                    numb[i].style.backgroundColor = "rgb(7, 122, 253)";
                }
                else {
                    numb[i].style.backgroundColor = "rgb(253, 7, 81)";
                }
            }
        }
    }
})

function maker() {
    for (let x = 0; x < 6; x++) {
        let elem = document.createElement("input");
        elem.setAttribute("type", "number");
        elem.value = 0;
        elem.style.height = "45px";
        elem.max = 9;
        elem.min = 0;
        elem.size = 1;
        elem.order = x;
        elem.correct = Math.floor(Math.random() * 10)
        elem.classList.add("addg")
        elem.classList.add("game-animation")
        let target = document.getElementById("btn-g");
        document.getElementById("game-area").insertBefore(elem, target);
    }
}