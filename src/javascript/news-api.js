// http://eloquentjavascript.net/10_modules.html
// http://eloquentjavascript.net/12_browser.html
// http://eloquentjavascript.net/13_dom.html
// http://eloquentjavascript.net/14_event.html

// http://eloquentjavascript.net/17_http.html

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

// npm install -g serve
// serve --cors --single --cache 0 --port 4000

var url = 'http://localhost:4000';
var method = 'GET';
var xhr = createCORSRequest(method, url);

xhr.onload = function() {
  console.log('CORS is enabled');
};

xhr.onerror = function() {
    console.log('CORS requests are not available');
};

xhr.send();
