chrome.tabs.onUpdated.addListener(((tabId, changeInfo, tab) => {
    chrome.tabs.query({ currentWindow: true, active: true }, ([{ id }]) => {
      chrome.tabs.sendMessage(id || 69, {
        make: 'github great again'
      });
    });
}));