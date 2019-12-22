import Component from "@ember/component"
import EmberObject from "@ember/object"

export default Component.extend({
  classNames: ["application_float_card_left", "md-whiteframe-1dp"],
  numOfRows: "",

  testObject: EmberObject.create(),

  didRender() {
    this.numOfRows = this.get("category").get("length")
  },
  actions: {
    setCategory(cat) {
      const chooseCategory = cat
      this.set("chooseCategory", cat)
      // this.testObject = { 'omg': cat};
      // console.log( chooseCategory );
      // this.get('router').transitionTo(`home/${link}`);
    },
  },
})
