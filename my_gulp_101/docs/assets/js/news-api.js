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
//
// Asynchronous Requests
//   http://eloquentjavascript.net/17_http.html
// API key for
//  Referer: https://h5c3j.github.io/my_gulp_101/news-api.html

function get(url) {
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener('load', function() {
      if (req.status < 400)
        succeed(req.responseText);
      else
        fail(new Error('Request failed: ' + req.statusText));
    });
    req.addEventListener('error', function() {
      fail(new Error('Network error'));
    });
    req.send(null);
  });
}

// Simple Handlebars iterators
//   http://handlebarsjs.com/block_helpers.html
// insertAdjacentHTML
//   https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

var source = document.querySelector("#article-template").innerHTML;
var template = Handlebars.compile(source);

function getJSON(url, tmpl) {
  get(url).then(function(text) {
    var html = tmpl(JSON.parse(text));
    document.querySelector("header").insertAdjacentHTML('afterend', html);
  });
}

var the_next_web = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=e070a4527305463a8ab5c15a461e53e0';

getJSON(the_next_web, template);
