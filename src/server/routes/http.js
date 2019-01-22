import { * as cfg } from '../config';

export function routeHTTP(app) {

  app.get('/', (req, res) => {

    console.log()
    res.render('index.ejs');

  });

}
