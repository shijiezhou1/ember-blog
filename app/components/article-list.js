import Component from '@ember/component';

export default Component.extend( {
  classNames: ['singleArticleList'],
  /**
   * This variable is class name from material design.
   * true: md-whiteframe-10dp
   * false: empty
   */
  mdWhiteframe_10dp: false,
  mouseEnter() {
    this.set( 'mdWhiteframe_10dp', true );
  },
  mouseLeave() {
    this.set( 'mdWhiteframe_10dp', false );
  },
  actions: {
    goToPost( id ) {
      console.log( 'current select post id: ' + id );
    },
    showDialog() {
      console.log( 'did u wanna share?' )
    }
  }
} );
