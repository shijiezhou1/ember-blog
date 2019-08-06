export default [
  {
    "id": 1,
    "title": "1-I'm Running to Reform the W3C's Tag",
    "text": "Some TextSome TextSome The titles of Washed Out's breakthrough song and the first single from Paracosm share two most important words in Ernest Greene's musical language: feel it. It's a simple request, as wel It's a simple request, as well",
    "img": "https://res.cloudinary.com/practicaldev/image/fetch/s--o2WWhI0x--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/j1uy5mzlswvr45z7znjv.jpg",
    "url": "www.google.com",
    "iconButtonList": {favorite: "favorite", share: "share"},
    "categoryList": [],
    "viewCount": 2
  },
  {
    "id": 2,
    "title": "2-Rails is omakase",
    "text": "#Markdown is cool [link](http://emberjs.com) #Markdown is cool [link](http://emberjs.com) #Markdown is cool [link](http://emberjs.com) ### markdown is here as well",
    "img": "https://res.cloudinary.com/practicaldev/image/fetch/s--yuvBDNvQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--KDeQCWRL--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/fobvk7m7w88zk809a9b6.png",
    "url": "www.google.com",
    "iconButtonList": {favorite: "favorite", share: "share"},
    "categoryList": [],
    "viewCount": 0
  },
  {
    "id": 3,
    "title": "3-Master infor",
    "text": "# Ember CLI Showdown\n" +
      "\n" +
      "[![Build Status](https://travis-ci.org/gcollazo/ember-cli-showdown.svg?branch=master)](https://travis-ci.org/gcollazo/ember-cli-showdown)\n" +
      "[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-showdown.svg)](http://emberobserver.com/addons/ember-cli-showdown)\n" +
      "\n" +
      "This addon provides a component that transforms [Markdown](http://en.wikipedia.org/wiki/Markdown) into valid HTML.\n" +
      "\n" +
      "* Fastboot compatible\n" +
      "\n" +
      "## Requirements\n" +
      "\n" +
      "* ember-cli >= 2.16.0 (if on older version of ember-cli, target ember-cli-showdown@3)\n" +
      "\n" +
      "## Usage\n" +
      "From within your Ember CLI application, run the following:\n" +
      "\n" +
      "- `ember install ember-cli-showdown`\n" +
      "\n" +
      "Passing a markdown string inline:\n" +
      "\n" +
      "```handlebars\n" +
      "{{markdown-to-html \"#Markdown is cool [link](http://emberjs.com)\"}}\n" +
      "```\n" +
      "\n" +
      "```html\n" +
      "<!-- Output -->\n" +
      "<h1>Markdown is cool <a href=\"http://emberjs.com\">link</a></h1>\n" +
      "```\n" +
      "\n" +
      "You can also pass a bound value:\n" +
      "\n" +
      "```handlebars\n" +
      "{{markdown-to-html postContent}}\n" +
      "```\n" +
      "\n" +
      "### Showdown Options\n" +
      "\n" +
      "You can use [configuration settings from Showdown][showdown-config]:\n" +
      "\n" +
      "```handlebars\n" +
      "{{markdown-to-html\n" +
      "  markdown=postContent\n" +
      "  strikethrough=true\n" +
      "  literalMidWordUnderscores=true\n" +
      "  simplifiedAutoLink=true}}\n" +
      "```\n" +
      "\n" +
      "[showdown-config]: https://github.com/showdownjs/showdown#valid-options\n" +
      "\n" +
      "#### Global Showdown Options\n" +
      "\n" +
      "Global options are supported as of 2.11.x.  This lets you define options that will be used\n" +
      "for showdown options that were not provided as an attribute.\n" +
      "\n" +
      "An example where you always want to auto link:\n" +
      "\n" +
      "```js\n" +
      "// config/environment.js\n" +
      "module.exports = function(environment) {\n" +
      "  var ENV = {\n" +
      "    showdown: {\n" +
      "      simplifiedAutoLink: true\n" +
      "    }\n" +
      "  }\n" +
      "\n" +
      "  return ENV;\n" +
      "}\n" +
      "```\n" +
      "\n" +
      "### Showdown Extensions\n" +
      "\n" +
      "You can load [Showdown Extensions](https://github.com/showdownjs/showdown/wiki/extensions) by specifying the\n" +
      "\"extensions\" property when initializing your component:\n" +
      "\n" +
      "```handlebars\n" +
      "{{markdown-to-html\n" +
      "  markdown=postContent\n" +
      "  extensions=myExtensionList}}\n" +
      "```\n" +
      "\n" +
      "```handlebars\n" +
      "{{markdown-to-html\n" +
      "  markdown=postContent\n" +
      "  extensions='foo bar baz'}}\n" +
      "```\n" +
      "\n" +
      "(`myExtensionList` can be an array of strings or a space separated string)\n" +
      "\n" +
      "Note that you'll have to register your extensions with Showdown first.\n" +
      "For example, in an initializer:\n" +
      "\n" +
      "```js\n" +
      "// app/initializers/register-showdown-extensions.js\n" +
      "import showdown from 'showdown';\n" +
      "\n" +
      "export function initialize() {\n" +
      "  showdown.extension(\"myExtensionName\", function() {\n" +
      "    return [{\n" +
      "      type: 'html',\n" +
      "      regex: '<blockquote>',\n" +
      "      replace: '<blockquote class=\"blockquote\">'\n" +
      "    }];\n" +
      "  });\n" +
      "}\n" +
      "\n" +
      "export default {\n" +
      "  name: 'register-showdown-extensions',\n" +
      "  initialize\n" +
      "};\n" +
      "```\n" +
      "\n" +
      "[showdown-extensions]: https://github.com/showdownjs/showdown/wiki/extensions\n" +
      "\n" +
      "## 3.x to 4.3 migration\n" +
      "* Global `showdown` is no longer supported.  Must be imported via `import showdown from 'showdown'`\n" +
      "* Remove any use of `FastBoot.require('require')` with `import showdown from 'showdown'`\n" +
      "\n" +
      "## Dependencies\n" +
      "* [Showdown](https://github.com/showdownjs/showdown)\n" +
      "\n" +
      "## Development\n" +
      "\n" +
      "* `git clone https://github.com/gcollazo/ember-cli-showdown.git`\n" +
      "* `cd ember-cli-showdown`\n" +
      "* `npm install`\n" +
      "* `bower install`\n" +
      "\n" +
      "## Previewing\n" +
      "\n" +
      "* `ember server`\n" +
      "* Visit your app at http://localhost:4200.\n" +
      "\n" +
      "## Running Tests\n" +
      "\n" +
      "* `ember test`\n" +
      "* `ember test --server`\n" +
      "\n" +
      "## Building\n" +
      "\n" +
      "* `ember build`\n",
    "url": "www.google.com",
    "img": "https://res.cloudinary.com/practicaldev/image/fetch/s--yuvBDNvQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--KDeQCWRL--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/fobvk7m7w88zk809a9b6.png",
    "iconButtonList": {favorite: "favorite", share: "share"},
    "categoryList": [],
    "viewCount": 1
  },
  {
    "id": 4,
    "title": "4-Four infor",
    "text": "## Second header1 \n" + "## Second header2\n" + "some content \n" + "# first header \n" + "first stuff \n" + "## sub first header \n" + " sub first header \n" + "### third line header \n" + "third line text",
    "url": "www.google.com",
    "img": "https://res.cloudinary.com/practicaldev/image/fetch/s--yuvBDNvQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--KDeQCWRL--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/fobvk7m7w88zk809a9b6.png",
    "iconButtonList": {favorite: "favorite", share: "share"},
    "categoryList": [],
    "viewCount": 1
  },
  {
    "id": 5,
    "title": "5-I'm Running to Reform the W3C's Tag",
    "text": "Some TextSome TextSome The titles of Washed Out's breakthrough song and the first single from Paracosm share two most important words in Ernest Greene's musical language: feel it. It's a simple request, as wel It's a simple request, as well",
    "img": "https://res.cloudinary.com/practicaldev/image/fetch/s--o2WWhI0x--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/j1uy5mzlswvr45z7znjv.jpg",
    "url": "www.google.com",
    "iconButtonList": {favorite: "favorite", share: "share"},
    "categoryList": [],
    "viewCount": 2
  },
]
