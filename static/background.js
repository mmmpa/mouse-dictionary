chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    file: "./main.js"
  });

  chrome.tabs.executeScript({
    file: "./frame.js",
    allFrames: true
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
});
