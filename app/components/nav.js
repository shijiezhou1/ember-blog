import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  classNames: ['application_nav', 'md-whiteframe-2dp'],
  init() {
    this._super(...arguments)
  },
  actions: {},
})
