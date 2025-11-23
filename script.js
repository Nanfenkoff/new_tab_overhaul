document.addEventListener('DOMContentLoaded', function() {
	var sndload = false;

  var bullshit = document.querySelector('body');
	bullshit.addEventListener('click', function() {
		switch (sndload){
			case false:
			myAudio = new Audio('rain.mp3');
			myAudio.loop = true;
			myAudio.volume = 0.3;
			myAudio.play();
			sndload = true
			break;
			
			case true:
			break;
		}
    });
	  
  var a = document.getElementById('link1');
  a.addEventListener('click', function() {
      window.open("https://discordapp.com/channels/@me","_blank")
    });
  var b = document.getElementById('link1-1');
  b.addEventListener('click', function() {
      window.open("https://www.youtube.com/feed/subscriptions","_blank")
    });
  var c = document.getElementById('link2');
  c.addEventListener('click', function() {
      window.open("https://store.steampowered.com/","_blank")
    });
  var d = document.getElementById('link2-1');
  d.addEventListener('click', function() {
      window.open("https://www.artstation.com/","_blank")
    });
  var e = document.getElementById('link3');
  e.addEventListener('click', function() {
      window.open("https://www.spotify.com/br/","_blank")
    });
  var f = document.getElementById('link3-1');
  f.addEventListener('click', function() {
      window.open("https://www.twitch.tv/","_blank")
    });
  var g = document.getElementById('link4');
  g.addEventListener('click', function() {
      window.open("https://twitter.com/?lang=en","_blank")
    });
  var h = document.getElementById('link5');
  h.addEventListener('click', function() {
      window.open("https://www.google.com/","_blank")
    });
  var i = document.getElementById('link4-1');
  i.addEventListener('click', function() {
      window.open("https://www.reddit.com","_blank")
    });
    var j = document.getElementById('link5-1');
  j.addEventListener('click', function() {
      window.open("https://www.netflix.com/","_blank")
    });
	var k = document.getElementById('overa');
  k.addEventListener('click', function() {
      document.querySelector("#overa").outerHTML = "";
    });
  });

