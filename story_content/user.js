function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WILxecL9AL":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="Happy.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

