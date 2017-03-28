window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

function pA2()
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
  request.open("GET", "/audio2", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA4()
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
  request.open("GET", "/audio4", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA6()
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
  request.open("GET", "/audio6", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA8()
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
  request.open("GET", "/audio8", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA10()
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
  request.open("GET", "/audio10", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA12()
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
  request.open("GET", "/audio12", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA14()
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
  request.open("GET", "/audio14", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}

function pA16()
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
  request.open("GET", "/audio16", true); 
  request.responseType = "arraybuffer"; 

  request.onload = function() {
      var Data = request.response;
      process(Data);
  };

  request.send();
};

loadSound()
}