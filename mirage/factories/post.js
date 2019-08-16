import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend( {
  title: faker.name.title,
  text: faker.lorem.text,
  img: faker.random.image,
  url: faker.internet.url,
  iconButtonList() {
    return {favorite: "favorite", share: "share"}
  }
  ,
  categoryList: faker.lorem.slug,
  viewCount: faker.random.number
} );