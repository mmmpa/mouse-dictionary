if (window !== window.parent) {
  document.body.addEventListener("mousemove", e => {
    //console.info(e);
    chrome.runtime.sendMessage({ text: "test", e });
    //chrome.tabs.sendRequest(tab.id, request);
  });
}
