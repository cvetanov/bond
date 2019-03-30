# bond

A Google Chrome extension which displays IMDB ratings and info when browsing movies on HBO, Netflix and Primevideo. 

## How to install

The api key used for calling the OMDB API is limited to 1000 requests per day, so in case you want to use this extension yourself, make sure to generate a new key for you and be kind not to waste my 1000 requests per day. The subscription is free, so no damage will be done except that I will be sad that I can not preview the IMDB rating of the movie which I want to watch on HBO, Netflix and Primevideo.

### Steps

- checkout this repo
- generate an api key [here](http://www.omdbapi.com/apikey.aspx) and replace the `apiKey` constant in the `popup.js` file
- follow the first section (or search for "LOAD UNPACKED") of [this link](https://developer.chrome.com/extensions/getstarted) for uploading the extension in your browser

Open a movie on HBO, Netflix or Primevideo and click the extension in your browser.

![Screenshot HBO](/screenshot-hbo.png 'Screenshot HBO')
![Screenshot Netflix](/screenshot-netflix.png 'Screenshot Netflix')
![Screenshot Primevideo](/screenshot-primevideo.png 'Screenshot Primevideo')

#

#### Disclaimer

This extension is built for personal use and might break with a change in HBO's, Netflix's or Primevideo's website.
