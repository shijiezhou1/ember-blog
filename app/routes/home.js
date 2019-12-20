import Route from '@ember/routing/route'

export default Route.extend({
  model() {
    // TODO it needs a sorting list because it cache last record
  },
  actions: {
    refreshModel() {
      this.refresh()
    },
    updateLike(likeId) {
      const record = this.store.peekRecord('post', likeId) // retrieve record
      record.incrementProperty('like')
      record.save()
    },
  },
  // renderTemplate() {
  //   this.render('home', {
  //     into: 'application',
  //     outlet: 'onlyApp'
  //   });
  // }
})
