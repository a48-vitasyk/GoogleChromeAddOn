//const targetWord = 'Emergency';
//
//window.onload = () => {
//    if (document.body.innerText.includes(targetWord)) {
//        let audio = new Audio(chrome.runtime.getURL("beep.wav"));
//        audio.play();
//        chrome.runtime.sendMessage({wordFound: true});
//    }
//};
//
const targetWord = 'Emergency';

window.onload = () => {
    if (document.body.innerText.includes(targetWord)) {
        chrome.runtime.sendMessage({wordFound: true});
    }
};
