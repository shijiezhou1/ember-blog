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

    // // SETTING RESULT FOR RENDER
    controller.set('model', model);
    controller.set('currentMarkdown', html.source);
    // // SETTING INDEX FOR RENDER
    controller.set('hello', html.catalog);

  }
  // scrollToDiv() {
  //   console.log(templateArray);
  //   // $('html, body').animate({
  //   //   scrollTop: $("#previewing").offset().top
  //   // }, 800, function () {
  //   // });
  // }
});
