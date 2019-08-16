export default function(server) {
  // server.loadFixtures();
  // console.log( server );
  server.createList('category', 1);
  server.createList('post', 150)
}
