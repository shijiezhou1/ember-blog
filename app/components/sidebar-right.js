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
  prevSectionClick: false,

  didInsertElement() {
    this._super(...arguments);

    this.firstActive();
    // BIND SCROLL
    const listOfTopArr = $(".markdown-header");
    const contentListArr = $(".directionStyle");

    let self = this;

    $(window).bind('scroll', function () {
      const scrollPos = $(this).scrollTop();
      for (let i = 0; i < listOfTopArr.length - 1; i++) {
        if (scrollPos < listOfTopArr.eq(0).offset().top) {
          contentListArr.removeClass('active').eq(0).addClass("active");
        }
        else if (scrollPos > listOfTopArr.eq(i).offset().top - 110) {
          contentListArr.removeClass('active').eq(i).addClass("active");
        }
      }
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    $(window).unbind('scroll');
  },

  firstActive() {
    $(".directionStyle").removeClass("active").eq(0).addClass("active");
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
      $(window).unbind('scroll');
      $(".directionStyle").removeClass("active");
      const elmnt = document.getElementsByClassName("directionStyle")[id]
      elmnt.classList.add("active");
      const currentIdName = elmnt.childNodes[0].getAttribute('data-attr');
      const targetElement = document.getElementById(currentIdName);
      scrollTo(document.body, targetElement.offsetTop, 200);
      $(window).bind('scroll');
    }
  }
});
