import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  classNames: ['application_float_card_left'],
  numOfRows: 3,

  listData: computed('numOfRows', function () {
    let contacts = [];
    let numOfRows = this.get('numOfRows');

    for (let i = 0; i < numOfRows; i++) {
      contacts.push({
        name: 'fake name ' + i,
        email: 'fake email ' + i,
        img: 'http://lorempixel.com/50/50/people?0'
      });
    }

    return contacts;
  }),
});
