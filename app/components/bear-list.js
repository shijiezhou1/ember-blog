import Component from "@ember/component"
import EmberObject, { computed } from "@ember/object"

export default Component.extend({
  page: 0,
  model: computed({
    set: function(key, bears) {
      return bears.map(function(bear) {
        bears.favorited = false
        return EmberObject.create(bear)
      })
    },
  }),
  totalBears: computed("model.[]", function() {
    return this.get("model.length")
  }),
  bears: computed("model.[]", "page", function() {
    // console.log(this.page);
    var page = this.get("page")
    return this.get("model").slice(page, page + 5)
  }),
  favoritedBears: computed("model.@each.favorited", {
    get: function() {
      return this.get("model").filterBy("favorited", true).length
    },
  }),
  actions: {
    showMore() {
      this.incrementProperty("page", 5)
    },
    favorite(bear) {
      // toggler the variable
      bear.toggleProperty("favorited")
    },
    checkModel() {
      console.dir(this.get("model"))
    },
  },
})
