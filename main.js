/*let counter = 0;

function exeCount(){
    counter++;
    return counter;
}*/

//キーが押されたとき、またはクリックしたときの処理
function showExeCount(event){
    /*const timeElement = document.getElementById("keyboardinput");
    timeElement.innerText = exeCount();

    if(counter % 2 === 0){
        timeElement.className = "red";
    } else {
        timeElement.className = "blue";
    }*/
    let inputKey;
    const keyboardInput = document.getElementById('keyboardinput');

    if(event.key){
        inputKey = event.key;
        if(inputKey === 'Delete') {
            let Input = keyboardInput.innerText;
            let deleteLast = Input.substring(0,Input.length - 1);
            keyboardInput.innerText = deleteLast;
        } else if(inputKey === 'Enter') {
            const result = document.getElementById('result');
            if(wordgame.evaluation(keyboardInput.innerText)) {
                result.innerText = "正解";
            } else {
                result.innerText = "不正解";
            }
        } else {
            keyboardInput.innerText += inputKey;
        }
    } else {
        inputKey = event.target.innerText;
        if(inputKey === 'Delete') {
            let Input = keyboardInput.innerText;
            let deleteLast = Input.substring(0,Input.length - 1);
            keyboardInput.innerText = deleteLast;
        } else if(inputKey === 'Enter') {
            const result = document.getElementById('result');
            if(wordgame.evaluation(keyboardInput.innerText)) {
                result.innerText = "正解";
            } else {
                result.innerText = "不正解";
            }
        } else {
            keyboardInput.innerText += inputKey;
        }
    }
}
document.onkeydown = showExeCount;

const wordgame = {
    question : `リンゴの英単語は？`,
    correct : "apple",
    evaluation : function(answer){
        return wordgame.correct === answer;
    }
};

//"リンゴの英単語は？"と表示させる
const questionElement = document.getElementById('question');
questionElement.innerText = wordgame.question;

//console.log(wordgame.evaluation("apple"));

//キーボードを作る
function showAlphabet() {
    let code = 97;
    virtualkeyboard = document.getElementById('virtualkeyboard');
    for(let i = 0; i < 26; i++){
        code = 97 + i;
        //virtualkeyboard.innerText += String.fromCharCode(code);
        const button = document.createElement("button");
        const br = document.createElement("br");
        button.innerText = String.fromCharCode(code);
        button.onclick = showExeCount;
        if(i === 11 || i === 21){
           virtualkeyboard.appendChild(br);
           virtualkeyboard.appendChild(button);
        } else {
            virtualkeyboard.appendChild(button);
        }
    }
    const button_2 = document.createElement("button");
    button_2.innerText = 'Enter';
    const br_2 = document.createElement("br");
    const button_3 = document.createElement("button");
    button_3.innerText = 'Delete';
    virtualkeyboard.appendChild(button_2);
    virtualkeyboard.appendChild(br_2);
    virtualkeyboard.appendChild(button_3);
}

showAlphabet();
let button = document.getElementById('virtualkeyboard');
button.onclick = showExeCount;