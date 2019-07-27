import Component from '@ember/component';

export default Component.extend( {
  classNameBindings: ['mdWhiteframe_10dp'],
  mdWhiteframe_10dp: false,
  mouseEnter(){
    //md-whiteframe-15dp
    this.set('mdWhiteframe_10dp', true);
  },
  mouseLeave() {
    this.set('mdWhiteframe_10dp', false);
  },
  actions: {
    goToPost( id ) {
      console.log( 'this is not right' + id );
    },

  }
} );
