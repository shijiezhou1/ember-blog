import Route from '@ember/routing/route';
import showdown from 'showdown';
import showdownExt from '../extensions/showdown';

export default Route.extend({
  model(param) {
    return this.store.findRecord('post', param.post_id);
  },
  setupController(controller, model) {
    showdown.setFlavor('github');
    const converter = new showdown.Converter();
    converter.useExtension(showdownExt);
    const html = converter.makeHtml(model.text);

    // SETTING RESULT FOR RENDER
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
