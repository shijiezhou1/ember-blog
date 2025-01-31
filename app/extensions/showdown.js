export default function() {
  var myext1 = {
    type: "lang",
    regex: /markdown/g,
    replace: "showdown",
  }
  var myext2 = {
    type: "lang",
    regex: /love/g,
    replace: "fun",
  }
  var myext3 = {
    type: "output",
    regex: "<h(.*) id=(.*)>",
    replace: '<h$1 class="markdown-header" id=$2>',
  }
  var myext4 = {
    type: "output",
    filter: function(source, showdownConvert, Option, make) {
      const matchResult = source.match(/<h[1-6](.*)>(.*)<\/?h[1-6]>/gi)
      if (!matchResult) {
        return { source: source, catalog: "" }
      }
      // TODO fixed the replace
      const mapArray = matchResult.map(idx => {
        // const idToHref = /id=(?:'|")(.*?)(?:'|")/g;
        const classToEmpty = /class=(?:'|")(.*?)(?:'|")/g
        const idToHref = /id=(?:'|")/g
        const hTagFront = /<h[1-6]/gi
        const hTagBack = /<\/h[1-6]/gi
        return idx
          .replace(hTagFront, "<a")
          .replace(hTagBack, "</a")
          .replace(idToHref, 'data-attr="')
          .replace(classToEmpty, "")
      })

      return { source: source, catalog: mapArray }
    },
  }
  return [myext1, myext2, myext3, myext4]
}

// const classMap = {
//   h1: 'ui large header',
//   h2: 'ui medium header',
//   h3: 'ui small header',
//   h4: 'ui small header',
//   h5: 'ui small header',
//   h6: 'ui small header',
//   ul: 'ui list',
//   li: 'ui item'
// }

// const bindings = Object.keys(classMap).map(key => ({
//     type: 'output',
//     regex: new RegExp(`<${key}(.*)>`, 'g'),
//     replace: `<${key} class="${classMap[key]}" $1>`
//   }));

// converter.useExtension([...bindings]);
