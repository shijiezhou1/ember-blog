import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['application_float_card_left'],
  // listData: computed('numOfRows', function () {
  //   let contacts = [];
  //   let numOfRows = this.get('numOfRows');
  //
  //   for (let i = 0; i < numOfRows; i++) {
  //     contacts.push({
  //       name: this.listInfo[i],
  //       email: 'www.g@mail.com',
  //       img: 'http://lorempixel.com/50/50/people?0'
  //     });
  //   }
  //
  //   return contacts;
  // }),
  didRender() {
    this.numOfRows = this.get('category').get('length');
  },
  numOfRows: "",
  actions: {
    redirectToLink(link) {
      console.log(link);
      console.log(this.numOfRows);
      this.get('router').transitionTo(`home/${link}`);
    }
  }
});
