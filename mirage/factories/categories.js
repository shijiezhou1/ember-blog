import { Factory } from 'ember-cli-mirage';

export default Factory.extend( {
  title() {
    return [
      {
        "title": "javascript"
      },
      {
        "title": "typescript"
      },
      {
        "title": "vuejs"
      },
      {
        "title": "java"
      },
      {
        "title": "emberjs"
      },
      {
        "title": "angularjs"
      },
      {
        "title": "reactjs"
      }]
  }
} );