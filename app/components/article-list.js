import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend( {
  tagName: "",
  hover: computed( '', () => {
    
  } ),
  actions: {
    goToPost( id ) {
      console.log( 'this is not right' + id );
    }
  }
} );
