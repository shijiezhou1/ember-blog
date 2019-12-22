import Component from "@ember/component"
import { inject as service } from "@ember/service"
import EmberObject, { computed } from "@ember/object"

export default Component.extend({
  infinity: service(),
  classNames: ["list-items"],

  init() {
    this._super(...arguments)
    this.set("isLoading", true)
    this.posts = this.get("infinity").model("post", { perPage: 5 })
    this.posts.then(() => {
      this.set("isLoading", false)
    })
  },

  watchChange: computed("chooseCategory", function() {
    // console.log( 'I am watched', this.get( 'chooseCategory' ) );
    console.log(this.get("testObject"))
  }),

  actions: {
    async filterProducts(query) {
      let posts = this.get("infinity").model("post")
      // let posts = await this.store.query( 'post', {query} );
      // model is the collection returned from the route model hook
      this.get("infinity").replace(this.get("model"), posts)
    },
  },
})
