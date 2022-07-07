let data = {
    uppercase : 0,
    lowercase : 0,
    words : 0,
    sentences : 0,
    digits : 0,
    vowels : 0,
    consonants : 0,
    char : 0,
    spaces : 0
}


let textInput = document.querySelector('#textArea');

const analyzeBtn = document.querySelector("#analyze");
const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click",(element)=>{

    if(window.confirm('Do you really want to Reset?')){
        document.location.reload();
    }
});

analyzeBtn.addEventListener('click',(element)=> {
    calculateData();
});

function calculateData(){
    if(textInput.value != ''){
        let text = textInput.value;

        data.uppercase = text.match(/[A-Z]/g) != null ? text.match(/[A-Z]/g).length : 0;
        data.lowercase = text.match(/[a-z]/g) != null ? text.match(/[a-z]/g).length : 0;
        data.digits = text.match(/[0-9]/g) != null ? text.match(/[0-9]/g).length : 0;
        data.vowels = text.match(/[aeiouAEIOU]/gi)  != null ? text.match(/[aeiouAEIOU]/gi).length : 0;
        data.consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi)  != null ? text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/gi).length : 0;
        data.char = text.match(/[a-zA-Z]/g)  != null ? text.match(/[a-zA-Z]/g).length : 0;
        data.spaces = text.match(/\s/g)  != null ? text.match(/\s/g).length : 0;
        data.sentences = text.match(/\056/gi) != null ? text.match(/\056/gi).length : 0;
        data.words = text.match(/\S+/g) != null ? text.match(/\S+/g).length : 0;

        showData();
    }
    else{
        alert("please Enter some Text!");
    }
}

function showData(){

    let uppercase = document.getElementById('uppercase');
    uppercase.innerText = data.uppercase;

    let lowercase = document.getElementById('lowercase');
    lowercase.innerText = data.lowercase;

    let char = document.getElementById('char');
    char.innerText = data.char;

    let words = document.getElementById('words');
    words.innerText = data.words;

    let sentences = document.getElementById('sentences');
    sentences.innerText = data.sentences;

    let vowels = document.getElementById('vowels');
    vowels.innerText = data.vowels;

    let consonants = document.getElementById('consonants');
    consonants.innerText = data.consonants;

    let spaces = document.getElementById('spaces');
    spaces.innerText = data.spaces;

    let digits = document.getElementById('digits');
    digits.innerText = data.digits;

}