import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend( {
  infinity: service(),
  classNames: ['list-items'],

  init() {
    this._super( ...arguments );
    this.set('isLoading', true);
    this.posts = this.get( 'infinity' ).model( 'post', {perPage: 5} )
    this.posts.then(()=>{
      this.set('isLoading', false);
    })
  }
} );
