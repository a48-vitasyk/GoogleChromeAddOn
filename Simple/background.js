chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.wordFound) {
        let notificationOptions = {
            type: 'basic',
            iconUrl: 'images/icon48.png',
            title: 'Emergency!',
            message: 'Слово "Emergency" найдено на странице!'
        };
        chrome.notifications.create('wordFound', notificationOptions);
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            func: function() {
                let audio = new Audio(chrome.runtime.getURL("beep.wav"));
                audio.play();
            }
        });
    }
});
