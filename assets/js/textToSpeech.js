var e7cd3d37 = new SpeechSynthesisUtterance();
function textToSpeech(text) {
    e7cd3d37.text = text;
    e7cd3d37.lang = 'es-ES';
    window.speechSynthesis.speak(e7cd3d37);
}