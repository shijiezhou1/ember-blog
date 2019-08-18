import Component from '@ember/component';

export default Component.extend( {
  classNames: ['singleArticleList'],
  /**
   * This variable is class name from material design.
   * true: md-whiteframe-10dp
   * false: empty
   */
  mdWhiteframe_10dp: false,

  oneTimeIcon: 'favorite_border',
  mouseEnter() {
    this.set( 'mdWhiteframe_10dp', true );
  },
  mouseLeave() {
    this.set( 'mdWhiteframe_10dp', false );
  }
} );
