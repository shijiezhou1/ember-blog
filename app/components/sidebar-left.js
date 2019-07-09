import Component from '@ember/component';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Component.extend({
  classNames: ['application_float_card_left'],
  numOfRows: 5,
  listInfo: A(['javascript', 'typescript', 'vuejs', 'java', 'emberjs', 'reactjs']),
  listData: computed('numOfRows', function () {
    let contacts = [];
    let numOfRows = this.get('numOfRows');

    for (let i = 0; i < numOfRows; i++) {
      contacts.push({
        name: this.listInfo[i],
        email: 'www.g@mail.com',
        img: 'http://lorempixel.com/50/50/people?0'
      });
    }

    return contacts;
  }),
  actions: {
    redirectToLink(link) {
      console.log(link);
      this.get('router').transitionTo(link);
    }
  }
});
