var title = document.title;
var netflixIndex = title.indexOf(' | Netflix Official Site');
if (netflixIndex !== -1) {
  title = title.substr(0, netflixIndex);
}

chrome.runtime.sendMessage(title);
