import Controller from "@ember/controller"

export default Controller.extend({
  // TODO two options for gallery list view: https://masonry.desandro.com/ or https://vestride.github.io/Shuffle/
  // those two option is very useful
  actions: {
    submit(routeName) {
      this.transitionToRoute(`/post/${routeName}`)
    },
  },
})
