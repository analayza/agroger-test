import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join('src', 'service', 'Receitas.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/recipe', (req, res) => {
  const db = router.db;
  const classicRecipes = db.get('receitas').value();
  res.jsonp(classicRecipes);
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
