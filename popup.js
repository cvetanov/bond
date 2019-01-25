let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// document.getElementsByTagName('h1')[0].textContent

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        file: 'bond.js',
        // code: 'document.getElementsByTagName("h1")[0].textContent',
        //   code: 'document.body.style.backgroundColor = "' + color + '";',
      },
      function(result) {
        console.log(result);
      },
    );
  });
};
