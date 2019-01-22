import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import flash from 'flash';
import http from 'http';
import io from 'socket.io';
import morgan from 'morgan';
import passport from 'passport';
import path from 'path';
import session from 'express-session';
import sioCookieParser from 'socket.io-cookie-parser';

import * as cfg from '../config';
import { routeHTTP, routeSockets } from './routes';

const app = express();
const store = new session.MemoryStore();

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(session({
  key: 'sid',
  store: store,
  secret: process.env.SECRET_KEY,
  saveUninitialized: true,
  resave: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'ejs');
app.set('views', cfg.paths.VIEWS);

const publicDir = path.join(__dirname, 'public');
app.use(express.static('public'));

routeHTTP(app);

const server = http.createServer(app).listen(cfg.PORT, () => {
  console.log('server listening on port ' + cfg.PORT);
});

const sio = io.listen(server);
sio.use(sioCookieParser());
routeSockets(app, store);
