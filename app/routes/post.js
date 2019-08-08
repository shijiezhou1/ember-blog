import Route from '@ember/routing/route';
import showdown from 'showdown';

// extension of markdown
var myext = () => {
  console.log('here');
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
    replace: '<h2 class="markdown-class" id=$1>'
  }
  return [myext1, myext2, myext3];
}

export default Route.extend({
  model(param) {
    return this.store.findRecord('post', param.post_id);
  },
  setupController(controller, model) {
    showdown.setFlavor('github');
    showdown.extension('myext', myext);
    const converter = new showdown.Converter();
    converter.useExtension('myext');
    const html = converter.makeHtml(model.text);
    console.log(converter.getAllExtensions());
    console.log(html);
    controller.set('model', model);
    controller.set('currentMarkdown', html);
  }
  // scrollToDiv() {
  //   const findAllHeader = $("h1, h2, h3, h4, h5, h6");
  //   const headers = $('.postContentStyle').find(findAllHeader);
  //   const templateArray = new Array();
  //   const stack = new Array();
  //   for (let i = 0; i < headers.length; i++) {
  //     const header = headers[i];
  //     const level = parseInt(header.tagName.replace('H', ''), 10);
  //     while (stack.length < level) {
  //       stack.push(0);
  //     }
  //     while (stack.length > level) {
  //       stack.pop();
  //     }
  //     stack[stack.length - 1]++;
  //     const index = stack.join("-")
  //     const headerId = `#${header.id}`;
  //     const object = { level: level, index: index, id: headerId };
  //     templateArray.push(object);
  //   }
  //   console.log(templateArray);
  //   // $('html, body').animate({
  //   //   scrollTop: $("#previewing").offset().top
  //   // }, 800, function () {
  //   // });
  // }
});
