function loginpage() {
    window.location = "gamelogin.html"
}
var name1 = localStorage.getItem("Player 1");
var name2 = localStorage.getItem("Player 2");
var score1 = 0
var score2 = 0
var answer
var panswer
var playerq=1
var playera = 2
var num1
var num2
var question
var div
var input_box
var check_button

document.getElementById("p1name").innerHTML= name1 + ": " + score1;
document.getElementById("p2name").innerHTML= name2 + ": " + score2;

document.getElementById("question").innerHTML = "Player Question: " + name1;
document.getElementById("answer").innerHTML = "Player Answer: " + name2;

function sendword(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    answer=num1*num2
    
    question = "<h4 id='word_display'> Question: "+num1+" + "+num2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box' style='color: black'>";
    check_button = "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    div = question + input_box + check_button;
    document.getElementById("output").innerHTML = div
    console.log(question)
}

function check() {
    panswer = document.getElementById("input_check_box").value
    if(answer == word){
        if(playera == 1){
            score1 = score1 + 1;
            document.getElementById("p1score").innerHTML = name1 + ": "+ score1;
            playera = 2;
            document.getElementById("question").innerHTML = "Player Question: " + name1;
            document.getElementById("answer").innerHTML = "Player Answer: " + name2;
        }
        else if(playera == 2){
            score2 = score2 + 1;
            document.getElementById("p2score").innerHTML = name2 + ": "+ score2;
            playera = 1;
            document.getElementById("question").innerHTML = "Player Question: " + name2;
            document.getElementById("answer").innerHTML = "Player Answer: " + name1;
        }
    }
    document.getElementById("input_check_box").innerHTML = ""
}