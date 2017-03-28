window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

function pA1()
{


function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};

function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio1", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA3()
{

function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};

function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio3", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA5()
{
function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};
function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio5", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };
  request.send();
};
loadSound()
}

function pA7()
{
function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};
function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio7", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };
  request.send();
};
loadSound()
}

function pA9()
{
function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};
function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio9", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };
  request.send();
};
loadSound()
}

function pA11()
{
function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};
function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio11", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };
  request.send();
};
loadSound()
}

function pA13()
{
function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};
function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio13", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };
  request.send();
};
loadSound()
}

function pA15()
{
function process(Data) {
  source = context.createBufferSource(); // Create Sound Source
  context.decodeAudioData(Data, function(buffer){
    source.buffer = buffer;
    source.connect(context.destination); 
    source.start(context.currentTime);
  });
};
function loadSound() {
  var request = new XMLHttpRequest();
  request.open("GET", "/audio15", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };
  request.send();
};
loadSound()
}