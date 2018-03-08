var vb = (function(){
  var exports = {};

  exports.inject = function(url){
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
    console.log(url, ' Injected!');
  }

  exports.inject._jquery = function(){
      let url =  'https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js';
      exports.inject(url);
  }

  export.inject._underscore = function(){
    let url = 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js';
    exports.inject(url)
  }

  export.inject._lodash = function(){
    exports.inject('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.5/lodash.core.js');
  }

  return exports;
}());
