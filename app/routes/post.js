import Route from '@ember/routing/route';
import showdown from 'showdown';
import showdownExt from '../extensions/showdown';

export default Route.extend( {
  beforeModel(){
    // const currentPost = this.store.peekRecord('post', param.post_id);
    // currentPost.incrementProperty('viewCount');
    // currentPost.save();
  },
  model( param ) {
    this.set('postID', param.post_id);
    return this.store.findRecord( 'post', param.post_id );
  },
  afterModel(){
    // UPDATE VIEW COUNTs
    // TODO need to figureout how to handle refresh issue
    const currRecord = this.store.peekRecord('post', this.get('postID'));
    currRecord.incrementProperty('viewCount');
    currRecord.save();
  },
  setupController( controller, model ) {
    showdown.setFlavor( 'github' );
    const converter = new showdown.Converter();
    converter.useExtension( showdownExt );
    const html = converter.makeHtml( model.text );
    // // SETTING RESULT FOR RENDER
    controller.set( 'model', model );
    controller.set( 'currentMarkdown', html.source );
    // // SETTING INDEX FOR RENDER
    controller.set( 'hello', html.catalog );
  }
} );
