import Component from "@ember/component"
import { computed } from "@ember/object"

/**
 * The loader component
 *
 * @module
 * @class loader
 * @uses ember/component
 * @uses ember/object
 * @namespace Component
 */
export default Component.extend({
  /**
   * The log query variable
   *
   * @property {Object} loadingQuery
   * @return hello
   */
  loadingQuery: computed("loadingQuery", function() {}),
})
