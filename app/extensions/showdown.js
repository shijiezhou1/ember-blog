export default function () {
  var myext1 = {
    type: 'lang',
    regex: /markdown/g,
    replace: 'showdown'
  };
  var myext2 = {
    type: 'lang',
    regex: /love/g,
    replace: 'fun'
  };
  var myext3 = {
    type: 'output',
    regex: '<h2 id=(.*)>',
    replace: '<h2 class="markdown-header" id=$1>'
  }
  var myext4 = {
    type: 'output',
    filter: function(source, showdownConvert, Option, make) {

      const matchResult = source.match(/(.*)<\/?h[1-6]>/ig);

      console.log(matchResult);
      return source;
    },
  }
  return [myext1, myext2, myext3, myext4];
}
