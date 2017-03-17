// http://eloquentjavascript.net/10_modules.html
// http://eloquentjavascript.net/12_browser.html
// http://eloquentjavascript.net/13_dom.html
// http://eloquentjavascript.net/14_event.html

// Using CORS
//   https://www.html5rocks.com/en/tutorials/cors/
// HTTP access control (CORS)
//   https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS

// the code below is from http://www.test-cors.org/

var createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Most browsers.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // IE8 & IE9
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';
var method = 'GET';
var xhr = createCORSRequest(method, url);

xhr.onload = function() {
  console.log('CORS is enabled');
};

xhr.onerror = function() {
  console.log('CORS requests are not available');
};

xhr.send();

// News API
// {
//   "status": "ok",
//   "source": "techcrunch",
//   "sortBy": "top",
//   "articles": [
//     {
//       "author": "Kate Conger",
//       "title": "Google’s fight ...",
//       "description": "Google's legal battle with ...",
//       "url": "https://techcrunch.com/2017/03/16/googles-fight-with-uber-over-self-driving-cars-is-heating-up/",
//       "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2016/12/waymo_fca_fully-self-driving-chrysler-pacifica-hybrid-3.jpg?w=764&h=400&crop=1",
//       "publishedAt": "2017-03-16T23:34:37Z"
//     }, ...
//    ]
// }
// Asynchronous Requests
//   http://eloquentjavascript.net/17_http.html

// API key for
//  Referer: https://h5c3j.github.io/my_gulp_101/news-api.html

// invalid key
var url1 = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=e070a4527305463a8ab5c15a461e53e';
// valid key
var url2 = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=e070a4527305463a8ab5c15a461e53e0'

function get(url) {
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function() {
      if (req.status < 400)
        succeed(req.responseText);
      else
        fail(new Error("Request failed: " + req.statusText));
    });
    req.addEventListener("error", function() {
      fail(new Error("Network error"));
    });
    req.send(null);
  });
}

get(url1).then(function(text) {
  console.log("data.txt: " + text);
}, function(error) {
  console.log("Failed to fetch data.txt: " + error);
});

get(url2).then(
  function(text) {
    console.log("data.txt: " + text);
  },
  function(error) {
    console.log("Failed to fetch data.txt: " + error);
  }
);
