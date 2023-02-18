const btn = document.querySelector('.talk-btn');
const content = document.querySelector('.content');
console.log("dom loaded");

const sr =window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new sr();

recognition.onstart = function (){
    console.log('voice is activated')
}

recognition.onspeechend = function (){
    console.log('voice is ended')
}

recognition.onresult = function (e){
    const crt=e.resultIndex;
    const transcript = e.results[crt][0].transcript;
    content.innerText=transcript;
    readOutLoud(transcript);
}

const synth = window.speechSynthesis;

const voices = synth.getVoices();


function readOutLoud(message){
    const speech =new SpeechSynthesisUtterance();
    speech.text=message;
    speech.volume=1;
    speech.rate =1;
    window.speechSynthesis.speak(speech);
    console.log('read')
}

btn.addEventListener('click',()=>{
    recognition.start();
})