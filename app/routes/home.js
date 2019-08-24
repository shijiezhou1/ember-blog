import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // TODO it needs a sorting list because it cache last record
  },
  actions: {
    refreshModel() {
      this.refresh();
    },
    updateLike(likeId){
      // console.log(likeId);
      this.store.findRecord('post', likeId).then((post)=>{
        post.incrementProperty('like');
        post.save();
      });
    }
  }
  // renderTemplate() {
  //   this.render('home', {
  //     into: 'application',
  //     outlet: 'onlyApp'
  //   });
  // }
});
