//const targetWord = 'Emergency';
//
//const observer = new MutationObserver((mutationsList, observer) => {
//    // Look through all mutations that just occured
//    for (let mutation of mutationsList) {
//        // If the addedNodes property has one or more nodes
//        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
//            if (document.body.innerText.includes(targetWord)) {
//                chrome.runtime.sendMessage({wordFound: true});
//            }
//        }
//    }
//});
//
//// Start observing the document with the configured parameters
//observer.observe(document.body, { childList: true, subtree: true });
//
//window.onload = () => {
//    if (document.body.innerText.includes(targetWord)) {
//        chrome.runtime.sendMessage({wordFound: true});
//    }
//};
//
//const targetWord = 'Emergency';
//
//const checkForWord = () => {
//    if (document.body.innerText.includes(targetWord)) {
//        chrome.runtime.sendMessage({wordFound: true});
//    }
//};
//
//const observer = new MutationObserver(checkForWord);
//
//observer.observe(document.body, { childList: true, subtree: true });
//
//window.onload = checkForWord;
//

// Рабочий для версии 3.0
//const targetWord = 'Emergency';
//
//const checkForWord = () => {
//    if (document.body.innerText.includes(targetWord)) {
//        chrome.runtime.sendMessage({wordFound: true});
//    }
//};
//
//// Check for the target word every 1000 milliseconds (1 second)
//setInterval(checkForWord, 1000);

//const targetWord = 'Emergency';
//
//const checkForWord = (node) => {
//    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes(targetWord)) {
//        chrome.runtime.sendMessage({wordFound: true});
//    } else if (node.nodeType === Node.ELEMENT_NODE) {
//        for (let i = 0; i < node.childNodes.length; i++) {
//            checkForWord(node.childNodes[i]);
//        }
//    }
//};
//
//const observer = new MutationObserver((mutationsList) => {
//    for (let mutation of mutationsList) {
//        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
//            for (let node of mutation.addedNodes) {
//                checkForWord(node);
//            }
//        }
//    }
//});
//
//observer.observe(document.body, { childList: true, subtree: true });


// Работает для версии 3.1
/let wordFound = false;
/
/const targetWord = 'Emergency';
/
/const checkForWord = (node) => {
/    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes(targetWord)) {
/        wordFound = true;
/        chrome.runtime.sendMessage({wordFound: true});
/    } else if (node.nodeType === Node.ELEMENT_NODE) {
/        for (let i = 0; i < node.childNodes.length; i++) {
/            checkForWord(node.childNodes[i]);
/        }
/    }
/};
/
/const observer = new MutationObserver((mutationsList) => {
/    for (let mutation of mutationsList) {
/        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
/            for (let node of mutation.addedNodes) {
/                checkForWord(node);
/            }
/        }
/    }
/});
/
/observer.observe(document.body, { childList: true, subtree: true });
/
/setInterval(() => {
/    if (wordFound) {
/        chrome.runtime.sendMessage({wordFound: true});
/    }
/}, 1000);
