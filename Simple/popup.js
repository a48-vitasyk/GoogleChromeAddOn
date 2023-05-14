document.getElementById('startButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({startAlerts: true});
    document.getElementById('startStatus').style.backgroundColor = 'red';
    document.getElementById('stopStatus').style.backgroundColor = 'gray';
});

document.getElementById('stopButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({stopAlerts: true});
    document.getElementById('stopStatus').style.backgroundColor = 'red';
    document.getElementById('startStatus').style.backgroundColor = 'gray';
});

// Query the current status when the popup is opened
chrome.runtime.sendMessage({getStatus: true}, function(response) {
    if (response.alertsOn) {
        document.getElementById('startStatus').style.backgroundColor = 'red';
        document.getElementById('stopStatus').style.backgroundColor = 'gray';
    } else {
        document.getElementById('stopStatus').style.backgroundColor = 'red';
        document.getElementById('startStatus').style.backgroundColor = 'gray';
    }
});
