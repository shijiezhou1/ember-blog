import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  img: DS.attr('string'),
  url: DS.attr('string'),
  iconButtonList: DS.attr(),
  categoryList: DS.attr(),
  viewCount: DS.attr()
});
