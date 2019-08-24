export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  //single data
  this.get('/homes/:id', function (schema, request) {
    return schema.homes.find(request.params.id);
  });

  //collection of data
  this.get('/homes', (schema) => {
    return schema.homes.all();
  });

  //single data
  this.get('/posts/:id', function (schema, request) {
    return schema.posts.find(request.params.id);
  });

  this.put('/posts/:id', function(schema, request){
    const result = JSON.parse(request.requestBody);
    result.post.likes++;
    return result;
  });

  //collection of data
  this.get('/posts', function (schema, request) {
    // return schema.posts.all();
    let perPage = parseInt(request.queryParams.per_page, 10);
    let startPage = parseInt(request.queryParams.page, 10);
    let pageCount = Math.ceil(schema.posts.all().length / perPage);
    let offset = perPage * (startPage - 1);
    let subset = schema.posts.all().models.slice(offset, offset + perPage);
    return { posts: subset, meta: { total_pages: pageCount } };
  });

  this.get('/categories', function (schema) {
    return schema.categories.all();
  })
}
