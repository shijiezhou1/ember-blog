import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  // classNames: ['application_float_card_right', 'md-padding', 'md-whiteframe-1dp'],
  mouseIsIn: false,

  // fakeIndex: computed('hello', function () {
  //   console.log('computed once');
  //   return this.get('hello') ? this.get('hello') : "empty now";
  // }),

  didInsertElement() {
    this._super(...arguments);

    this.firstActive();
    // BIND SCROLL
    const listOfTopArr = $(".markdown-header");

    $(window).on('scroll', function () {
      const currentPosition = $(this).scrollTop();

      for (let i = 0; i < listOfTopArr.length - 1; i++) {
        console.log(listOfTopArr.eq(i).offset().top);
        if (currentPosition > listOfTopArr.eq(i).offset().top) {
          // console.log(i);
          $(".directionStyle").removeClass("active");
          const elmnt = document.getElementsByClassName("directionStyle")[i]
          elmnt.classList.add("active");
        }
      }
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    // UNBIND
  },

  firstActive() {
    document.getElementsByClassName("directionStyle")[0].classList.add("active");
  },

  mouseEnter(event) {
    this.set('mouseIsIn', true);
    return false;
  },

  mouseLeave(event) {
    this.set('mouseIsIn', false);
    return false;
  },

  actions: {
    changeHello() {
      this.incrementProperty('hello', 5);
    },
    scrollTopPos(id) {
      $(".directionStyle").removeClass("active");
      const elmnt = document.getElementsByClassName("directionStyle")[id]
      elmnt.classList.add("active");
      const currentIdName = elmnt.childNodes[0].getAttribute('data-attr');
      const targetElement = document.getElementById(currentIdName);
      scrollTo(document.body, targetElement.offsetTop, 200);
    }
  }
});
