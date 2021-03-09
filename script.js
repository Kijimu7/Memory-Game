/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//global constants
// const clueHoldTime = 500;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global variables
var pattern = [2,5,4,3,6,1,2,4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 500;
var mistakes = 0;
var count = 180;
var timerCD = null;
var duration = 50000;
// var counter=setInterval(timer, 1000);

function timer(){
  document.getElementById("timerDisp").innerHTML = "Time: " + duration/1000 + " Sec";
  if(gamePlaying)
    {
      if(duration <= -1000)
    {
    clearInterval(timerCD);
      loseGame();
}else{
  duration -=1000;
    }
   }
}
function countDown(){
  timerCD = setInterval(timer, 1000);
}



function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    clearInterval(timerCD);
    
  }
}

function startGame(){
  //initialize game variables
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  duration = 50000;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  

}


function playClueSequence(){
  //set delay to initial wait time
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i = 0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in "+ delay + "ms");
    setTimeout(playSingleClue, delay,pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
     setTimeout(countDown, delay);
  }
  clueHoldTime -= 50;
}



function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
      }
  
  
    
   if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
    if(progress == pattern.length - 1){
      winGame();
          }else{
            
            progress++;
            playClueSequence();
          }
  }else{
    guessCounter++;
  }
     
}else{
  mistakes++;
 
}
  if (mistakes >= 3)
  {
  loseGame();
}
 
}

    



//checking the user response
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}


function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

// Sound Synthesis Functions
const freqMap = {
  1: 300.6,
  2: 200.6,
  3: 350,
  4: 180.2,
  5: 218,
  6: 366
}

//sound library
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)