import Component from '@ember/component';

export default Component.extend({
  tagName: "",
  actions: {
    goToPost(id){
      console.log('this is not right' + id);
    }
  }
});
