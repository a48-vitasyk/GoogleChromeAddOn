// Работает для 3.2
let wordFound = false;
let alerting = false;

const targetWord = 'Emergency SLA';

const checkForWord = (node) => {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes(targetWord)) {
        wordFound = true;
        if (!alerting) {
            alerting = true;
            chrome.runtime.sendMessage({wordFound: true});
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
            checkForWord(node.childNodes[i]);
        }
    }
};

const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            for (let node of mutation.addedNodes) {
                checkForWord(node);
            }
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });

setInterval(() => {
    if (wordFound && alerting) {
        chrome.runtime.sendMessage({wordFound: true}, function(response) {
            if (chrome.runtime.lastError) {
// Обработка ошибки
                console.log(chrome.runtime.lastError.message);
            } else {
// Обработка успешной отправки сообщения
            }
        });
    }
}, 1000);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.stopAlerts) {
        alerting = false;
    }
});
