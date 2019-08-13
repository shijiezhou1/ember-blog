import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';
import { bind } from '@ember/runloop';

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

    let self = this;

    $(window).on('scroll', function () {
      if (self.get('shutUp')) {
        // console.log('please shutUp');
      } else {
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
      this.set('shutUp', true);

      // const intersectionObserver = new IntersectionObserver((entries) => {
      //   let [entry] = entries;
      //   if (entry.isIntersecting) {
      //     setTimeout(() => alert(`${entry.target.id} is visible`), 100)
      //   }
      // });

      $(".directionStyle").removeClass("active");
      const elmnt = document.getElementsByClassName("directionStyle")[id]
      elmnt.classList.add("active");
      const currentIdName = elmnt.childNodes[0].getAttribute('data-attr');

      $([document.documentElement, document.body]).animate({
        scrollTop: $(`#${currentIdName}`).offset().top - 100
      }, 200, () => {
        return this.set('shutUp', false);
      });

    }
  }
});
