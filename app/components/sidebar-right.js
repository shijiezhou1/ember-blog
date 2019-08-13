import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  mouseIsIn: false,
  // fakeIndex: computed('hello', function () {
  //   console.log('computed once');
  //   return this.get('hello') ? this.get('hello') : "empty now";
  // }),
  prevSectionClick: false,
  shutUp: false,

  didInsertElement() {
    this._super(...arguments);

    this.firstActive();
    // BIND SCROLL
    const listOfTopArr = $(".markdown-header");
    const contentListArr = $(".directionStyle");

    $(window).on('mousewheel', function () {
        const scrollPos = $(window).scrollTop();
        for (let i = 0; i < listOfTopArr.length - 1; i++) {
          if (scrollPos < listOfTopArr.eq(0).offset().top) {
            contentListArr.removeClass('active').eq(0).addClass("active");
          }
          else if (scrollPos > listOfTopArr.eq(i).offset().top - 110) {
            contentListArr.removeClass('active').eq(i).addClass("active");
          } else if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            contentListArr.removeClass('active').eq(listOfTopArr.length - 1).addClass("active");
          }
        }
    });
  },

  mouseDown(){

  },

  mouseUp() {

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
      $(".directionStyle").removeClass("active");
      const elmnt = document.getElementsByClassName("directionStyle")[id]
      elmnt.classList.add("active");
      const currentIdName = elmnt.childNodes[0].getAttribute('data-attr');

      $([document.documentElement, document.body]).animate({
        scrollTop: $(`#${currentIdName}`).offset().top - 100
      }, 200, () => {
        // console.log('work');
      });

    }
  }
});
