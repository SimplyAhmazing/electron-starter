var domready = require('domready');

function init (){
  alert("It works! Now let's do something cool");
};

domready(function(){
  init();
});
