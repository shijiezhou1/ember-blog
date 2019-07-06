import Component from '@ember/component';
import {computed} from '@ember/object';
import {A} from '@ember/array';

export default Component.extend({
  classNames: ['application_float_card_left'],
  numOfRows: 3,
  listInfo: A(['javascript', 'typescript', 'vue']),
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
    //COVERT THAT TO BE LINK INSTEAD OF FUNCTION
    javascript() {
      console.log('ok - javascript');
    },
    typescript() {
      console.log('ok - typescript');
    },
    vue() {
      console.log('ok - vue');
    }
  }
});
