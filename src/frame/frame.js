import atcursor from "../lib/atcursor";

if (window !== window.parent) {
  document.body.addEventListener("mousemove", ev => {
    const textAtCursor = atcursor(ev.target, ev.clientX, ev.clientY, 8);

    if (textAtCursor) {
      chrome.runtime.sendMessage({ text: textAtCursor });
    }
  });
}
