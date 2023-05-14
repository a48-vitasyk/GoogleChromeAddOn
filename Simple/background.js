
let alertsOn = true;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.wordFound && alertsOn) {
        let notificationOptions = {
            type: 'basic',
            iconUrl: 'images/icon48.png',
            title: 'Emergency!',
            message: 'Get "Emergency" tiket!!'
        };

        chrome.notifications.create('wordFound', notificationOptions);

        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            func: function() {
                let audio = new Audio(chrome.runtime.getURL("beep.wav"));
                audio.play();
            }
        });
    } else if (request.stopAlerts) {
        alertsOn = false;
    } else if (request.startAlerts) {
        alertsOn = true;
    } else if (request.getStatus) {
        sendResponse({alertsOn: alertsOn});
    }
});




