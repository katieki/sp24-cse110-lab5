// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');
  const playSound = document.querySelector('#expose button');
  const canvas = document.querySelector('expose');
  const jsConfetti = new JSConfetti({canvas});
  
  hornSelect.addEventListener('change', (event) =>{
    hornImage.src = 'assets/images/' + `${event.target.value}`+ '.svg';
    hornAudio.src = 'assets/audio/' + `${event.target.value}`+ '.mp3';
  });
  volumeSlider.addEventListener('input', () => {
    updateVolume(volumeSlider.value);
  });
  playSound.addEventListener('click', () => {
    hornAudio.play();
    if(hornSelect.value === "party-horn"){
      jsConfetti.addConfetti();
    }
  })

}
function updateVolume(volume){
  const volumeImage = document.querySelector('#volume-controls img');
  const hornAudio = document.querySelector('#expose audio');

  if(volume == 0){
    volumeImage.src = 'assets/icons/volume-level-0.svg';
  }
  else if(volume < 33){
    volumeImage.src = 'assets/icons/volume-level-1.svg';
  }
  else if(volume < 67){
    volumeImage.src = 'assets/icons/volume-level-2.svg';
  }
  else{
    volumeImage.src = 'assets/icons/volume-level-3.svg';
  }
  hornAudio.volume = volume / 100;
}