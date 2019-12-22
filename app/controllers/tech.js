import Controller from "@ember/controller"
import { A } from "@ember/array"
import { observer, computed } from "@ember/object"

/**
 * The controller for the tech page
 *
 * @module
 * @uses ember/controller
 * @namespace Controller
 * @class tech
 */
export default Controller.extend({
  pizzSizeResult: computed("formSize", function() {
    return this.get("formSize")
  }),
  sizes: A([1, 2, 3, 4]),
  dynamicItem: observer("formSize", function() {
    let json = []
    let length = this.get("formSize")
    let items = []
    for (var i = 1; i <= length; i++) {
      items.push({ name: "name-" + i, value: json, address: "" })
    }
    // set the item on each observer
    this.set("formLists", items)
  }),

  actions: {
    flatButton() {
      // console.log(this.get('formLists'));
    },
  },
})
