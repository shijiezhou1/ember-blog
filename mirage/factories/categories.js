import { Factory } from 'ember-cli-mirage';

export default Factory.extend( {
  title() {
    return {
      1:"javascript",
      2:"typescript",
      3:"vuejs",
      4:"java",
      5:"emberjs",
      6:"angularjs",
      7:"reactjs",
    }
  }
} );