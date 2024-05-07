// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const buttonToTalk = document.querySelector('button');
  const inputTxt = document.getElementById('text-to-speak');
  const smileImg = document.querySelector('img');

  let voices = [];

  function populateVoiceList(){
    voices = synth.getVoices();
    
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }
  populateVoiceList();

  synth.addEventListener('voiceschanged', populateVoiceList);

  buttonToTalk.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    voices.forEach(voice => {
      if(voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    });
    synth.speak(utterThis);

    utterThis.onstart = () => {
      smileImg.src = 'assets/images/smiling-open.png';
    }
    utterThis.onend = () => {
      smileImg.src = 'assets/images/smiling.png';
    }
    
    inputTxt.blur();
  });
}