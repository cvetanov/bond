var title = document.title;

var netflixIndex = title.indexOf(' | Netflix Official Site');
if (netflixIndex !== -1) {
    title = title.substr(0, netflixIndex);
}

var PRIME_PREFIX = 'Prime Video: ';
if (title.startsWith(PRIME_PREFIX)) {
    title = title.substr(PRIME_PREFIX.length);
}

chrome.runtime.sendMessage(title);
