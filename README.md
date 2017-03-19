## My Gulp 101

TODO 1:

- [x] [gulp-server-livereload](https://www.npmjs.com/package/gulp-server-livereload)
  lub gulp-connect (serwer _localhost:8080_) & gulp-livereload
- [x] [delete generated folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)
- [ ] concat and minify assets (CSS -> _style.css_)
- [ ] [gulp-markdown](https://www.npmjs.com/package/gulp-markdown)
- [ ] [gulp-asciidoctor](https://github.com/asciidoctor/gulp-asciidoctor)
- [ ] szablony HTML
- [ ] copy only changed files

TODO 2:

- [ ] [Setup a new project with Phenomic](https://phenomic.io/docs/setup/)


### Uruchamiamy stronę na Firebase

TODO


### Handlebars templates

* [Try Handlebars in a browser](http://tryhandlebarsjs.com/)


### AJAX

Eloquent JavaScript:

* http://eloquentjavascript.net/10_modules.html
* http://eloquentjavascript.net/12_browser.html
* http://eloquentjavascript.net/13_dom.html
* http://eloquentjavascript.net/14_event.html

CORS:

* [Using CORS](https://www.html5rocks.com/en/tutorials/cors/)
* [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

The code below is copied from http://www.test-cors.org/.

```js
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
```

Promises…

```js
get(url2).then(
  function(text) {
    console.log(JSON.parse(text).articles[1].title);
  },
  function(error) {
    console.log('Failed to fetch data: ' + error);
  }
);
```
